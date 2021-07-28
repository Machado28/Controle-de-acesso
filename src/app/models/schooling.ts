import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn, OneToMany } from 'typeorm';
import Level from './level';

@Entity('schooling')
class Schooling {

  @PrimaryGeneratedColumn('increment')
  id: string;
  
   @Column({nullable:true})
  name: string;
  
  @Column('varchar')
  description: string;
  
  @CreateDateColumn()
  created_At: Timestamp;
  
  @OneToMany(type => Level, schooling => Schooling)
  levels: Level[];

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default Schooling;