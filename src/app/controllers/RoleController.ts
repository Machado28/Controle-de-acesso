import { Request, Response} from 'express'
import {getCustomRepository} from 'typeorm'
import RoleRepository from '../../repositories/RoleRepository';
import 'reflect-metadata' 

class RoleController {
 
  async create(req: Request, res: Response) {
    const roleRepository = getCustomRepository(RoleRepository)
    const { name,description,idade } = req.body;
    const ExistRole = await roleRepository.findOne({name})
    if (idade > 12) {
      console.log("aduto:"+idade)
    }
    if (ExistRole) {
      return res.status(400).json({ message: 'role already exists!' })
    }

    const role = roleRepository.create({
      name,
      description
    })
    await roleRepository.save(role)
    
    return res.status(201).json(role)
  };

  async get(req: Request, res: Response) {
    const roleRepository = getCustomRepository(RoleRepository)
    const ExistRole = await roleRepository.find()

    if (ExistRole) {
      const result = ExistRole

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "roles not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const roleRepository = getCustomRepository(RoleRepository)
    const ExistRole = await roleRepository.findOne(id)

    if (ExistRole) {
      const result = ExistRole
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "role not found!" })
  };

  async update(req: Request, res: Response) {
    const {id,name,description} = req.body
    const roleRepository = getCustomRepository(RoleRepository)
    const ExistRole = await roleRepository.findOne(id)

    if (ExistRole) {
        const result= await  roleRepository.update({id:id},{name:name, description:description})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "role not found!" })
  };

  async delete(req: Request, res: Response) {
    const {id,name} = req.body
    const roleRepository = getCustomRepository(RoleRepository)
    const ExistRole = await roleRepository.findOne({id})

    if (ExistRole) {
        const result= await  roleRepository.delete({id:id})

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "role not found!" })
  }
}
export default new RoleController;
 