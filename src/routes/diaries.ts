import express, { Request, Response } from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/sensitive', (_req: Request, res: Response) => {
  res.send(diaryServices.getEntries())
})

router.get('/nonSensitive', (_req: Request, res: Response) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (_req: Request, res: Response) => {
  const diary = diaryServices.findById(Number(_req.params.id))
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/add', (_req: Request, res: Response) => {
  res.send('saving a new entry diary')
})

export default router
