import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import env from '../helpers/env.helper'
import UsersEntity from "../../entities/users.entity";

const _usersEntity = new UsersEntity();

const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
    try {
        // get authorization header: Bearer <token>
        const authHeader = req.headers.authorization as string;

        // get token from header
        const token = authHeader.split(' ')[1];

        // verify token
        const tokenUser = jwt.verify(token, env('JWT_SECRET')) as { sub: string };

        // check if user is exist
        const user = _usersEntity.getByUsername(tokenUser.sub);

        // attach user to request
        res.locals = { user };

        // call next middleware
        next();
    } catch (error: any) {
        res.status(401).send({
            message: 'Unauthorized',
            error: error.message
        });
    }
}

export { authMiddleware };