import { Request, Response, NextFunction } from 'express'
import UsersEntity, { User } from '../entities/users.entity'

const _usersEntity = new UsersEntity()

const registerValidator = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { name, username, password } = req.body as User

    // create error bag
    const errors = []

    // validate name
    if (name === undefined || name === '') {
        errors.push('Name is required')
    }

    // validate username
    if (username === undefined || username === '') {
        errors.push('Username is required')
    } else {
        // check if username is not exist
        const user = await _usersEntity.getByUsername(username)
        if (user !== null) {
            errors.push('Username is already exist')
        }
    }

    // validate password
    if (password === undefined || password === '') {
        errors.push('Password is required')
    }

    // if there are errors, send them
    if (errors.length > 0) {
        return res.status(400).send(errors)
    }

    // if there are no errors, continue
    next()
}

const loginValidator = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { username, password } = req.body as User

    // create error bag
    const errors = []

    // validate username
    if (username === undefined || username === '') {
        errors.push('Username is required')
    }

    // validate password
    if (password === undefined || password === '') {
        errors.push('Password is required')
    }

    // if there are errors, send them
    if (errors.length > 0) {
        return res.status(400).send(errors)
    }

    // if there are no errors, continue
    next()
}

export { registerValidator, loginValidator }