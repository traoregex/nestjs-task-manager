import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) credential: AuthCredentialsDto,
  ): Promise<void> {
    return await this.authService.signUp(credential);
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) credentials: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(credentials);
  }
}
