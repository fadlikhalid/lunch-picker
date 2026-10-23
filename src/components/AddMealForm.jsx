import { useState } from 'react'

function AddMealForm({ onAdd }) {
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (onAdd(name)) setName('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="meal-name">Add a meal</label>
      <div className="add-row">
        <input
          id="meal-name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddMealForm
