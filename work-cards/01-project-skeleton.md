# Work Card 01: Project skeleton

## Goal

Create the Vite + React app in this folder, with "Lunch Picker" as a header and one line under it.

## Inputs

- `build-status.md`
- `build-blueprint.md`
- `design.md`
- `project-brief.md` (project name: Lunch Picker)

## Files likely touched

- `package.json`, `index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/App.css`
- `build-status.md`

## Instructions for the coding agent

1. Create the Vite + React app in a temporary subfolder: `npx -y create-vite@9.2.1 app-temp --template react --no-interactive`
2. Ignore the scaffolder's "cd app-temp" hint. Move everything inside `app-temp`, hidden files included, up into this project folder, next to `START_HERE.md`. Then delete the empty `app-temp` folder.
3. Set the `<title>` in `index.html` to `Lunch Picker`, and the `"name"` in `package.json` to `lunch-picker`.
4. Run `npm install`, then `npm run dev`.
5. Replace the starter content in `src/App.jsx` with a header: `Lunch Picker` and under it `Tap Pick. Stop arguing about lunch.`
6. Remove the starter logos, counter and demo styles. Keep `src/App.css` almost empty (plain CSS).
7. Update `build-status.md`.

## What not to do

- Never run a scaffolder with `--overwrite`, and never choose "Remove existing files": that empties this folder and deletes the planning files, `prompts/`, `templates/` and `work-cards/`.
- Do not build the Pick area, form or list yet.
- Do not add Tailwind, a router or any extra package.
- Do not initialize Git or deploy.

## Done when

- `npm run dev` starts without errors.
- The page shows the header `Lunch Picker` and the line under it.
- The planning files, `prompts/`, `templates/` and `work-cards/` are all still here.

## Verification steps

- Run `npm run dev` and open the localhost address it prints.
- Check that `START_HERE.md`, `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, `build-status.md`, `prompts/`, `templates/` and `work-cards/` still exist.
- Check that the tab title says `Lunch Picker`.
- Design check: the header text is readable and uses no emoji, per `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- `npm run dev` starts and prints a localhost address.
- Opening that address shows `Lunch Picker` with the line `Tap Pick. Stop arguing about lunch.` under it, and the browser tab says `Lunch Picker`.
- The planning files and the `work-cards/` folder are still in the project folder.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after verification. Update `build-status.md` and wait for the learner. Do not start Card 02.

## Status

Done (learner confirmed)
