import { EntityRepository, Repository } from "typeorm";
import TypeYearTeach from "../app/models/yearTeach";


@EntityRepository(TypeYearTeach)
class TypeContactRepository extends Repository <TypeYearTeach>{
  
  
}
export default TypeContactRepository;