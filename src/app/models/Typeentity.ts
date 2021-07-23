import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('typeentity')
class Typeentity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;
}

export default Typeentity;