import {
  HttpException,
  Injectable,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcrypt';
import { PassportService } from '@app/passport';
import { JwtPayloadDto } from 'libs/common/dtos/jwt.dto';
import { SignInDto } from 'libs/common/dtos/auth/signIn.dto';
import { SignUpDto } from 'libs/common/dtos/auth/signUp.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: AuthRepository,
    private readonly passportService: PassportService,
  ) {}

  async getHello() {
    return 'hello';
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userRepository.findByEmail(signInDto.email);
    if (!user) {
      throw new HttpException('user not found', 404);
    }
    // const isValid = await bcrypt.compare(signInDto.password, user.password);
    const isValid = signInDto.password === user.password;
    if (!isValid) throw new HttpException('wrong password', 401);

    const payload: JwtPayloadDto = {
      id: user.id,
      email: user.email,
      userName: user.username,
      role: user.role,
    };

    return {
      accessToken: await this.passportService.generateAccessToken(payload),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const isExist = await this.userRepository.findByEmail(signUpDto.email);
    if (isExist) throw new HttpException('ALREADY_EXIST', 401);

    await this.userRepository.createUser(signUpDto);
  }

  // 리프레시 토큰으로 액세스 토큰 재발급
  async refresh(user: JwtPayloadDto) {
    const result = await this.userRepository.findById(user.id);

    if (!result) throw new UnauthorizedException('not found');
  }
}
