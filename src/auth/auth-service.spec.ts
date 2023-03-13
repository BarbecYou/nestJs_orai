import { JwtService } from "@nestjs/jwt";
import { IUser, IUserWithoutPassword, UsersService } from "./../users/users.service";
import { AuthService } from "./auth.service"

describe('AuthService test', () => {

    let authService: AuthService;
    beforeAll(() => {
        authService = new AuthService({
            findOne: (username: string) => {
                if (username === 'lol') {
                    return {
                        id: 1,
                        username: 'lol',
                        password: 'asd',
                        profile: {
                            points: 10
                        }
                    } as IUser;
                } else {
                    return null;
                }
            }
        } as UsersService, null);
    });

    describe('validateUser', () => {

        test('username and password are correct', async () => {
            const user: IUserWithoutPassword = await authService.validateUser('lol', 'asd');
            expect(user).toEqual({
                id: 1,
                username: 'lol',
                profile: {
                    points: 10
                }
            });
        })
        test('password is incorrect', async () => {
            const user: IUserWithoutPassword = await authService.validateUser('lol', 'lmao');
            expect(user).toBeNull();
        })
        test('username doesn\'t exist', async () => {
            const user: IUserWithoutPassword = await authService.validateUser('lollll', 'lmao');
            expect(user).toBeNull();
        })
    })
})
