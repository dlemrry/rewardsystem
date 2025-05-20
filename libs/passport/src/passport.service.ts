import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from '@app/common/dtos/jwt.dto';
import { User, UserDocument } from '@app/database/schema/user.schema';

@Injectable()
export class PassportService {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateAccessToken(payload: JwtPayloadDto) {
    return await this.jwtService.signAsync(payload, {
      expiresIn: this.configService.get<number>('accessTokenExp'),
    });
  }

  async generateRefreshToken(payload: JwtPayloadDto) {
    return await this.jwtService.signAsync(
      { id: payload.id },
      {
        expiresIn: this.configService.get<number>('refreshTokenExp'),
      },
    );
  }
}
