import { Request, Response } from 'express';
import { EntityRepository, getCustomRepository } from 'typeorm';

import EntitiRepository from '../../repositories/EntityRepository';
import TypeentityRepository from '../../repositories/TypeentityRepository';

class EntityController {
  async index(req: Request, res: Response) {
    const entityRepository = getCustomRepository(EntitiRepository);
    const entity = await entityRepository.find({ relations: ['typeentity'] });

    return res.status(200).json(entity);
  }

  async store(req: Request, res: Response) {
    const entityRepository = getCustomRepository(EntitiRepository);
    const typeentityRepository = getCustomRepository(TypeentityRepository);

    const { typeentityId } = req.body;

    const typeentity = await typeentityRepository.findOne({
      where: { id: typeentityId },
    });

    if (!typeentity) {
      return res
        .status(404)
        .json({ error: 'Tipo de entidade não encontrada!' });
    }

    const entity = entityRepository.create(req.body);
    await entityRepository.save(entity);
    return res.status(200).json(entity);
  }

  async put(req: Request, res: Response) {
    try {
      const entityRepository = getCustomRepository(EntitiRepository);

      const { id } = req.params;
      const entity = await entityRepository.findOne(id);

      if (!entity) {
        return res.status(404).json({ error: 'Entidade não encontrada!' });
      }

      entityRepository.merge(entity, req.body);
      const results = await entityRepository.save(entity);

      return res.status(200).json(results);
    } catch (err) {
      console.log('Error==>', err);
    }
  }
  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const entityRepository = getCustomRepository(EntitiRepository);
      const entity = await entityRepository.findOne(id);

      if (!entity) {
        return res.status(404).json({ error: 'Entidade não encontrada!' });
      }

      await entityRepository.delete(id);

      return res.status(200).json({ message: 'Dado eliminado com sucesso!' });
    } catch (err) {
      console.log('Error==>', err);
    }
  }
}

export default new EntityController();
