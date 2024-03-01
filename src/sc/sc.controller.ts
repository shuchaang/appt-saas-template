import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ScService } from './sc.service';

@Controller('sc')
export class ScController {
  constructor(private myService: ScService) {}

  @Get()
  myDemoCode(): any {
    return this.myService.getAll();
  }

  @Get('one')
  getOne(@Request() req): any {
    console.log(req);
    const id: number = parseInt(req.query.id);
    return {
      code: id,
      data: ['sccc'],
    };
  }

  @Post('add')
  addOne(@Body() body): any {
    console.log(body);
    return this.myService.addOne();
  }
}
