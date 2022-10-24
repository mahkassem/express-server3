import { Router } from 'express'
import { getFileByName } from '../controllers/files.controller'
import { validateGetFileByName } from '../utils/validators/files.validator'

const filesRouter = Router()

/**
 * @description Get file by name
 * @route GET /files/:name
 * @access Public
 */
filesRouter.get(
    '/:name', // ? url
    validateGetFileByName, // ! validation middleware
    getFileByName // * controller
)

filesRouter.post('/', (req, res) => {
    res.send('Hello World!')
})

export default filesRouter