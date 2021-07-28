import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import Schooling from './schooling';

@Entity('level')
class Level{

  @PrimaryGeneratedColumn('increment')
  id: string;
  
  @Column('varchar')
  name: string;

  @Column({ name: 'description' })
    
  description: string;
    
  @ManyToOne(type => Schooling, levels => Level,{eager:true})
  schooling: Schooling;

  @CreateDateColumn()
  created_At: Timestamp;

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default Level;