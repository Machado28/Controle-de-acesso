import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import TypeYearTeachRepository from '../../repositories/TypeYearTeach';


class TypeYearTeachController {
 
  async create(req: Request, res: Response) {
    const typeYearTeachRepository = getCustomRepository(TypeYearTeachRepository)
    const { name} = req.body;
    const ExistTypeYearTeach = await typeYearTeachRepository.findOne({name})

    if (ExistTypeYearTeach) {
      return res.status(200).json({ message: 'TypeYearTeach already exists!' })
    }

    const typeYearTeach = typeYearTeachRepository.create({
      name
    })
    await typeYearTeachRepository.save(typeYearTeach)
    
    return res.status(201).json(typeYearTeach)
  };

  async get(req: Request, res: Response) {
    const typeYearTeachRepository = getCustomRepository(TypeYearTeachRepository)
    const ExistTypeYearTeach = await typeYearTeachRepository.find()

    if (ExistTypeYearTeach) {
      const result = ExistTypeYearTeach

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeYearTeachs not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const typeYearTeachRepository = getCustomRepository(TypeYearTeachRepository)
    const ExistTypeYearTeach = await typeYearTeachRepository.findOne(id)

    if (ExistTypeYearTeach) {
      const result = ExistTypeYearTeach
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeYearTeach not found!" })
  };

  async update(req: Request, res: Response) {
    const {id,name } = req.body
    const typeYearTeachRepository = getCustomRepository(TypeYearTeachRepository)
    const ExistTypeYearTeach = await typeYearTeachRepository.findOne(id)

    if (ExistTypeYearTeach) {
        const result= await  typeYearTeachRepository.update({id:id},{name:name})

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeYearTeach not found!" })
  };

  async delete(req: Request, res: Response) {
    const {id,name} = req.body
    const typeYearTeachRepository = getCustomRepository(TypeYearTeachRepository)
    const ExistTypeYearTeach = await typeYearTeachRepository.findOne({id})

    if (ExistTypeYearTeach) {
        const result= await  typeYearTeachRepository.delete({id:id})

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeYearTeach not found!" })
  }
}
export default new TypeYearTeachController;
 