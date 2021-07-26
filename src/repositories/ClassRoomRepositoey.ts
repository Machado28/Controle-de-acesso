import { EntityRepository, Repository } from "typeorm";
import ClassRoom from "../app/models/classRoom";


@EntityRepository(ClassRoom)
class ClassRoomRepository extends Repository <ClassRoom>{
  
  
}
export default ClassRoomRepository;