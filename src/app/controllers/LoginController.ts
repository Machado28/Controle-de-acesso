import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import LoginRepository from '../../repositories/LoginRepository';
import ContactRepository from '../../repositories/ContactRepository';
import EntitiRepository from '../../repositories/EntityRepository';

class LoginController {
  async index(req: Request, res: Response) {
    const loginRepository = getCustomRepository(LoginRepository);

    const login = await loginRepository.find({
      relations: ['contact', 'entity'],
    });

    return res.status(200).json(login);
  }

  async store(req: Request, res: Response) {
    try {
      const loginRepository = getCustomRepository(LoginRepository);
      const contactRepository = getCustomRepository(ContactRepository);
      const entityRepository = getCustomRepository(EntitiRepository);

      const { contactId, entityId } = req.body;

      const contact = await contactRepository.findOne({
        where: {
          id: contactId,
        },
      });

      if (!contact) {
        return res.status(404).json({ error: 'Contacto não encontrado!' });
      }

      const entity = await entityRepository.findOne({
        where: { id: entityId },
      });

      if (!entity) {
        return res.status(404).json({ error: 'Entitdade não encontrada!' });
      }

      const contactIdExist = await loginRepository.findOne({
        where: { contactId },
      });

      if (contactIdExist) {
        return res.status(400).json({ error: 'Contacto não válido' });
      }

      const entityIdExist = await loginRepository.findOne({
        where: { entityId },
      });

      if (entityIdExist) {
        return res.status(400).json({ error: 'Já tens uma conta não válido' });
      }

      if (contact.entityId !== entityId) {
        return res.json({ error: 'Não pode usar esses dados!' });
      }

      const login = loginRepository.create(req.body);
      await loginRepository.save(login);
      return res.status(200).json(login);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new LoginController();
