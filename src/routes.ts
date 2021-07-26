import { Router} from 'express'
import { Request, Response } from 'express'
import Role_controller, { TypeSchool_controller, TypeContact_controller,  TypeMatricula_controller}from './app/controllers'

const routes = Router()

routes.get('/', (req: Request, res:Response) => {
  return res.status(400).json({message:'running well'})
})
//CRUD ROLE ROUTES
routes.post('/role', (Role_controller.create))
routes.get('/roles',Role_controller.get)
routes.get('/role/:id',Role_controller.getOne)
routes.put('/role',Role_controller.update)
routes.delete('/role', Role_controller.delete)

//CRUD TYPESCHOOL ROUTES
routes.post('/type_school', (TypeSchool_controller.create))
routes.get('/type_schools',TypeSchool_controller.get)
routes.get('/type_school/:id',TypeSchool_controller.getOne)
routes.put('/type_school',TypeSchool_controller.update)
routes.delete('/type_school', TypeSchool_controller.delete)

//CRUD TYPECONTACT ROUTES
routes.post('/type_contact', (TypeContact_controller.create))
routes.get('/type_contacts',TypeContact_controller.get)
routes.get('/type_contact/:id',TypeContact_controller.getOne)
routes.put('/type_contact',TypeContact_controller.update)
routes.delete('/type_contact', TypeContact_controller.delete)

//CRUD TYPEMATRICULA ROUTES
routes.post('/type_matricula', (TypeMatricula_controller.create))
routes.get('/type_matriculas',TypeMatricula_controller.get)
routes.get('/type_matricula/:id',TypeMatricula_controller.getOne)
routes.put('/type_matricula',TypeMatricula_controller.update)
routes.delete('/type_matricula', TypeMatricula_controller.delete)

export default routes;