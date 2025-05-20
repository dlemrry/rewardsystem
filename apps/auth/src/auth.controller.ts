import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from '@app/common/dtos/auth/signIn.dto';
import { Public } from '@app/common/decorators/public.decorator';
import { SignUpDto } from '@app/common/dtos/auth/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('gethello')
  getHello() {
    return this.authService.getHello();
  }

  @Public()
  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Public()
  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
}
