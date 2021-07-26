import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('role')
class Role {

  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  nome: string;
  
  @CreateDateColumn()
  created_At: Timestamp;

  @UpdateDateColumn()
  updated_At: Timestamp;

}
export default Role;