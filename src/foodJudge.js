const VERDICTS = {
  'nasi lemak': 'Coconut rice and sambal. Respectable. No notes.',
  'chicken rice': 'The safe choice. Nobody argues with chicken rice.',
  'mee goreng': 'Noodles with attitude. Good call.',
  'roti canai': 'Heavy carbs detected. Prepare for a 3 PM food coma.',
  laksa: 'Spicy choice! Hope you have tissues ready.',
  burger: 'Fast, loud and delicious. Napkins required.',
}

const CUSTOM_VERDICT = 'A pick from your own list. Bold. The group will have opinions.'
const INDECISIVE_VERDICT = 'Indecisive level: expert. Just eat already!'

// Picks within this window count toward the "just eat already" line.
export const INDECISIVE_WINDOW_MS = 60000
export const INDECISIVE_AFTER = 3

export function judge(meal, recentPicks) {
  if (recentPicks > INDECISIVE_AFTER) return INDECISIVE_VERDICT
  return VERDICTS[meal.name.trim().toLowerCase()] ?? CUSTOM_VERDICT
}
