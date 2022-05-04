import express, { Request, Response } from 'express'

import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req: Request, res: Response) => {
  console.log('someone ping here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
