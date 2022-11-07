import express, { Application, json } from 'express'
import router from './routers'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

const app: Application = express()
const port = 3000

app.use(
    cors(),
    json(),
    helmet(),
    morgan('dev'),
)

app.use("/api", router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

export default app