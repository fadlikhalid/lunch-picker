# Work Card 03: Core behaviour

## Goal

Make Pick, Add and Delete work, all in memory. A refresh may lose changes until Card 04.

## Inputs

- `build-status.md`
- `build-blueprint.md` (data rules and pick rules)
- `design.md`
- `architecture.md`

## Files likely touched

- `src/App.jsx`, `src/App.css`
- `src/components/PickCard.jsx`, `AddMealForm.jsx`, `MealList.jsx`
- `build-status.md`

## Instructions for the coding agent

1. Hold `meals` and `pickedId` in state in `App`, starting from the six sample meals.
2. **Pick:** choose a random meal that is not the currently picked one. Show its name in the hero in the accent colour. With one meal, show that meal. With no meals, disable Pick and show `Add a meal first` on the button.
3. **Add:** trim spaces; ignore an empty name; ignore a name that already exists (ignoring upper/lower case); otherwise add a meal with a new unique `id` and `addedByUser: true`, clear the input and show the meal in the list. Pressing Enter in the input also adds.
4. **Delete:** remove that meal. If it was the picked meal, go back to `What are we eating?`.
5. Mark the currently picked row in the list: name in the accent colour and the word `Picked` in small text.
6. Show `Sample data` in the header only while no meal has `addedByUser: true`.
7. Show `No meals yet. Add one above.` when the list is empty.
8. Update `build-status.md`.

## What not to do

- Do not use `localStorage` yet (Card 04).
- Do not add edit, rating, category or sync features.
- Do not add a backend, login or API.
- Do not restyle the page; keep it to `design.md`.

## Done when

- Pick shows a meal, and five taps give different meals, never the same twice in a row.
- A real sample item can be added and appears in the list and in later picks.
- A meal can be deleted.
- Empty names and duplicate names are not added.

## Verification steps

- Run `npm run dev`, tap Pick five times and write down the meals.
- Add `Satay` and confirm it appears in the list; add `satay` and confirm it is not added twice.
- Delete `Burger` and confirm it leaves the list.
- Delete every meal and confirm the empty message shows and Pick is disabled.
- Design check: item list, input, update/delete controls, empty state, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Tap Pick five times: the meals are not all the same and never the same twice in a row.
- Add `Satay`: it appears in the list with `Picked` shown when it is picked. Adding an empty name or `satay` again does nothing.
- Delete a meal and it leaves the list. Delete all meals and `No meals yet. Add one above.` appears with Pick disabled.
- A refresh may bring back the six sample meals. That is expected until Card 04.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after verification. Update `build-status.md` and wait for the learner. Do not start Card 04.

## Status

Done (learner confirmed)
