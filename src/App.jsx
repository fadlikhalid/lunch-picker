import { useEffect, useRef, useState } from 'react'
import './App.css'
import PickCard from './components/PickCard'
import AddMealForm from './components/AddMealForm'
import MealList from './components/MealList'
import Confetti from './components/Confetti'
import PackButtons from './components/PackButtons'
import { loadMeals, saveMeals } from './storage'
import { INDECISIVE_WINDOW_MS, judge } from './foodJudge'

function App() {
  const [meals, setMeals] = useState(loadMeals)
  const [pickedId, setPickedId] = useState(null)
  const [shuffleName, setShuffleName] = useState(null)
  const [burst, setBurst] = useState(0)
  const [comment, setComment] = useState('')
  const [history, setHistory] = useState([])
  const pickTimesRef = useRef([])
  const timerRef = useRef(null)

  useEffect(() => {
    saveMeals(meals)
  }, [meals])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const spinning = shuffleName !== null
  const pickedMeal = meals.find((meal) => meal.id === pickedId) ?? null
  const activeMeals = meals.filter((meal) => !meal.skipped)
  const skippedCount = meals.length - activeMeals.length
  const hasUserMeals = meals.some((meal) => meal.addedByUser)

  function land(choice) {
    const now = Date.now()
    pickTimesRef.current = [...pickTimesRef.current, now].filter(
      (time) => now - time < INDECISIVE_WINDOW_MS,
    )
    setShuffleName(null)
    setPickedId(choice.id)
    setHistory((names) => [choice.name, ...names].slice(0, 4))
    setComment(judge(choice, pickTimesRef.current.length))
  }

  function pickMeal() {
    if (activeMeals.length === 0 || spinning) return
    const others = activeMeals.filter((meal) => meal.id !== pickedId)
    const choices = others.length > 0 ? others : activeMeals
    const choice = choices[Math.floor(Math.random() * choices.length)]

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion || activeMeals.length < 2) {
      land(choice)
      return
    }

    // Shuffle through names, slowing down, then land on the choice.
    const steps = 10
    let step = 0
    function tick() {
      step += 1
      if (step > steps) {
        land(choice)
        setBurst((count) => count + 1)
        return
      }
      const name =
        activeMeals[Math.floor(Math.random() * activeMeals.length)].name
      setShuffleName(name)
      timerRef.current = setTimeout(tick, 40 + step * 9)
    }
    setShuffleName(choice.name)
    timerRef.current = setTimeout(tick, 50)
  }

  function addMeal(rawName) {
    const name = rawName.trim()
    if (name === '') return false
    const exists = meals.some(
      (meal) => meal.name.toLowerCase() === name.toLowerCase(),
    )
    if (exists) return false
    setMeals([...meals, { id: crypto.randomUUID(), name, addedByUser: true }])
    return true
  }

  function addPack(pack) {
    const have = new Set(meals.map((meal) => meal.name.toLowerCase()))
    const fresh = pack.meals
      .filter((name) => !have.has(name.toLowerCase()))
      .map((name) => ({ id: crypto.randomUUID(), name, addedByUser: true }))
    if (fresh.length > 0) setMeals([...meals, ...fresh])
  }

  function toggleSkip(id) {
    setMeals(
      meals.map((meal) =>
        meal.id === id ? { ...meal, skipped: !meal.skipped } : meal,
      ),
    )
    if (id === pickedId) setPickedId(null)
  }

  function deleteMeal(id) {
    setMeals(meals.filter((meal) => meal.id !== id))
    if (id === pickedId) setPickedId(null)
  }

  return (
    <div className="page">
      {burst > 0 && <Confetti key={burst} />}
      <header className="app-header">
        <div className="brand">
          <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="16" fill="#FF6B2C" />
            <circle cx="32" cy="32" r="16" fill="none" stroke="#170E08" strokeWidth="5" />
            <circle cx="32" cy="32" r="5" fill="#170E08" />
          </svg>
          <h1>Lunch Picker</h1>
        </div>
        <p>
          Tap Pick. Stop arguing about lunch.
          {!hasUserMeals && <small className="sample-label">Sample data</small>}
        </p>
      </header>
      <main className="layout">
        <PickCard
          pickedMeal={pickedMeal}
          comment={comment}
          poolCount={activeMeals.length}
          earlier={history.slice(1)}
          shuffleName={shuffleName}
          disabled={activeMeals.length === 0}
          allSkipped={meals.length > 0 && activeMeals.length === 0}
          onPick={pickMeal}
        />
        <section className="list-area" aria-label="Meals">
          <AddMealForm onAdd={addMeal} />
          <PackButtons meals={meals} onAddPack={addPack} />
          <div className="list-head">
            <h2>Menu</h2>
            <span>
              {meals.length} {meals.length === 1 ? 'meal' : 'meals'}
              {skippedCount > 0 && ` · ${skippedCount} skipped`}
            </span>
          </div>
          <MealList
            meals={meals}
            pickedId={pickedId}
            busy={spinning}
            onDelete={deleteMeal}
            onToggleSkip={toggleSkip}
          />
        </section>
      </main>
      <footer className="app-footer">
        <span>Your meals are saved on this device only.</span>
        <span>Made for friends who can never decide.</span>
      </footer>
    </div>
  )
}

export default App
