import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GoogleUser } from '../model/GoogleUser';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.payload as GoogleUser;
  }
);
