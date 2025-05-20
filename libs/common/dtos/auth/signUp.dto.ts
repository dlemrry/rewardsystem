import { IsEmail, IsEnum, IsIn, IsString } from 'class-validator';
import { Role } from 'libs/common/types/roles.enum';

export class SignUpDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  userName: string;
  @IsEnum(Role)
  role: Role;
}
