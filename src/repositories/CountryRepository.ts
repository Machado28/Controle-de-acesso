import { EntityRepository, Repository } from "typeorm";
import Country  from "../app/models/country";


@EntityRepository(Country)
class CountryRepository extends Repository <Country>{
  
  
}
export default CountryRepository;