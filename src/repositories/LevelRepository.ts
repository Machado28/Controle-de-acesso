import { EntityRepository, Repository } from "typeorm";
import Level  from "../app/models/level";


@EntityRepository(Level)
class LevelRepository extends Repository <Level>{
  
  
}
export default LevelRepository;