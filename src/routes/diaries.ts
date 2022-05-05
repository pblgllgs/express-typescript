import express, { Request, Response } from 'express'
import * as diaryServices from '../services/diaryServices'
import { NewDiaryEntry } from '../types'
import toNewDiaryEntry from '../utils/utils'

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

router.post('/add', (req: Request, res: Response) => {
  try {
    const newDiaryEntry: NewDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.send(addedDiaryEntry)
  } catch (e) {
    res.status(400).send('error')
  }
})

export default router
