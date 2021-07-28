import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('type_Matricula')
class TypeMatricula {

  @PrimaryGeneratedColumn('uuid',)
  id: {type:'varchar'};
  
  @Column('varchar')
  name: string;
  
  @CreateDateColumn()
  created_At: Timestamp;

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default TypeMatricula;