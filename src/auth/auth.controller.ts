import { Body, Controller, Get, Post, Redirect, Render, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IUser, UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { Request } from 'express'
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

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
