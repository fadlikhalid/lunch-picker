# Project Brief

## Project Identity

**Lunch Picker**

## One-Sentence Concept

A one-page lunch picker: tap Pick and it suggests a meal; add your own meals and they are kept in the browser.

## Target User

You and your friends, who can never decide where to eat. You open it on your phones at lunchtime.

## User Goal

Tap **Pick** and see one meal. Tap again and see a different one. Add a meal of their own and see it in the list.

## Build Shape

Browser-local tool.

## Shape Confirmation

Confirmed by the learner. Clue: you add your own meals and they must still be there after a refresh.

## Version-One Success

- Sample meals are on the screen at first load.
- Five taps on Pick give different meals.
- A meal you add is still there after a browser refresh.

## Now / Later / Never

### Now

- One list of meals (sample meals to start).
- Pick button that shows one meal at a time.
- Add a meal.
- Delete a meal.
- Save the list with browser `localStorage`.
- Empty state and mobile layout.

### Later

- Mark a meal as "not today".
- Group meals by type (rice, noodles, light).
- Share the page with friends.

### Never (for tonight)

- Login, database, backend or live API.
- Map or restaurant search.
- Multi-user sync between friends' phones.
- Real names, phone numbers or business details.

## Assumptions

- Everyone opens the page on their own phone, so each phone keeps its own list.
- Meals are plain text names, such as "Nasi lemak" or "Chicken rice". These are sample items, not real records.
- Pick never shows the same meal twice in a row (when there are two or more meals).

## Proof Target

1. Tap Pick five times: the meals shown are not all the same, and never the same twice in a row.
2. Add a meal, refresh the page: the meal is still in the list.
3. Delete a meal: it is gone, and stays gone after a refresh.

## Trainer / Learner Notes

- Course: AI Builder Foundations (Spec, Build, Check; no deploy tonight).
- Learner brought their own idea instead of the school's problem.
