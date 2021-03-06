import { Router} from 'express'
import { Request, Response } from 'express'
import Role_controller, {
  TypeSchool_controller, TypeContact_controller, TypeMatricula_controller,
  TypeYearTeach_controller, Schooling_controller, ClassRoom_controller,
  Level_controller,Province_controller,Country_controller
} from './app/controllers'

const routes = Router()

routes.get('/', (req: Request, res:Response) => {
  return res.status(400).json({message:'running well'})
})
//CRUD ROLE ROUTES
routes.post('/role', (Role_controller.create))
routes.get('/roles',Role_controller.get)
routes.get('/role/:id',Role_controller.getOne)
routes.put('/role',Role_controller.update)
routes.delete('/role/:id', Role_controller.delete)

//CRUD TYPESCHOOL ROUTES
routes.post('/type_school', (TypeSchool_controller.create))
routes.get('/type_schools',TypeSchool_controller.get)
routes.get('/type_school/:id',TypeSchool_controller.getOne)
routes.put('/type_school/:id',TypeSchool_controller.update)
routes.delete('/type_school/:id', TypeSchool_controller.delete)

//CRUD TYPECONTACT ROUTES
routes.post('/type_contact', (TypeContact_controller.create))
routes.get('/type_contacts',TypeContact_controller.get)
routes.get('/type_contact/:id',TypeContact_controller.getOne)
routes.put('/type_contact/:id',TypeContact_controller.update)
routes.delete('/type_contact/:id', TypeContact_controller.delete)

//CRUD TYPEMATRICULA ROUTES
routes.post('/type_matricula', (TypeMatricula_controller.create))
routes.get('/type_matriculas',TypeMatricula_controller.get)
routes.get('/type_matricula/:id',TypeMatricula_controller.getOne)
routes.put('/type_matricula/:id',TypeMatricula_controller.update)
routes.delete('/type_matricula/:id', TypeMatricula_controller.delete)

//CRUD TYPEYEARTEACH ROUTES
routes.post('/type_year_teach', (TypeYearTeach_controller.create))
routes.get('/type_year_teachs',TypeYearTeach_controller.get)
routes.get('/type_year_teach/:id',TypeYearTeach_controller.getOne)
routes.put('/type_year_teach/:id',TypeYearTeach_controller.update)
routes.delete('/type_year_teach/:id', TypeYearTeach_controller.delete)

//CRUD SCHOOLING ROUTES
routes.post('/schooling', (Schooling_controller.create))
routes.get('/schoolings',Schooling_controller.get)
routes.get('/schooling/:id',Schooling_controller.getOne)
routes.put('/schooling/:id',Schooling_controller.update)
routes.delete('/schooling/:id', Schooling_controller.delete)

//CRUD CLASSROOM ROUTES
routes.post('/classroom', ClassRoom_controller.create)
routes.get('/classrooms',ClassRoom_controller.get)
routes.get('/classroom/:id',ClassRoom_controller.getOne)
routes.put('/classroom/:id',ClassRoom_controller.update)
routes.delete('/classroom/:id', ClassRoom_controller.delete)


//CRUD LESSON ROUTES
routes.post('/level', Level_controller.create)
routes.get('/levels',Level_controller.get)
routes.get('/level/:id',Level_controller.getOne)
routes.put('/level/:id',Level_controller.update)
routes.delete('/level/:id', Level_controller.delete)



//CRUD Country ROUTES
routes.post('/country', Country_controller.create)
routes.get('/countries',Country_controller.get)
routes.get('/country/:id',Country_controller.getOne)
routes.put('/country/:id',Country_controller.update)
routes.delete('/country/:id', Country_controller.delete)



//CRUD Province ROUTES
routes.post('/province', Province_controller.create)
routes.get('/provinces',Province_controller.get)
routes.get('/province/:id',Province_controller.getOne)
routes.put('/province/:id',Province_controller.update)
routes.delete('/province/:id', Province_controller.delete)


export default routes;