import { AuthInfo } from 'src/entity/auth.entity';
import { DataSource } from 'typeorm';
export const AuthProviders = [
  {
    provide: 'AUTH_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AuthInfo),
    inject: ['DATA_SOURCE'],
  },
];
