import { Controller, Get, Post, Render, Req, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService) { }

    @Get('/login')
    @Render('login')
    login() {
    }

    @Post('/login')
    @UseGuards(LocalAuthGuard)
    async loginPost(@Req() req: Express.Request) {
        return await this.authService.login(req.user);
    }


}
