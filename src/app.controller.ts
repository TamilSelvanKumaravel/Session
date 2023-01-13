import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req):any{
    return {msg:'Logged in!'}
     //return req.user
}
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Req() req): string {
    return req.user
  }
}
