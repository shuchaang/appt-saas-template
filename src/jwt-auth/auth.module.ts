import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthProviders } from 'src/repo/auth.repository';
import { DatabaseModule } from 'src/datasource/database.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abc123456',
      signOptions: { expiresIn: '48h' },
    }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [...AuthProviders, AuthService],
  exports: [...AuthProviders, AuthService],
})
export class AuthModule {}
