import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('type_school')
class TypeSchool {

  @PrimaryGeneratedColumn('increment')
  id: string;
  
  @Column('varchar')
  name: string;

  
  @Column('varchar')
  description: string;
  
  @CreateDateColumn()
  created_At: Timestamp;

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default TypeSchool;