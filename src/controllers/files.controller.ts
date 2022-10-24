import { Request, Response } from 'express'
import { getFileByNameService } from '../services/files.service'

/**
 * @description Get file by name
 * @param req name of the file
 * @param res 
 */
const getFileByName = (req: Request, res: Response): void => {
    try {
        const { name } = req.params
        const file = getFileByNameService(name)
        res.send(file)
    } catch (error) {
        res.status(500).send(error)
    }
}

export { getFileByName }