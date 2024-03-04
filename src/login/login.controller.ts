import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginReq } from 'src/req/login.req';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/login')
  async login(@Body() req: LoginReq): Promise<any> {
    const { token } = await this.loginService.login(req);
    return { assess_token: token };
  }
  @Post('/logout')
  logout(): any {
    return this.loginService.logout();
  }
}
