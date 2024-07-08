import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Property, (property) => property.location)
  properties: Property[];
}
