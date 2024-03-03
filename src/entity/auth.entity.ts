import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('account_token_info')
export class AuthInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountId: number;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @Column()
  expiresAt: Date;

  @Column()
  deviceType: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
