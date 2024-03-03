import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './jwt-auth/auth.module';
@Module({
  imports: [
    JwtModule.register({
      secret: 'abc123456',
      signOptions: { expiresIn: '48h' },
    }),
    LoginModule,
    AuthModule,
  ],
})
export class AppModule {}
