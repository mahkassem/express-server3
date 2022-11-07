import { Router } from 'express'
import { getFileByName } from '../controllers/files.controller'
import { authMiddleware } from '../utils/middlewares/auth.middleware'
import { validateGetFileByName } from '../utils/validators/files.validator'

const filesRouter = Router()

/**
 * @description Get file by name
 * @route GET /files/:name
 * @access Public
 */
filesRouter.get(
    '/:name', // ? url
    authMiddleware, // ! Middleware
    validateGetFileByName, // ! validation middleware
    getFileByName // * controller
)

filesRouter.post('/', (req, res) => {
    res.send('Hello World!')
})

export default filesRouter