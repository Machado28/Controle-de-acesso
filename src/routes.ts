import { Router } from 'express';

import TypeentityController from './app/controllers/TypeentityController';
import EntityController from './app/controllers/EntityController';
import TypecontactController from './app/controllers/TypecontactController';
import ContactController from './app/controllers/ContactController';
import LoginController from './app/controllers/LoginController';

const router = Router();

//Typeentity
router.post('/typeentity', TypeentityController.store);
router.get('/typeentity', TypeentityController.index);
router.put('/typeentity/:id', TypeentityController.put);
router.delete('/typeentity/:id', TypeentityController.destroy);

//Entity
router.get('/entity', EntityController.index);
router.post('/entity', EntityController.store);
router.put('/entity/:id', EntityController.put);
router.delete('/entity/:id', EntityController.destroy);

//Typecontact
router.get('/typecontact', TypecontactController.index);
router.post('/typecontact', TypecontactController.store);
router.put('/typecontact/:id', TypecontactController.put);
router.delete('/typecontact/:id', TypecontactController.destroy);

//Contact
router.get('/contact', ContactController.index);
router.post('/contact', ContactController.store);
router.put('/contact/:id', ContactController.put);
router.delete('/contact/:id', ContactController.destroy);

//Login
router.get('/login', LoginController.index);
router.post('/login', LoginController.store);

export default router;
