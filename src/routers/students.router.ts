import { Router } from 'express'

const studentsRouter = Router()

studentsRouter.get('/', (req, res) => {
    res.send('Hello World!')
})

export default studentsRouter