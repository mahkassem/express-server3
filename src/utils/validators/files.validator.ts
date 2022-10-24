import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import path from 'path'

/**
 * @description Validated get file by name request
 * @param req :name
 * @param res 
 * @param next 
 * @returns 
 */
const validateGetFileByName = (req: Request, res: Response, next: NextFunction): any => {
    const { name } = req.params
    const basePath = path.join(__dirname, '..', '..', '..', 'storage')
    const fileExists = fs.existsSync(`${basePath}/${name}`)
    if (!fileExists)
        return res.status(404).send("File not found")

    next()
}

export { validateGetFileByName }