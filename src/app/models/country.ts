import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn, OneToMany } from 'typeorm';
import Province from './province';

@Entity('country')
class Country {

  @PrimaryGeneratedColumn('increment')
  id: string;
  
  @Column('varchar')
  name: string;
  
  @Column('varchar')
  description: string;
     
  @OneToMany(type => Province, country => Country)
  provinces:Province[];
  
  @CreateDateColumn()
  created_At: Timestamp;
  
  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default Country;