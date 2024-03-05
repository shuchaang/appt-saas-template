import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthProviders } from 'src/repo/auth.repository';
import { DatabaseModule } from 'src/datasource/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') },
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [...AuthProviders, AuthService],
  exports: [...AuthProviders, AuthService],
})
export class AuthModule {}
