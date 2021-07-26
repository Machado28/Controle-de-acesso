import { Router} from 'express'
import { Request, Response } from 'express'
import RoleController from './app/controllers/RoleController'

const routes = Router()

routes.get('/', (req: Request, res:Response) => {
  return res.status(400).json({message:'running well'})
})

routes.post('/role', (RoleController.create))
routes.get('/roles',RoleController.get)
routes.get('/role/:id',RoleController.getOne)
routes.put('/role',RoleController.update)
routes.delete('/role', RoleController.delete)

export default routes;