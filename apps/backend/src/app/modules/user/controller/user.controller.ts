import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "../service/user.service";
import {Public} from "../../auth/decorator/public.decorator";


@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Post('/login')
  @Public()
  async login(@Body("idToken") idToken: string): Promise<any> {

    console.log(idToken);
      // this.userService.login(idToken)
    // log the ticket payload in the console to see what we have
    // console.log(ticket.getPayload());
  }
}
