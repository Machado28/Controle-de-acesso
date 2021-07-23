import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcrypt';

import Contact from './Contact';
import Entiti from './Entity';

@Entity('login')
class Login {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;

  @Column('uuid')
  contactId: string;
  @OneToOne(() => Contact, (contact) => contact)
  @JoinColumn({ name: 'contactId' })
  contact: Contact;

  @Column('uuid')
  entityId: string;
  @OneToOne(() => Entiti, (entity) => entity)
  @JoinColumn({ name: 'entityId' })
  entity: Entiti;

  @BeforeInsert()
  @BeforeUpdate()
  hasPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default Login;
