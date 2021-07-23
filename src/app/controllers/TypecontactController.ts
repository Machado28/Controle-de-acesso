import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import TypecontactRepository from '../../repositories/TypecontactRepository';

class TypecontactController {
  async index(req: Request, res: Response) {
    const typecontactRepository = getCustomRepository(TypecontactRepository);
    const typecontact = await typecontactRepository.find();

    return res.json(typecontact);
  }
  async store(req: Request, res: Response) {
    try {
      const typecontactRepository = getCustomRepository(TypecontactRepository);
      const { description } = req.body;

      const typeExist = await typecontactRepository.findOne({
        where: {
          description,
        },
      });

      if (typeExist) {
        return res
          .status(401)
          .json({ error: 'Tipo de contacto já existente!' });
      }

      const typecontact = typecontactRepository.create({ description });
      await typecontactRepository.save(typecontact);

      return res.status(201).json(typecontact);
    } catch (err) {
      console.log(err);
    }
  }

  async put(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const typecontactRepository = getCustomRepository(TypecontactRepository);
      const typecontact = await typecontactRepository.findOne(id);

      if (!typecontact) {
        return res
          .status(404)
          .json({ error: 'Tipo de contacto não encontrada!' });
      }

      typecontactRepository.merge(typecontact, req.body);
      const results = await typecontactRepository.save(typecontact);

      return res.status(200).json(results);
    } catch (err) {
      console.log('Error==>', err);
    }
  }
  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const typecontactRepository = getCustomRepository(TypecontactRepository);
      const typecontact = await typecontactRepository.findOne(id);

      if (!typecontact) {
        return res
          .status(404)
          .json({ error: 'Tipo de contacto não encontrada!' });
      }

      await typecontactRepository.delete(id);

      return res.status(200).json({ message: 'Dado eliminado com sucesso!' });
    } catch (err) {
      console.log('Error==>', err);
    }
  }
}

export default new TypecontactController();
