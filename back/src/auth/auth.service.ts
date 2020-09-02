import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  login({ email, password }: LoginDto) {
    const access_token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    if (email.toLowerCase() === 'user@fake.com' && password === 'user') {
      return { access_token };
    } else {
      throw new NotFoundException(
        "L'authentification a échoué. Merci de vérifier les informations de connexion",
      );
    }
  }
}
