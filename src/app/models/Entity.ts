import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Typeentity from './Typeentity';

@Entity('entity')
class Entiti {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nif: string;

  @Column()
  username: string;

  @Column('date')
  dateborn: Date;

  @Column('uuid')
  typeentityId: string;
  @ManyToOne(() => Typeentity, (typeentity) => typeentity)
  @JoinColumn({ name: 'typeentityId' })
  typeentity: Typeentity;

  @Column('uuid')
  enderecoId: string;
}

export default Entiti;
