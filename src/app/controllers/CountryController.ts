import 'reflect-metadata' 
import { Request, Response } from 'express'
import {getCustomRepository} from 'typeorm'
import CountryRepository from '../../repositories/CountryRepository';


class CountryController {
 
  async create(req: Request, res: Response) {
    const countryRepository = getCustomRepository(CountryRepository)
    const { name,description} = req.body;
    const ExistCountry = await countryRepository.findOne({name})
     
    if (ExistCountry) {
      return res.status(400).json({ message: 'Country already exists!' })
    }

    const Country = countryRepository.create({
      name,
      description
      
    })
    await countryRepository.save(Country)
    
    return res.status(201).json(Country)
  };

  async get(req: Request, res: Response) {
    const countryRepository = getCustomRepository(CountryRepository)
    const ExistCountry = await countryRepository.find()

    if (ExistCountry) {
      const result = ExistCountry

      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "Countrys not founds!" })
  };

  async getOne(req: Request, res: Response) {
    const id = req.params.id
    const countryRepository = getCustomRepository(CountryRepository)
    const ExistCountry = await countryRepository.findOne(id)

    if (ExistCountry) {
      const result = ExistCountry
      
      return res.status(400).json(result)
    }
    return res.status(402).json({ message: "Country not found!" })
  };

  async update(req: Request, res: Response) {
    const id = req.params.id
    const {name,description} = req.body
    const countryRepository = getCustomRepository(CountryRepository)
    const ExistCountry = await countryRepository.findOne(id)

    if (ExistCountry) {
        const result= await  countryRepository.update({id:id},{name:name, description:description})

      return res.status(201).json(result)
    }
    return res.status(402).json({ message: "Country not found!" })
  };

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const countryRepository = getCustomRepository(CountryRepository)
    const ExistCountry = await countryRepository.findOne(id)

    if (ExistCountry) {
        const result= await  countryRepository.delete(id)

      return res.status(200).json(result)
    }
    return res.status(402).json({ message: "Country not found!" })
  }
}
export default new CountryController;
 