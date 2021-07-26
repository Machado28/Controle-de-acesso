import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('type_yearTeach')
class TypeYearTeach{

  @PrimaryGeneratedColumn('increment')
  id: string;
  
  @Column('varchar')
  name: string;
  
  @CreateDateColumn()
  created_At: Timestamp;

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default TypeYearTeach;