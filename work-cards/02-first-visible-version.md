# Work Card 02: First visible version

## Goal

Build the layout and the visual recipe from `design.md` with the sample meals on screen. Nothing is interactive yet.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md` (read `## Recipe applied to Lunch Picker` and `## Visual recipe`)
- `architecture.md` (component map and sample meals)

## Files likely touched

- `src/App.jsx`, `src/App.css`
- `src/components/PickCard.jsx`, `src/components/AddMealForm.jsx`, `src/components/MealList.jsx`
- `build-status.md`

## Instructions for the coding agent

1. Build the header: `Lunch Picker`, the line `Tap Pick. Stop arguing about lunch.`, and `Sample data` in small muted text.
2. Build `PickCard` as the hero: the text `What are we eating?` in the large size and a full-width **Pick** button (does nothing yet), on the deeper cream surface.
3. Build `AddMealForm`: a labelled input `Add a meal` and an `Add` button (does nothing yet), at the top of the list area.
4. Build `MealList`: the six sample meals (Nasi lemak, Chicken rice, Mee goreng, Roti canai, Laksa, Burger) as one list. Each row: a small coloured mark from the five-colour palette (in order, repeating), the bold name, and a plain-text `Delete` on the right (does nothing yet). Thin lines between rows.
5. Apply `design.md`: cream background `#FFF6EC`, chilli-orange accent `#C2410C`, system rounded font stack, two standout surfaces only, 44px minimum tap targets, visible focus rings, no emoji.
6. Width: one column on a phone; above 900px the hero sits on the left and the form + list on the right.
7. Keep the sample meals in one array in the code (id, name, `addedByUser: false`). Update `build-status.md`.

## What not to do

- Do not make Pick, Add or Delete work yet.
- Do not use `localStorage` yet.
- Do not add boxes around every row, shadows on rows, emoji, gradients or a UI library.
- Do not use real restaurant names or prices.

## Done when

- The page shows the header, the hero with Pick, the add form and six sample meals.
- It follows the colours, type and layout in `design.md`.
- It looks right at phone width and at a wide width.

## Verification steps

- Run `npm run dev` and open the page.
- Check all six sample meals show with colour marks and a `Delete` on each row.
- Resize the browser to about 375px wide and then above 900px.
- Design check: item list, input, update/delete controls, empty state, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- The page shows the header, the large `What are we eating?`, a big orange **Pick** button, the `Add a meal` field and six sample meals.
- At phone width (about 375px) everything is in one column and nothing is cut off or scrolls sideways.
- On a wide screen the Pick area sits beside the list. Pressing Pick, Add or Delete does nothing yet, and that is expected.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after verification. Update `build-status.md` and wait for the learner. Do not start Card 03.

## Status

Done (learner confirmed)
