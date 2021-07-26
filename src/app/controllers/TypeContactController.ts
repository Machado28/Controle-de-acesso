import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import TypeContactRepository from '../../repositories/TypeContactRepository';


class TypeContactController {
 
  async create(req: Request, res: Response) {
    const typeContactRepository = getCustomRepository(TypeContactRepository)
    const { name,description } = req.body;
    const ExistTypeContact = await typeContactRepository.findOne({name})
    
    if (ExistTypeContact) {
      return res.status(400).json({ message: 'typeContact already exists!' })
    }

    const typeContact = typeContactRepository.create({
      name,
      
    });
    await typeContactRepository.save(typeContact)
    
    return res.status(201).json(typeContact)
  };

  async get(req: Request, res: Response) {
    const typeContactRepository = getCustomRepository(TypeContactRepository)
    const ExisttypeContact = await typeContactRepository.find()

    if (ExisttypeContact) {
      const result = ExisttypeContact

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "typeContacts not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const typeContactRepository = getCustomRepository(TypeContactRepository)
    const ExisttypeContact = await typeContactRepository.findOne(id)

    if (ExisttypeContact) {
      const result = ExisttypeContact
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "typeContact not found!" })
  };

  async update(req: Request, res: Response) {
    const {id,name,description} = req.body
    const typeContactRepository = getCustomRepository(TypeContactRepository)
    const ExisttypeContact = await typeContactRepository.findOne(id)

    if (ExisttypeContact) {
        const result= await  typeContactRepository.update({id:id},{name:name})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "typeContact not found!" })
  };

  async delete(req: Request, res: Response) {
    const {id,name} = req.body
    const typeContactRepository = getCustomRepository(TypeContactRepository)
    const ExisttypeContact = await typeContactRepository.findOne({id})

    if (ExisttypeContact) {
        const result= await  typeContactRepository.delete({id:id})

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "typeContact not found!" })
  }
}
export default new TypeContactController;
 