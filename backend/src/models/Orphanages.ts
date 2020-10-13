import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
class Orphanages {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column('text')
  about: string;

  @Column('text')
  instructions: string;

  @Column({ default: false })
  open_on_weekends: boolean;

  @Column()
  opening_hours: string;
}

export default Orphanages;
