import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import TypeMatriculaRepository from '../../repositories/TypeMatricula';


class TypeMatriculaController {
 
  async create(req: Request, res: Response) {
    const typeMatriculaRepository = getCustomRepository(TypeMatriculaRepository)
    const { name,description } = req.body;
    const ExistTypeMatricula = await typeMatriculaRepository.findOne({name})
    
    if (ExistTypeMatricula) {
      return res.status(400).json({ message: 'typeMatricula already exists!' })
    }

    const typeMatricula = typeMatriculaRepository.create({
      name,
      
    });
    await typeMatriculaRepository.save(typeMatricula)
    
    return res.status(201).json(typeMatricula)
  };

  async get(req: Request, res: Response) {
    const typeMatriculaRepository = getCustomRepository(TypeMatriculaRepository)
    const ExisttypeMatricula = await typeMatriculaRepository.find()

    if (ExisttypeMatricula) {
      const result = ExisttypeMatricula

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "typeMatriculas not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const typeMatriculaRepository = getCustomRepository(TypeMatriculaRepository)
    const ExisttypeMatricula = await typeMatriculaRepository.findOne(id)

    if (ExisttypeMatricula) {
      const result = ExisttypeMatricula
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "typeMatricula not found!" })
  };

  async update(req: Request, res: Response) {
    const {id,name,description} = req.body
    const typeMatriculaRepository = getCustomRepository(TypeMatriculaRepository)
    const ExisttypeMatricula = await typeMatriculaRepository.findOne(id)

    if (ExisttypeMatricula) {
        const result= await  typeMatriculaRepository.update({id:id},{name:name})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "typeMatricula not found!" })
  };

  async delete(req: Request, res: Response) {
    const {id,name} = req.body
    const typeMatriculaRepository = getCustomRepository(TypeMatriculaRepository)
    const ExisttypeMatricula = await typeMatriculaRepository.findOne({id})

    if (ExisttypeMatricula) {
        const result= await  typeMatriculaRepository.delete({id:id})

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "typeMatricula not found!" })
  }
}
export default new TypeMatriculaController;
 