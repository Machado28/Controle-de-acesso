import { Request, Response} from 'express'
import {getCustomRepository} from 'typeorm'
import RoleRepository from '../../repositories/RoleRepository';

class RoleController {
 
  async create(req: Request, res: Response) {
    
    const roleRepository = getCustomRepository(RoleRepository)

    const { nome } = req.body;
    const ExistRole = await roleRepository.findOne(nome)

    if (ExistRole) {
      return res.status(400).json({ message: 'role already exists!' })
    }
    const role = roleRepository.create({
      nome
    })
   
    await roleRepository.save(role)
    
    return res.status(201).json(role)
  };

  async get(req: Request, res: Response) {
    
    const id = req.params.id
    const roleRepository = getCustomRepository(RoleRepository)
    const ExistRole = await roleRepository.findOne(id)

    if (ExistRole) {
      const result = ExistRole

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "role not found!" })
  }
}
export default new RoleController;
 