import fs from 'fs'
import path from 'path'

const getFileByNameService = (name: string): Buffer => {
    const basePath = path.join(__dirname, '..', '..', 'storage')
    const file = fs.readFileSync(`${basePath}/${name}`)
    return file
}

export { getFileByNameService }