import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import SchoolingRepository from '../../repositories/SchoolingRepository';
import LevelRepository from '../../repositories/LevelRepository';
 

class LevelController {
 
  async create(req: Request, res: Response) {
    const levelRepository = getCustomRepository(LevelRepository)
    const schoolingRepository = getCustomRepository(SchoolingRepository)

    const { name, description, schooling} = req.body;
   
    const ExistLevel = await levelRepository.findOne({ name })
    const ExistSchooling = await schoolingRepository.findByIds(schooling)
     
    if (ExistLevel) {
      return res.status(400).json({ message: 'Level already exists!' })
    }
    
    if (!ExistSchooling) {
      return res.status(404).json({message:'schooling not found!'})
    }
    const level = levelRepository.create( req.body );

    await levelRepository.save(level)
    
    return res.status(201).json(level)
  };

  async get(req: Request, res: Response) {
    const levelRepository = getCustomRepository(LevelRepository)
    const ExistLevel = await levelRepository.find()

    if (ExistLevel) {
      const result = ExistLevel

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "Levels not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const levelRepository = getCustomRepository(LevelRepository)
    const ExistLevel = await levelRepository.findOne(id)

    if (ExistLevel) {
      const result = ExistLevel
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "Level not found!" })
  };

  async update(req: Request, res: Response) {
    const id = req.params.id
    const {name,description} = req.body
    const levelRepository = getCustomRepository(LevelRepository)
    const ExistLevel = await levelRepository.findOne(id)

    if (ExistLevel) {
        const result= await  levelRepository.update({id:id},{name:name, description})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "Level not found!" })
  };

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const levelRepository = getCustomRepository(LevelRepository)
    const ExistLevel = await levelRepository.findOne(id)

    if (ExistLevel) {
        const result= await  levelRepository.delete(id)

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "Level not found!" })
  }
}
export default new LevelController;
 