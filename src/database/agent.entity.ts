import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Property, property => property.agent)
  properties: Property[];
}
