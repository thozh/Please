import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: "L'adresse e-mail est invalide" })
  email: string;

  @IsString({ message: 'Le mot de passe est invalide' })
  password: string;
}
