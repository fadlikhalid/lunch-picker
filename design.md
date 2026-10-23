# Design Direction

## Design Inspiration URL

Fallback 3: Playful student dashboard. Learner's own line: a warm chilli-orange accent, a "hungry and cheerful" feel, made for friends deciding at the table.

## What We Borrow

- Layout: one friendly column on a phone with a big hero on top and one list under it. On a wide screen the hero sits beside the list.
- Spacing: roomy. 16px page gutters on a phone, 24px between areas, 12px inside rows.
- Color mood: warm cream page tinted with orange, one chilli-orange accent, soft supporting tones for row marks.
- Typography feel: rounded, friendly and big. The picked meal is the largest text on the page.
- Card/button style: a big rounded Pick button in the accent colour; small rounded text buttons for Add and Delete.
- Mobile feel: thumb-first. The Pick button sits where a thumb reaches without scrolling.

## What We Do Not Copy

- Brand/logo: no real food brand, restaurant name or logo.
- Content/copy: no real restaurant names, prices, ratings or addresses. Meals are plain dish names (sample data).
- Testimonials/stats: none.
- Photos/private identity: no food photos, no real people.
- Exact layout if it would look like a clone: nothing is copied from any one dashboard; only the playful mood is borrowed.

## Visual Mood

Hungry. Cheerful. Warm. Bouncy-but-tidy. Friend-sized.

## Layout Rules

For a browser-local tool:

- Order on a phone, top to bottom: header (name + one line), hero (the picked meal and the Pick button), "Add a meal" form, the meal list.
- Hero: before the first tap it says `What are we eating?` in the large size; after a tap it shows the meal name in the large size in the accent colour. The Pick button is full width on a phone, at least 56px tall.
- Add form: one text input labelled `Add a meal` and an `Add` button, on one row if there is room, stacked on a very narrow phone. The form sits at the top of the list area, not in its own box.
- Item list: one list, not a box per meal. Each row has a small coloured mark, the meal name in bold, and a plain-text `Delete` on the right. Rows are split by a thin line.
- Delete affordance: plain text button `Delete` with a visible focus ring; no confirm dialog (the list is easy to rebuild).
- Update/mark state: the meal that is currently picked is highlighted in the list with its name in the accent colour and the word `Picked` in small text. Nothing else changes state.
- Empty state: `No meals yet. Add one above.` in muted text where the list would be; the Pick button is disabled and says `Add a meal first`.
- Refresh proof visibility: the list itself is the proof. After a refresh the added meals are in the list; no extra panel.
- Mobile stacking: one column at every width up to 900px; above 900px the hero sits on the left and the form + list on the right.

## Color / Contrast Rules

- Page background: cream tinted with the accent, `#FFF6EC`. Never plain white or plain grey.
- Text: dark brown-black `#2B1B12` on the cream background (contrast above 12:1). Muted text `#6B5A4E` (AA on cream).
- Accent: chilli orange `#C2410C`. White text on the accent (the Pick button) passes AA (above 5:1). Accent text on cream passes AA.
- Row-mark palette (five colours, used in order and repeated): `#C2410C`, `#0F766E`, `#6D28D9`, `#BE185D`, `#1D4ED8`. Every mark has at least 3:1 against the cream background.
- Lines between rows: `#E8D5C4`.
- Disabled button: muted brown text on `#EAD9C9`; the word on it still reads clearly.

## Typography Feel

Friendly and rounded. Use the system font stack `ui-rounded, "SF Pro Rounded", "Nunito", system-ui, -apple-system, "Segoe UI", sans-serif`. No web font and no new library. Picked meal: 40px on a phone, 56px on a wide screen, weight 800. Page title 28px weight 800. Body 18px. List meal names 18px weight 700. Small text 14px. Use `font-variant-numeric: tabular-nums` anywhere a number shows.

## Component Style

Buttons: Pick is a large, fully rounded button (radius 999px), accent background, white bold text, no shadow. Add is a smaller rounded button with the same accent. Delete is plain accent-coloured text with an underline on hover and focus. All buttons are at least 44px tall.
Surfaces (at most two stand out): the hero is one tinted area (a slightly deeper cream `#FFE9D2`); the list with its add form is the second area. Everything else sits on the page background. No box inside a box, no border and shadow on the same thing, no shadow on rows.
Inputs: one rounded text input, 48px tall, a 2px `#C2410C` border on focus, a visible label `Add a meal` (not just a placeholder).
Status labels (plain text, no pills): `Picked` in small accent text; `Sample data` in small muted text in the header.

## Mobile Rules

- Design for 375px wide first; nothing is cut off and nothing scrolls sideways.
- The header, the hero and the Pick button are visible on the first screen without scrolling.
- Input and Add button never smaller than 44px tall.
- Long meal names wrap onto a second line instead of being cut off.
- On a phone, the list is one column of full-width rows.

## Accessibility Basics

- Text and button contrast at least AA (see colours above).
- Visible focus ring on every button and the input (2px accent outline with 2px offset).
- The input has a real `<label>`; every button has clear text.
- Tap targets at least 44px.
- The picked meal is announced to screen readers (`aria-live="polite"` on the hero text).
- Meaning is never carried by colour alone: the picked row also says `Picked`.

## Anti-Slop Rules

- no fake logos
- no fake testimonials
- no fake stats unless clearly marked sample
- no lorem ipsum in final proof
- no emoji anywhere on the page, no box around every section, no pill around plain text
- no random gradient blobs unless they match the direction (none planned)
- one clear primary action: **Pick**
- no real restaurant names, prices, ratings or addresses
- readable on phone width

## Recipe applied to Lunch Picker

The `## Visual recipe` below is written for rows and a main figure. For this app, read it like this. Where this section and the recipe differ, this section wins:

- Header: `Lunch Picker`, the line `Tap Pick. Stop arguing about lunch.` under it, and `Sample data` in small muted text, shown only while the list still holds nothing the user added.
- Hero: instead of a figure, the hero shows the picked meal in the largest size, in the accent colour, with the Pick button under it. There is no stacked bar.
- Rows: the meals. Each row has the small colour mark, the bold name and `Delete` on the right. No progress bar, no amount, no `6 left`.
- Motion: the only movement is the Pick animation: the hero shuffles through meal names for about one second, slowing down, then the chosen meal pops in with a short burst of confetti (plain CSS, no emoji, no library). It is switched off when the device asks for reduced motion. (No bars to grow.)
- Everything else (colour, surfaces, width, type, no emoji, no new library) applies as written.

## Vibrant upgrade (restyled: refined dark look, replaces the earlier bright and chunky one)

Where this section and anything above differ, this section wins. The learner said the first vibrant version looked childish, so the look is now grown-up and confident:

- Mood: dark, warm, editorial. Think late-night food menu, not a kids' app.
- Page: deep espresso `#120D0A` with soft orange and pink glows at the top. Text `#F5EDE6`, muted `#AA9D93` (both AA on the dark background).
- Accent: vivid chilli orange `#FF6B2C`. Dark text `#170E08` on the accent (above 7:1). Orange is never used for small text on light.
- Type: system sans, tight tracking. The picked meal is huge (up to 92px, weight 800). Small labels are 12px, uppercase, widely spaced, muted. No cartoon logo: the name is a small wordmark `Lunch Picker.` with an orange full stop.
- Hero: a dark panel with a strong orange glow in one corner and a pink one in the other. The picked meal in near-white, the Food Judge line under it, and one solid orange Pick button with a soft orange glow (no chunky 3D edge). The button glows slowly until the first pick.
- List panel: a dark panel with a hairline border. Rows are split by thin lines. Each row has a small coloured dot, the bold name and a muted `Delete`. The picked row has a soft orange tint, a thin orange bar on the left and the word `PICKED` in small caps.
- Quick add: ghost pill buttons with a hairline border that turn orange-tinted on hover.
- Motion: the names roll in with a soft blur while shuffling, the winner fades in sharp, a confetti burst falls, all off for reduced motion.
- Two standout areas only: the hero and the list panel.

## Visual recipe

The build follows this section card by card. The style above sets the colours, typeface and mood; this section fixes what the page shows and how its surfaces, rows and icons are built, and wins wherever the two differ. For a page that shows rows and a main figure:

- Header: the app name, the one-line purpose under it, and the words `Sample data` in small muted text. A small inline SVG icon or no icon, never an emoji.
- Hero: a short label, the main figure at 48px or larger in the accent colour, one line under it with the count behind it (for example `4 plans in progress`), and a stacked bar showing each counted row's share of the main figure, one colour per row, and under the bar, each counted row's name and amount beside a small mark in its colour.
- Rows: one list, not a box per row. Each row: a small mark in that row's colour, the name in bold, the main amount on the right, and under them a bar for done of total with the text `6 of 12` and the words `6 left` beside it. Rows are split by a thin line. A finished row is muted, says `Finished` in place of `6 left`, and has a full grey bar.
- Colour: one accent colour from the style, plus a five-colour row palette, every colour with AA contrast on its background.
- Surfaces: the page background is tinted lightly with the accent, never plain white or plain grey. At most two areas stand out from it (for example the hero and the list, with any add form at the top of the list). Never a box inside a box, never a border and a shadow on the same thing, no shadow on rows.
- Width: on a screen wider than 900px, use the width (the hero beside the list, or the hero as a full-width band above it). On a phone, one column.
- Type: the style's typeface for words and numbers, with tabular numbers (CSS `font-variant-numeric: tabular-nums`) so figures line up. Emphasis comes from size and weight, not from boxes or pills. The only boxes in a row are its controls (buttons, tick boxes, inputs).
- Motion: bars grow from 0 when the page loads (a CSS transition). Nothing else moves.
- No new library: plain CSS and inline SVG. No emoji anywhere on the page: they look different on every device.

For an app where the learner adds or changes items, use the same row recipe for the items and the hero for the count that matters most.

## Design Verification Checklist

- [ ] The first screen matches the intended mood (warm, cheerful, chilli-orange).
- [ ] The layout supports the user goal: the Pick button and the picked meal are the first things seen.
- [ ] Mobile width (375px) is readable and nothing is cut off.
- [ ] Nothing clones another brand.
- [ ] The build avoids fake claims, emoji and generic AI decoration.
- [ ] Focus rings are visible and tap targets are at least 44px.
