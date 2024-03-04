import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountBaseInfo } from 'src/entity/account_base_info.entity';
import { AuthInfo } from 'src/entity/auth.entity';
import { AuthService } from 'src/jwt-auth/auth.service';
import { LoginReq } from 'src/req/login.req';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<AccountBaseInfo>,
    @Inject('AUTH_REPOSITORY')
    private authRepository: Repository<AuthInfo>,
    private readonly authService: AuthService,
  ) {}

  async login(req: LoginReq): Promise<{ token: string }> {
    const account = await this.accountRepository.findOne({
      where: {
        accountName: req.userNmae,
        pwd: req.pwd,
      },
    });

    if (!account) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    const tokenInfo = await this.authRepository.findOneBy({
      accountId: account.id,
    });
    console.log(tokenInfo);
    if (!tokenInfo) {
      const token = await this.authService.generateToken({
        username: account.accountName,
        userId: account.id,
      });
      return { token };
    } else {
      const authInfo = this.authService.auth((await tokenInfo).accessToken);
      if (!authInfo) {
        const token = await this.authService.generateToken({
          username: account.accountName,
          userId: account.id,
        });
        return { token };
      }
      return { token: (await tokenInfo).accessToken };
    }
  }

  logout(): any {
    console.log('logout');
  }
}
