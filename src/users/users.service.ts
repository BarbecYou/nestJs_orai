import { Injectable } from '@nestjs/common';

export interface IUser {
    id: number;
    username: string;
    password: string;
    profile: {
        points: number
    }
}
export interface IUserWithoutPassword {
    id: number;
    username: string;
}

@Injectable()
export class UsersService {
    users: IUser[] = [
        {
            id: 1,
            username: 'lol',
            password: 'asd',
            profile: {
                points: 10
            }
        },
        {
            id: 2,
            username: 'dani',
            password: 'nemdani',
            profile: {
                points: 20
            }
        }
    ]
    findOne(userName: string): IUser | null {
        return this.users.find(user => user.username === userName)
    }
}
