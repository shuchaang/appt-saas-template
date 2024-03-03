import { Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  auth(@Headers('token') token: string): any {
    return this.authService.verifyToken(token);
  }
}
