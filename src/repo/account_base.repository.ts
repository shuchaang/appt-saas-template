import { DataSource } from 'typeorm';
import { AccountBaseInfo } from '../entity/account_base_info.entity';

export const AccountProviders = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AccountBaseInfo),
    inject: ['DATA_SOURCE'],
  },
];
