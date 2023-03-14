import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Get('/profile')
    @UseGuards(JwtAuthGuard)
    profileScreen(@Req() req: Express.Request) {
        return {
            user: this.usersService.findOne(req.user.username)
        };
    }
}
