import { Visibility, Weather } from '../enums'
import { NewDiaryEntry } from '../types'

const isString = (param: string): boolean => {
  if (typeof param === 'string') {
    return true
  }
  return false
}

const isDate = (param: string): boolean => {
  return Boolean(Date.parse(param))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest) || !isString(dateFromRequest)) {
    throw new Error('Invalid date')
  }
  return dateFromRequest
}

const parseCommit = (commentFronRequest: any): string => {
  if (!isString(commentFronRequest)) {
    throw new Error('Comment must be a string')
  }
  return commentFronRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('The param must be a Weather type')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('The param must be a Visibility type')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseCommit(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
