import { IsEmail, IsEnum, IsIn, IsString } from 'class-validator';
import { Role } from '../types/roles.enum';

export class JwtPayloadDto {
  @IsString()
  id: string;
  @IsEmail()
  email: string;
  @IsString()
  userName: string;
  @IsEnum(Role)
  role: Role;
}
