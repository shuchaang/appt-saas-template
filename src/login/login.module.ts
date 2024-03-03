import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Module } from '@nestjs/common';
import { AccountProviders } from 'src/repo/account_base.repository';
import { DatabaseModule } from 'src/datasource/database.module';
import { AuthModule } from 'src/jwt-auth/auth.module';

@Module({
  controllers: [LoginController],
  providers: [...AccountProviders, LoginService],
  imports: [DatabaseModule, AuthModule],
})
export class LoginModule {}
