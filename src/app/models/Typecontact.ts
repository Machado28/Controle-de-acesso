import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('typecontact')
class Typecontact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;
}

export default Typecontact;
