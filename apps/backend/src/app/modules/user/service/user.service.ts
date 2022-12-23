import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from '../model/User';
import {AuthService} from "../../auth/service/auth.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private authService: AuthService
  ) {}

  async login(idToken: string) {
    const loginTicket = await this.authService.verifyIdTokenAndReturnLoginTicket(idToken)
    const payload = loginTicket.getPayload();
    const user = await this.userRepository.findOneBy({
      email: loginTicket.getPayload().email,
    });
    if (!user) {
      return this.userRepository.save({email:  payload.email , name: payload.name, image: payload.picture});
    } else {
      console.log(user);
      return user;
    }
  }
}
