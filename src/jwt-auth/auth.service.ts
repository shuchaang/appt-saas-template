import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthInfo } from 'src/entity/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('AUTH_REPOSITORY')
    private authRepository: Repository<AuthInfo>,
  ) {}

  async generateToken(payload: any): Promise<string> {
    const token = this.jwtService.sign(payload);
    const newAuth = new AuthInfo();
    newAuth.accountId = payload.userId;
    newAuth.refreshToken = token;
    newAuth.accessToken = token;
    newAuth.deviceType = 1;
    newAuth.expiresAt = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
    this.authRepository.save(newAuth);
    return token;
  }

  async verifyToken(token: string): Promise<any> {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }

  async auth(token: string, userId: number): Promise<any> {
    try {
      const tokenInfo = this.authRepository.findOne({
        where: { accountId: userId, accessToken: token },
      });
      if (!tokenInfo) {
        return null;
      }
      if ((await tokenInfo).expiresAt < new Date()) {
        return null;
      }
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
