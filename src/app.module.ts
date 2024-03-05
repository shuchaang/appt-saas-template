import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { AuthModule } from './jwt-auth/auth.module';

@Module({
  imports: [LoginModule, AuthModule],
})
export class AppModule {}
