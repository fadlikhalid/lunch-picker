function PickCard({ pickedMeal, comment, earlier, shuffleName, disabled, allSkipped, onPick }) {
  const spinning = shuffleName !== null
  const text = spinning
    ? shuffleName
    : pickedMeal
      ? pickedMeal.name
      : 'What are we eating?'
  const className = [
    'hero-meal',
    spinning ? 'spinning' : '',
    !spinning && pickedMeal ? 'picked' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className="hero" aria-label="Pick a meal">
      <p className="eyebrow">Today's lunch</p>
      {/* key restarts the landing animation on every new pick */}
      <p
        key={spinning ? 'spin' : (pickedMeal?.id ?? 'none')}
        className={className}
        aria-hidden={spinning}
      >
        {text}
      </p>
      {!spinning && pickedMeal && comment && (
        <p className="judge" key={comment + pickedMeal.id}>
          {comment}
        </p>
      )}
      {earlier.length > 0 && (
        <p className="earlier">
          <span>Earlier</span> {earlier.join(' · ')}
        </p>
      )}
      <p className="visually-hidden" aria-live="polite">
        {!spinning && pickedMeal ? `Picked: ${pickedMeal.name}. ${comment}` : ''}
      </p>
      <button
        type="button"
        className={pickedMeal || spinning ? 'pick-button' : 'pick-button idle'}
        disabled={disabled || spinning}
        onClick={onPick}
      >
        {disabled ? (allSkipped ? 'All meals skipped' : 'Add a meal first') : spinning ? 'Picking...' : 'Pick'}
      </button>
    </section>
  )
}

export default PickCard
