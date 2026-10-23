const MARK_COLORS = ['#FF6B2C', '#2DD4BF', '#A78BFA', '#FF4D6D', '#60A5FA']

function MealList({ meals, pickedId, busy, onDelete, onToggleSkip }) {
  if (meals.length === 0) {
    return <p className="empty-state">No meals yet. Add one above.</p>
  }

  return (
    <ul className="meal-list">
      {meals.map((meal, index) => {
        const isPicked = meal.id === pickedId
        const color = MARK_COLORS[index % MARK_COLORS.length]
        return (
          <li
            key={meal.id}
            className={[
              'meal-row',
              isPicked ? 'is-picked' : '',
              meal.skipped ? 'is-skipped' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ '--mark': color }}
          >
            <span className="meal-mark" aria-hidden="true" />
            <span className="meal-name">
              {meal.name}
              {isPicked && <small className="picked-label">Picked</small>}
              {meal.skipped && <small className="skipped-label">Not today</small>}
            </span>
            <button
              type="button"
              className="skip-button"
              disabled={busy}
              aria-label={`${meal.skipped ? 'Bring back' : 'Skip'} ${meal.name}`}
              onClick={() => onToggleSkip(meal.id)}
            >
              {meal.skipped ? 'Bring back' : 'Skip'}
            </button>
            <button
              type="button"
              className="delete-button"
              disabled={busy}
              onClick={() => onDelete(meal.id)}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default MealList
