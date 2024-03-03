import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AccountBaseInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  accountName: string;

  @Column({ length: 50 })
  pwd: string;

  @Column()
  email: string;

  @Column()
  accountStatus: number;

  @Column()
  isDelete: boolean;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
