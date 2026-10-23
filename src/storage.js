import { SAMPLE_MEALS } from './sampleMeals'

const STORAGE_KEY = 'lunchPicker.meals'

function isMeal(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    typeof value.addedByUser === 'boolean' &&
    (value.skipped === undefined || typeof value.skipped === 'boolean')
  )
}

export function loadMeals() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return SAMPLE_MEALS
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || !parsed.every(isMeal)) return SAMPLE_MEALS
    return parsed
  } catch {
    return SAMPLE_MEALS
  }
}

export function saveMeals(meals) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(meals))
  } catch {
    // Storage blocked or full: the page keeps working for this visit.
  }
}
