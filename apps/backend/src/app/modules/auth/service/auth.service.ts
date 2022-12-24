import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { googleClient } from '../../user/google-client';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  public async verifyIdTokenAndReturnLoginTicket(idToken: string) {
    try {
      return await googleClient.verifyIdToken({
        idToken,
        audience: this.configService.get('GOOGLE_CLIENT_ID'),
      });
    } catch (err) {
      // TODO: Throw exception after exception handling concept is implemented
      throw new UnauthorizedException();
    }
  }
}
