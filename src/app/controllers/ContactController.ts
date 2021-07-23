import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import ContactRepository from '../../repositories/ContactRepository';
import EntitiRepository from '../../repositories/EntityRepository';
import TypecontactRepository from '../../repositories/TypecontactRepository';

class ContactController {
  async index(req: Request, res: Response) {
    const contactRepository = getCustomRepository(ContactRepository);
    const contact = await contactRepository.find({
      relations: ['typecontact', 'entity'],
    });

    return res.status(200).json(contact);
  }

  async store(req: Request, res: Response) {
    try {
      const contactRepository = getCustomRepository(ContactRepository);
      const typecontactRepository = getCustomRepository(TypecontactRepository);
      const entityRepository = getCustomRepository(EntitiRepository);

      const { typecontactId, entityId, content } = req.body;

      const typecontact = await typecontactRepository.findOne({
        where: {
          id: typecontactId,
        },
      });

      if (!typecontact) {
        return res
          .status(404)
          .json({ error: 'Tipo de contacto não encontrado!' });
      }

      const entity = await entityRepository.findOne({
        where: { id: entityId },
      });

      if (!entity) {
        return res.status(404).json({ error: 'Entitdade não encontrada!' });
      }

      const contactExists = await contactRepository.findOne({
        where: { content },
      });

      if (contactExists) {
        return res.status(400).json({ error: 'Contacto já existente!' });
      }

      const contact = contactRepository.create(req.body);
      await contactRepository.save(contact);
      return res.status(200).json(contact);
    } catch (err) {
      console.log('Error=>', err);
    }
  }

  async put(req: Request, res: Response) {
    try {
      const contactRepository = getCustomRepository(ContactRepository);

      const { id } = req.params;
      const contact = await contactRepository.findOne(id);

      if (!contact) {
        return res.status(404).json({ error: 'Contacto não encontrado!' });
      }

      contactRepository.merge(contact, req.body);
      const results = await contactRepository.save(contact);

      return res.status(200).json(results);
    } catch (err) {
      console.log('Error==>', err);
    }
  }
  async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const contactRepository = getCustomRepository(ContactRepository);
      const contact = await contactRepository.findOne(id);

      if (!contact) {
        return res.status(404).json({ error: 'Contacto não encontrado!' });
      }

      await contactRepository.delete(id);

      return res.status(200).json({ message: 'Dado eliminado com sucesso!' });
    } catch (err) {
      console.log('Error==>', err);
    }
  }
}

export default new ContactController();
