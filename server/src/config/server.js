import { urlencoded, json } from 'express';
import express from 'express';
const server = express()

const port = 3003

server.use(urlencoded({ extended: true }))
server.use(json())

server.listen(port, () => console.log(`Backend is running on port ${port}`))