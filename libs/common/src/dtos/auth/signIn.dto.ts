import { IsEmail, IsEnum, IsIn, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
