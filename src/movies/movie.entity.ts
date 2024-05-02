import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  genre: string;

  @Column({ nullable: true })
  duration: number;

  constructor(partial: Partial<Movie>) {
    Object.assign(this, partial);
  }
}