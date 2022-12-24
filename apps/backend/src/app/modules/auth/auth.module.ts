import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomStrategy } from './custom.strategy';
import { AuthService } from './service/auth.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService, CustomStrategy],
  exports: [AuthService],
})
export class AuthModule {}
