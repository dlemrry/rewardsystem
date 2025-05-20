// libs/auth/strategies/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PassportService } from './passport.service';
import { Request } from 'express';
import { JwtPayloadDto } from 'libs/common/dtos/jwt.dto';

@Injectable()
export class JwtStrategyysss extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    private configService: ConfigService,
    private passportService: PassportService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('jwtSecret'),
    });
  }

  async validate(req: Request, payload: JwtPayloadDto) {
    const refreshToken = req.cookies?.refreshToken; // 쿠키에 있다고 가정
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }
    // 리프레시 토큰 검증은 authService 에서 진행

    return { ...payload, refreshToken }; // request.user로 전달됨
  }
}
