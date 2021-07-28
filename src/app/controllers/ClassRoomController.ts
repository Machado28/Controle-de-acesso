import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import ClassRoomRepository from '../../repositories/ClassRoomRepositoey'


class classRoomController {
 
  async create(req: Request, res: Response) {
    const classRoomRepository = getCustomRepository(ClassRoomRepository)
    const { number,description } = req.body;
    const ExistClassRoom = await classRoomRepository.findOne({number})
    
    if (ExistClassRoom) {
      return res.status(400).json({ message: 'classRoom already exists!' })
    }

    const classRoom = classRoomRepository.create({
     number,
      description
    });
    await classRoomRepository.save(classRoom)
    
    return res.status(201).json(classRoom)
  };

  async get(req: Request, res: Response) {
    const classRoomRepository = getCustomRepository(ClassRoomRepository)
    const ExistClassRoom = await classRoomRepository.find()

    if (ExistClassRoom) {
      const result = ExistClassRoom

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "classRooms not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const classRoomRepository = getCustomRepository(ClassRoomRepository)
    const ExistClassRoom = await classRoomRepository.findOne(id)

    if (ExistClassRoom) {
      const result = ExistClassRoom
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "classRoom not found!" })
  };

  async update(req: Request, res: Response) {
    const id = req.params.id
    const {number,description} = req.body
    const classRoomRepository = getCustomRepository(ClassRoomRepository)
    const ExistclassRoom = await classRoomRepository.findOne(id)

    if (ExistclassRoom) {
        const result= await  classRoomRepository.update({id:id},{number:number,description:description})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "classRoom not found!" })
  };

  async delete(req: Request, res: Response) {
    const id = req.params.id
    
    const classRoomRepository = getCustomRepository(ClassRoomRepository)
    const ExistClassRoom = await classRoomRepository.findOne(id) 

    if (ExistClassRoom) {
        const result= await  classRoomRepository.delete(id)

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "classRoom not found!" })
  }
}
export default new classRoomController;
 