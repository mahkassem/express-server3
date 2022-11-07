import { Request, Response } from 'express'
import AuthService from '../services/auth.service'

const _authService = new AuthService();

const registerHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = req.body
        const createdUser = await _authService.register(user);
        res.send(createdUser)
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

const loginHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = req.body
        const loggedInUser = await _authService.login(user);
        res.send(loggedInUser)
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

export { registerHandler, loginHandler }