import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import CountryRepository from '../../repositories/CountryRepository';
import ProvinceRepository from '../../repositories/ProvinceRepository';
 

class ProvinceController {
 
  async create(req: Request, res: Response) {
    const provinceRepository = getCustomRepository(ProvinceRepository)
    const countryRepository = getCustomRepository(CountryRepository)

    const { name, description, country} = req.body;
   
    const ExistProvince = await provinceRepository.findOne({ name })
    const ExistCountry = await countryRepository.findByIds(country)
     
    if (ExistProvince) {
      return res.status(400).json({ message: 'Province already exists!' })
    }
    
    if (!ExistCountry) {
      return res.status(404).json({message:'Country not found!'})
    }

    const province = provinceRepository.create( req.body );

    await provinceRepository.save(province)
    
    return res.status(201).json(province)
  };

  async get(req: Request, res: Response) {
    const provinceRepository = getCustomRepository(ProvinceRepository)
    const ExistProvince = await provinceRepository.find()

    if (ExistProvince) {
      const result = ExistProvince

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "Provinces not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const provinceRepository = getCustomRepository(ProvinceRepository)
    const ExistProvince = await provinceRepository.findOne(id)

    if (ExistProvince) {
      const result = ExistProvince
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "Province not found!" })
  };

  async update(req: Request, res: Response) {
    const id = req.params.id
    const {name,description} = req.body
    const provinceRepository = getCustomRepository(ProvinceRepository)
    const ExistProvince = await provinceRepository.findOne(id)

    if (ExistProvince) {
        const result= await  provinceRepository.update({id:id},{name:name, description})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "Province not found!" })
  };

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const provinceRepository = getCustomRepository(ProvinceRepository)
    const ExistProvince = await provinceRepository.findOne(id.toString())

    if (ExistProvince) {
        const result= await  provinceRepository.delete( id)

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "Province not found!" })
  }
}
export default new ProvinceController;
 