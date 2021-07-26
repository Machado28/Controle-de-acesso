import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('classRoom')
class classRoom {

  @PrimaryGeneratedColumn('increment')
  id: string;
  
  @Column('varchar')
  number: string;
  
  @Column('varchar')
  description: string;
  
  @CreateDateColumn()
  created_At: Timestamp;
  

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default classRoom;