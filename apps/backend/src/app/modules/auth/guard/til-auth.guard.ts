import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//type is the name of the strategy. the name for passport local is just local
@Injectable()
export class TilAuthGuard extends AuthGuard('custom') {}
