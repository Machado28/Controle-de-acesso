import { EntityRepository, Repository } from "typeorm";
import Schooling  from "../app/models/schooling";


@EntityRepository(Schooling)
class SchoolingRepository extends Repository <Schooling>{
  
  
}
export default SchoolingRepository;