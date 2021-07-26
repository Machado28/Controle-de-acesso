import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import SchoolingRepository from '../../repositories/SchoolingRepository'


class SchoolingController {
 
  async create(req: Request, res: Response) {
    const schoolingRepository = getCustomRepository(SchoolingRepository)
    const { name,description } = req.body;
    const ExistSchooling = await schoolingRepository.findOne({name})
    
    if (ExistSchooling) {
      return res.status(400).json({ message: 'schooling already exists!' })
    }

    const schooling = schoolingRepository.create({
      name,
      description
    });
    await schoolingRepository.save(schooling)
    
    return res.status(201).json(schooling)
  };

  async get(req: Request, res: Response) {
    const schoolingRepository = getCustomRepository(SchoolingRepository)
    const ExistSchooling = await schoolingRepository.find()

    if (ExistSchooling) {
      const result = ExistSchooling

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "schoolings not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const schoolingRepository = getCustomRepository(SchoolingRepository)
    const ExistSchooling = await schoolingRepository.findOne(id)

    if (ExistSchooling) {
      const result = ExistSchooling
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "schooling not found!" })
  };

  async update(req: Request, res: Response) {
    const {id,name,description} = req.body
    const schoolingRepository = getCustomRepository(SchoolingRepository)
    const ExistSchooling = await schoolingRepository.findOne(id)

    if (ExistSchooling) {
        const result= await  schoolingRepository.update({id:id},{name:name})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "schooling not found!" })
  };

  async delete(req: Request, res: Response) {
    const {id,name} = req.body
    const schoolingRepository = getCustomRepository(SchoolingRepository)
    const ExistSchooling = await schoolingRepository.findOne({id})|| await schoolingRepository.findOne({name})

    if (ExistSchooling) {
        const result= await  schoolingRepository.delete({id:id})

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "schooling not found!" })
  }
}
export default new SchoolingController;
 