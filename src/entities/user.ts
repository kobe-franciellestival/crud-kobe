import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  Column,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  usuario: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
