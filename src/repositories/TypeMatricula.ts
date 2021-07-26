import { EntityRepository, Repository } from "typeorm";
import TypeMatricula from "../app/models/typeMatricula";

@EntityRepository(TypeMatricula)
class TypeMatriculaRepository extends Repository <TypeMatricula>{
  
  
}
export default TypeMatriculaRepository;