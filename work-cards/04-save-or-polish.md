# Work Card 04: Save or polish

## Goal

Save the meals with `localStorage`, prove they survive a refresh, and check the empty state and phone width.

## Inputs

- `build-status.md`
- `build-blueprint.md` (storage rules)
- `design.md`
- `architecture.md`

## Files likely touched

- `src/storage.js` (new)
- `src/App.jsx`, `src/App.css`
- `build-status.md`

## Instructions for the coding agent

1. Create `src/storage.js` with `loadMeals()` and `saveMeals(meals)` using the key `lunchPicker.meals`.
2. `loadMeals()`: if the key is missing, return the six sample meals. If the value is not valid JSON or not an array, return the sample meals. A saved empty list stays empty. Wrap in try/catch so blocked storage does not crash the page.
3. `saveMeals(meals)`: write the array as JSON, in try/catch.
4. In `App`, start `meals` from `loadMeals()` and save after every add or delete. Do not save `pickedId`.
5. Check the empty state after a refresh: delete all meals, refresh, and the list stays empty with Pick disabled.
6. Check phone width (375px): nothing is cut off, long meal names wrap, tap targets are at least 44px, focus rings show.
7. Final pass against `design.md`: colours, type, two standout surfaces, no emoji, no shadow on rows, no box inside a box.
8. Update `build-status.md`.

## What not to do

- Do not add a backend, login, database or live API.
- Do not store anything except the meals list.
- Do not add new features (edit, categories, sync) in this card.
- Do not initialize Git or deploy.

## Done when

- An added meal is still in the list after a browser refresh.
- A deleted meal stays gone after a refresh.
- An empty list stays empty after a refresh and shows the empty state.
- The page works at phone width.

## Verification steps

- Add `Satay`, refresh the browser, and confirm `Satay` is still there.
- Delete `Burger`, refresh, and confirm it stays gone.
- In the browser tools, set `lunchPicker.meals` to `not json`, refresh, and confirm the page loads with the sample meals and no error.
- Resize to about 375px and check the whole page.
- Design check: item list, input, update/delete controls, empty state, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Add `Satay`, refresh the browser: `Satay` is still in the list.
- Delete a meal, refresh: it stays gone. Delete all meals, refresh: the list stays empty and `No meals yet. Add one above.` shows.
- Tap Pick five times after a refresh: the meals are different and never the same twice in a row.
- At phone width (about 375px) nothing is cut off, and the Pick button and the meal names are easy to read and tap.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after verification. Update `build-status.md` and wait for the learner. This is the last card; changes after it happen in the Improve phase.

## After this card: tick chapter 03

End your first checkpoint message for this card (the one that gives its localhost tests) with these two lines, exactly, as plain chat text, never inside a code block (or the link cannot be clicked):

**Your cards are built. Next: tick chapter 03 on your class page.**
[Open chapter 03, Build and test](https://learn.theaibuilder.school/courses/ai-builder-foundations/modules/3) and press **I built my cards**. Then come back to this chat.

When the learner replies `continue`, start your reply with the same two lines.

## Status

Done (learner confirmed)
