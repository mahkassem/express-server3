import UsersEntity, { User } from '../entities/users.entity';
import bcrypt from 'bcrypt';
import env from '../utils/helpers/env.helper'
import jwt from 'jsonwebtoken';

const _usersEntity = new UsersEntity();

class AuthService {
    async register(user: User): Promise<User> {
        user.password = await bcrypt.hash(
            user.password as string + env('BCRYPT_SECRET'),
            parseInt(env('BCRYPT_SALT'))
        );

        const createdUser = await _usersEntity.create(user);

        delete createdUser.password;

        return createdUser;
    }

    async login(user: User): Promise<User> {
        // get username and password from user
        const { username, password } = user as { username: string, password: string };

        // get user from database
        const dbUser = await _usersEntity.getByUsername(username);

        // throw error if user is not exist
        if (user === null)
            throw new Error('User is not exist')

        // compare password
        const isPasswordMatch = await bcrypt.compare(password + env('BCRYPT_SECRET'), dbUser.password as string);

        // throw error if password is not match
        if (!isPasswordMatch)
            throw new Error('Password is not match')

        // generate token
        const token = this.generateToken(dbUser);

        // delete password and return user
        delete dbUser.password;

        // return user with token
        return { ...dbUser, token };
    }

    generateToken(user: User): string {
        // generate token
        return jwt.sign(
            { sub: user.username },
            env('JWT_SECRET'),
            { expiresIn: 60 }
        );
    }
}

export default AuthService;