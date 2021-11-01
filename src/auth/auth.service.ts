import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  signUp(credentials: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(credentials);
  }
}
