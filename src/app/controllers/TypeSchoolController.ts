import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import TypeSchoolRepository from '../../repositories/TypeShoolRepository';


class TypeSchoolController {
 
  async create(req: Request, res: Response) {
    const typeSchoolRepository = getCustomRepository(TypeSchoolRepository)
    const { name,description } = req.body;
    const ExistTypeSchool = await typeSchoolRepository.findOne({name})

    if (ExistTypeSchool) {
      return res.status(200).json({ message: 'TypeSchool already exists!' })
    }

    const typeSchool = typeSchoolRepository.create({
      name,
      description
    })
    await typeSchoolRepository.save(typeSchool)
    
    return res.status(201).json(typeSchool)
  };

  async get(req: Request, res: Response) {
    const typeSchoolRepository = getCustomRepository(TypeSchoolRepository)
    const ExistTypeSchool = await typeSchoolRepository.find()

    if (ExistTypeSchool) {
      const result = ExistTypeSchool

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeSchools not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const typeSchoolRepository = getCustomRepository(TypeSchoolRepository)
    const ExistTypeSchool = await typeSchoolRepository.findOne(id)

    if (ExistTypeSchool) {
      const result = ExistTypeSchool
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeSchool not found!" })
  };

  async update(req: Request, res: Response) {
    const {id,name,description} = req.body
    const typeSchoolRepository = getCustomRepository(TypeSchoolRepository)
    const ExistTypeSchool = await typeSchoolRepository.findOne(id)

    if (ExistTypeSchool) {
        const result= await  typeSchoolRepository.update({id:id},{name:name, description:description})

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeSchool not found!" })
  };

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const typeSchoolRepository = getCustomRepository(TypeSchoolRepository)
    const ExistTypeSchool = await typeSchoolRepository.findOne(id)

    if (ExistTypeSchool) {
        const result= await  typeSchoolRepository.delete(id)

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "TypeSchool not found!" })
  }
}
export default new TypeSchoolController;
 