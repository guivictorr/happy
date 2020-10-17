import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Images from './Images';

@Entity('orphanages')
class Orphanages {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column({ default: false })
  open_on_weekends: boolean;

  @Column()
  opening_hours: string;

  @OneToMany(() => Images, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Images[];
}

export default Orphanages;
