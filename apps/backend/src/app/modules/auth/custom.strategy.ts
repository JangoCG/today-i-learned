import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-custom';
import { AuthService } from './service/auth.service';

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(request: Request): Promise<any> {
    const idToken = this.extractJwtFromRequest(request);
    const loginTicket =
      await this.authService.verifyIdTokenAndReturnLoginTicket(idToken);

    return loginTicket;
  }

  private extractJwtFromRequest(request) {
    if (request.headers && request.headers.authorization) {
      const authorizationHeader = request.headers.authorization;
      return authorizationHeader.split(' ')[1];
    }
  }
}
