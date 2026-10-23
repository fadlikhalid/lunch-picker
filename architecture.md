# Architecture

## Build Shape

Browser-local tool (confirmed in `project-brief.md`).

## Stack Decision

- Vite + React.
- Plain CSS (one stylesheet, no Tailwind).
- Browser `localStorage` for saving.
- No backend, login, database, payments or live API.

## Structure Overview

One page, one screen. From top to bottom: the heading, the Pick area (result + Pick button), the "add a meal" form, and the list of meals with a delete button on each. All state lives in one React component tree; no router.

## Component Map

- `App`: holds the meals list and the currently picked meal; loads from and saves to `localStorage`.
- `PickCard`: shows the picked meal (or a prompt before the first pick) and the big **Pick** button.
- `AddMealForm`: one text input and an **Add** button.
- `MealList`: the list of meals, each row with a **Delete** button, plus the empty state.

## Data / State Model

One data type: **Meal**.

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | string | Unique id for the meal |
| `name` | string | What to eat, such as "Nasi lemak" (sample data only) |
| `addedByUser` | boolean | `true` if added by the user, `false` for a sample meal |

State: `meals` (array of Meal), `pickedId` (id of the meal shown, or none).

Sample meals on first load: Nasi lemak, Chicken rice, Mee goreng, Roti canai, Laksa, Burger.

## Storage Logic

- Key: `lunchPicker.meals`, value: the `meals` array as JSON.
- On load: read the key. If it is missing, use the sample meals. If it is broken (not valid JSON or not an array), fall back to the sample meals.
- On every add or delete: write the whole array back.
- An empty list that was saved on purpose stays empty (do not refill with samples after the user deletes everything).
- The picked meal is not saved; after a refresh the Pick area starts fresh.

## User Flow

1. Open the page: sample meals are listed, Pick area says to tap Pick.
2. Tap **Pick**: one meal is shown. Tap again: a different meal (never the same one twice in a row when there are 2 or more meals).
3. Type a meal name, tap **Add**: it appears in the list and can be picked.
4. Tap **Delete** on a meal: it leaves the list.
5. Refresh: the list is exactly as left.
6. Empty list: Pick is disabled and a message says to add a meal.

## File Expectations

The app is created in this project folder, beside `START_HERE.md`:

- `package.json`, `index.html`, `vite.config.js`
- `src/main.jsx`, `src/App.jsx`, `src/App.css`
- `src/components/` for `PickCard`, `AddMealForm`, `MealList`
- `src/storage.js` for load and save helpers

## Constraints

- Must work on a phone: layout starts at about 375px wide, buttons easy to tap.
- Empty names are not added; extra spaces are trimmed; a name that already exists (ignoring upper/lower case) is not added twice.
- `localStorage` may be blocked or full: the app still works for the session, without crashing.

## Technical Non-Goals

- Editing a meal's name, ratings or categories.
- Map, restaurant search or any network call.
- Syncing between phones or accounts.
- Deploy, GitHub, Vercel.

## Verification Notes

- Tap Pick five times: meals are not all the same and never repeat back to back.
- Add a meal, refresh: it is still there.
- Delete a meal, refresh: it stays gone.
- Delete all meals: empty state shows and Pick is disabled; refresh keeps it empty.
- Check on a phone-width screen (about 375px).
