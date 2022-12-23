import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { CustomStrategy } from '../../custom.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthService, CustomStrategy],
  exports: [AuthService]
})
export class AuthModule {}
