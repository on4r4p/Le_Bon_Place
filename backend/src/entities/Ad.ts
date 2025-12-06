import { isURL, IsUrl, Length, Min } from "class-validator";
import {
  BaseEntity,
  Column, CreateDateColumn, Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";


import { Category } from "./Cat";
import { Tag } from "./Tg";

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @Length(2, 100)
  titre: string;

  @Column()
  @Min(0)
  prix: number;

  @Column({ length: 50 })
  @Length(1, 50)
  location: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column()
  @Length(10, 255)
  @IsUrl()
  picpath: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => Category)
  categorie: Category

  @JoinTable()
  @ManyToMany(() => Tag)
  tags: Tag[]

}
