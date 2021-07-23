import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Typecontact from './Typecontact';
import Entiti from './Entity';

@Entity('contact')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column('uuid')
  typecontactId: string;
  @ManyToOne(() => Typecontact, (typecontact) => typecontact)
  @JoinColumn({ name: 'typecontactId' })
  typecontact: Typecontact;

  @Column('uuid')
  entityId: string;
  @ManyToOne(() => Entiti, (entity) => entity)
  @JoinColumn({ name: 'entityId' })
  entity: Entiti;
}

export default Contact;
