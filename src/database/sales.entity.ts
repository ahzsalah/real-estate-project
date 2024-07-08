import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from './client.entity';
import { Property } from './property.entity';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz' })
  date: Date;

  @ManyToOne(() => Client, (client) => client.id)
  clientId: number;

  @ManyToOne(() => Property, (property) => property.id)
  propertyId: number;
}
