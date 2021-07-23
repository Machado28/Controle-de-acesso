import { Request, Response } from 'express';
import { getCustomRepository /*getRepository*/ } from 'typeorm';

//import Typeentity from '../models/Typeentity';

import TypeentityRepository from '../../repositories/TypeentityRepository';

class TypeentityController {
  async index(req: Request, res: Response) {
    const typeentityRepository = getCustomRepository(TypeentityRepository);
    const typeentity = await typeentityRepository.find();

    return res.json(typeentity);
  }
  async store(req: Request, res: Response) {
    try {
      const typeentityRepository = getCustomRepository(TypeentityRepository);
      const { description } = req.body;

      const typeExist = await typeentityRepository.findOne({
        where: {
          description,
        },
      });

      if (typeExist) {
        return res
          .status(401)
          .json({ error: 'Tipo de entidade já existente!' });
      }

      const typeentity = typeentityRepository.create({ description });
      await typeentityRepository.save(typeentity);

      return res.status(201).json(typeentity);
    } catch (err) {
      console.log(err);
    }
  }

  async put(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const typeentityRepository = getCustomRepository(TypeentityRepository);
      const typeentity = await typeentityRepository.findOne(id);

      if (!typeentity) {
        return res
          .status(404)
          .json({ error: 'Tipo de entidade não encontrada!' });
      }

      typeentityRepository.merge(typeentity, req.body);
      const results = await typeentityRepository.save(typeentity);

      return res.status(200).json(results);
    } catch (err) {
      console.log('Error==>', err);
    }
  }
  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const typeentityRepository = getCustomRepository(TypeentityRepository);
      const typeentity = await typeentityRepository.findOne(id);

      if (!typeentity) {
        return res
          .status(404)
          .json({ error: 'Tipo de entidade não encontrada!' });
      }

      await typeentityRepository.delete(id);

      return res.status(200).json({ message: 'Dado eliminado com sucesso!' });
    } catch (err) {
      console.log('Error==>', err);
    }
  }
}

export default new TypeentityController();
