import {column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @column()
  name: string;

  @column()
  email: string;

  @column()
  password: string;

  @column({default: true})
  isActive: boolean;
}