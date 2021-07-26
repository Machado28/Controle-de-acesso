import { EntityRepository, Repository } from "typeorm";
import Role from "../app/models/role";


@EntityRepository(Role)
class RoleRepository extends Repository <Role>{
  
  
}
export default RoleRepository;