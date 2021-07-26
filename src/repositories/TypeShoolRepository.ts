import { EntityRepository, Repository } from "typeorm";
import TypeSchool from "../app/models/typeSchool";


@EntityRepository(TypeSchool)
class TypeSchoolRepository extends Repository <TypeSchool>{
  
  
}
export default TypeSchoolRepository;