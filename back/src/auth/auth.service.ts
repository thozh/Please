import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as UsersFixtures from './fixtures/users.json';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  login({ email, password }: LoginDto) {
    const access_token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    for (const user of UsersFixtures) {
      if (user.email === email.toLowerCase()) {
        if (user.password === password) {
          return { access_token };
        } else {
          // Wrong password
          throw new BadRequestException(
            "Le mot de passe utilisé n'est pas le bon",
          );
        }
      }
    }
    // No user with this email
    throw new NotFoundException(
      "L'authentification a échoué. Merci de vérifier les informations de connexion",
    );
  }
}
