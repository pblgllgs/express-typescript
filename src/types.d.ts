
export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'windy'
export type Visibility = 'great' | 'good' | 'poor' | 'bad' | 'terrible'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>

// export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'visibility' | 'weather'>
