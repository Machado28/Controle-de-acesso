import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import Schooling from './schooling';
import Country from './country';

@Entity('province')
class Povince{

  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('varchar')
  name: string;

  @Column({ name: 'description' })
  description: string;
    
  @ManyToOne(type => Country, provinces => Povince,{eager:true})
  country: Country;

  @CreateDateColumn()
  created_At: Timestamp;

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default Povince;