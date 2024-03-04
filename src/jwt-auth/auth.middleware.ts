import {
  Injectable,
  NestMiddleware,
  RequestMethod,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.originalUrl === '/api/login' && req.method == 'POST') {
      // 如果请求的是 /api/login 接口，直接跳过中间件
      return next();
    }
    let token = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      token = token.replace('Bearer ', '');

      const decoded = jwt.verify(token, 'abc123456');
      req['user'] = decoded; // 将解码后的用户信息添加到请求对象中
      next();
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
