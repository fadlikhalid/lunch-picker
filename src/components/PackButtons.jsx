import { PACKS } from '../packs'

function PackButtons({ meals, onAddPack }) {
  const have = new Set(meals.map((meal) => meal.name.toLowerCase()))

  return (
    <div className="packs">
      <p className="packs-label" id="packs-label">
        Quick add
      </p>
      <div className="packs-row" role="group" aria-labelledby="packs-label">
        {PACKS.map((pack) => {
          const allAdded = pack.meals.every((name) => have.has(name.toLowerCase()))
          return (
            <button
              key={pack.id}
              type="button"
              className="pack-button"
              disabled={allAdded}
              onClick={() => onAddPack(pack)}
            >
              {pack.name}
              {allAdded && <small> (added)</small>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default PackButtons
