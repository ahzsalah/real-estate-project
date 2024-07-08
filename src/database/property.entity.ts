import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Location } from './location.entity';
import { Agent } from './agent.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  status: string;

  @Column('int')
  price: number;

  @ManyToOne(() => Location, (location) => location.properties)
  location: Location;

  @ManyToOne(() => Agent, (agent) => agent.properties)
  agent: Agent;
}
