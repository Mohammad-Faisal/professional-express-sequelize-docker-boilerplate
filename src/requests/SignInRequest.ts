import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
