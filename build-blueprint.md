# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-status.md`
- `work-cards/01-project-skeleton.md` to `work-cards/04-save-or-polish.md`

## Project Identity

**Lunch Picker**: a one-page lunch picker for you and your friends, who can never decide where to eat. Opened on phones at lunchtime.

## Build Shape

Browser-local tool (confirmed by the learner).

## Version-One Promise

Open the page, see sample meals. Tap **Pick** five times and get different meals (never the same twice in a row). Add your own meals. Refresh the browser and they are still there.

## Scope Lock

### Now

- One list of meals (sample meals to start).
- Pick button that shows one meal at a time.
- Add a meal; delete a meal.
- Save with browser `localStorage`.
- Empty state and mobile layout.

### Later

- Mark a meal as "not today".
- Group meals by type.
- Share with friends.

### Never (for tonight)

- Login, database, backend or live API.
- Map or restaurant search.
- Sync between friends' phones.
- Real names, phone numbers or business details.

## Architecture Summary

Vite + React + plain CSS. One page. Components: `App`, `PickCard`, `AddMealForm`, `MealList`. Helpers in `src/storage.js`. No router, no network call. See `architecture.md`.

## Data / State / Storage Rules

- One type: **Meal** = `id` (string), `name` (string), `addedByUser` (boolean).
- Sample meals on first load: Nasi lemak, Chicken rice, Mee goreng, Roti canai, Laksa, Burger (all `addedByUser: false`).
- State: `meals` (array), `pickedId` (string or none).
- Storage key: `lunchPicker.meals`, value is the `meals` array as JSON.
- Load: if the key is missing, use the sample meals. If the value is broken (invalid JSON or not an array), use the sample meals. A saved empty list stays empty.
- Save: on every add or delete, write the whole array. Wrap reads and writes in try/catch so a blocked `localStorage` does not crash the page.
- `pickedId` is not saved.
- Add rules: trim spaces; ignore empty names; do not add a name that already exists (ignoring upper/lower case).
- Pick rules: choose a random meal that is not the currently picked one. With one meal, show it. With none, Pick is disabled.
- Deleting the picked meal clears the picked meal.

## Design Direction Summary

Borrow from "Playful student dashboard": friendly rounded type, a big hero, roomy spacing and one strong accent. The learner's own touch: chilli-orange `#C2410C`, "hungry and cheerful", made for friends deciding at the table. Page background cream `#FFF6EC`; hero `#FFE9D2`. Do not copy any brand, logo, real restaurant, photo or claim. No emoji. The hero shows the picked meal as the largest thing on the page. One list, not a box per meal. Follow `design.md`, including `## Recipe applied to Lunch Picker` and `## Visual recipe`.

## Implementation Rules

- Plain CSS in `src/App.css`; no Tailwind and no UI library.
- No emoji; inline SVG only if an icon is wanted.
- Function components with `useState` and `useEffect`; no extra state library.
- Keep each component small; no component file longer than about 80 lines.
- Give every interactive element a real label or text.
- Use sample data only; never real restaurant names or contact details.

## File and Folder Expectations

In this project folder, beside `START_HERE.md`:

- `package.json`, `index.html`, `vite.config.js`
- `src/main.jsx`, `src/App.jsx`, `src/App.css`
- `src/components/PickCard.jsx`, `AddMealForm.jsx`, `MealList.jsx`
- `src/storage.js`

Do not delete `prompts/`, `templates/`, `work-cards/` or any planning file.

## Work Card Plan

1. **01 Project skeleton**: the Vite + React app in this folder, with "Lunch Picker" as a header and one line under it.
2. **02 First visible version**: the layout and visual recipe with the sample meals on screen; nothing interactive yet.
3. **03 Core behaviour**: Pick, add and delete, all in memory; a refresh may lose changes until Card 04.
4. **04 Save or polish**: save with `localStorage`, refresh proof, empty state and phone width.

## Review Mirror

Optional tonight, `prompts/07-review-mirror.md`. It is not a work card.

## Proof Ladder

The app running on localhost, improved your way. No GitHub or Vercel.

1. App shell loads on localhost.
2. Sample meals are on screen, styled to `design.md`.
3. Five taps on Pick give different meals; add and delete work.
4. An added meal survives a refresh; empty state and 375px width are fine.

## 60-Second Explanation Template

"I built Lunch Picker for me and my friends, who can never decide where to eat. You tap Pick and it shows one meal, never the same twice in a row. You can add your own meals and delete ones you don't like. It saves in this browser, so after a refresh my meals are still there. It has no login or backend; everything stays on the phone. I checked it by tapping Pick five times, adding a meal, and refreshing."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing.
- Implement only the current work card; do not jump ahead.
- Stop after verification and update `build-status.md` after each work card.
- Apply the browser-local tool guardrails: one data type, add, delete, `localStorage`, empty state, mobile check.
- Do not add backend, auth, database, payments, live API, uploads or multi-user sync.
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos, or real numbers.
- No action the brief does not have: the actions are Pick, Add and Delete only.
- Use made-up sample meals only; no real restaurants, names or contact details.
- Never run the scaffolder with `--overwrite` or choose "Remove existing files".
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.
