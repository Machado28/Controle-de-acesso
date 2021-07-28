import { EntityRepository, Repository } from "typeorm";
import Province  from "../app/models/province";


@EntityRepository(Province)
class ProvinceRepository extends Repository <Province>{
  
  
}
export default ProvinceRepository;