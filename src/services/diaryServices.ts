import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return (diaries)
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return (diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  }))
}

export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  if (entry != null) {
    const { comment, ...rest } = entry
    return rest
  }
  return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    ...newDiaryEntry,
    id: diaries.length + 1
  }
  diaries.push(newEntry)
  return newEntry
}
