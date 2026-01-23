# Campaign Writing Standards

## Description Requirements

1. **Include dating clues in the description itself** - Military technology, tactics, formations, army sizes, and logistics that help narrow the time period. The description should give a knowledgeable player enough to make a reasonable guess.

2. **Avoid non-military identifying details:**
   - No religious holidays (gives away Yom Kippur War, Tet Offensive)
   - No operation names (Desert Storm, Barbarossa)
   - No country/people names - use descriptive phrases ("an island nation," "a northern kingdom")
   - No specific dates within the text

3. **Technology details should be specific:**
   - Not just "guns" but "matchlock arquebuses requiring forked rests"
   - Not just "armor" but "chain mail hauberks with surcoats; great helms coming into fashion"
   - Not just "cavalry" but "lancers in heavy armor" or "horse archers with composite bows"

4. **Temporal language must be accurate:**
   - Don't say "decades" if you mean centuries
   - Be precise about relative timing ("a century earlier," "within a generation")

## Hint Requirements

1. **Hints provide date ranges for technologies already mentioned** - They don't reveal new information, they help the player date what they already read.

2. **Hints must NOT:**
   - Name specific people (no "Timur", "Wellington", "Napoleon")
   - Name specific organizations (no "British East India Company", "Teutonic Knights")
   - Name specific battles or wars (no "this was common in the Napoleonic Wars")
   - Provide fame-based identification ("this commander would become famous")

3. **Format:** "Technology X was standard/used from roughly YEAR to YEAR. [Reason why it changed]."

4. **Two hints per campaign:**
   - First hint (15-20 pts): Broader technology dating
   - Second hint (20-25 pts): Narrower technology or contextual dating

5. **Verification checklist for each hint:**
   - [ ] Does the hint only reference things already in the description?
   - [ ] Does the hint avoid naming people, organizations, or battles?
   - [ ] Does the hint explain WHEN a technology was used, not just WHAT it was?

## Explanation Requirements (CRITICAL)

**NO FAKE REASONING.** The explanation must explain WHY details are chronologically distinctive.

### Bad (fake reasoning):
"The matchlock muskets with pikes and cavalry lancers, combined with the extreme casualty disparity, place this in the early 17th century."
- "Casualty disparity" doesn't indicate any time period
- Just asserts the date without explaining the logic

### Good (actual reasoning):
"Matchlock muskets (requiring lit slow-match) were standard from 1500-1700, before flintlocks replaced them. Cavalry lancers in heavy armor had fallen from use in Western Europe by 1600 but remained effective in Eastern Europe until the 18th century. This combination narrows to the early 17th century."
- Explains what time period each technology indicates
- Shows how details combine to narrow the date

## Structure

```javascript
{
    id: "campaign_XXX",
    title: "Evocative but Non-Identifying Title",
    actualYear: YYYY,  // negative for BCE
    difficulty: "easy|medium|hard",
    description: `Multiple paragraphs with military technology details...`,
    hints: [
        { cost: 15-20, text: "Date range for technology...", explanation: "Brief note" },
        { cost: 20-25, text: "Narrower date range...", explanation: "Brief note" }
    ],
    explanation: "Battle name and year. WHY each detail indicates its time period. How they combine.",
    tags: ["battle-type", "century", "region"]
}
```

## Quality Review Checklist

After writing each campaign, verify:

### Description
- [ ] Contains specific military technology details (weapons, armor, formations)
- [ ] Avoids non-military identifying details (holidays, operation names, country names)
- [ ] Technology described specifically enough to date (not just "guns" but type of guns)
- [ ] Temporal language is accurate (don't say "decades" if it's centuries)
- [ ] No fame-based identifiers ("this commander would become famous")

### Hints
- [ ] Only reference technologies/contexts already in the description
- [ ] Provide date ranges with reasoning (why did this technology appear/disappear)
- [ ] Don't name specific people, organizations, or battles
- [ ] Don't use fame-based identification

### Explanation
- [ ] Explains WHY each detail indicates its time period
- [ ] Shows how multiple details combine to narrow the date
- [ ] No fake reasoning (just asserting a date without explaining the logic)

### Overall
- [ ] Accurate historical information
- [ ] Interesting to read
- [ ] Fair difficulty (possible to narrow date from description alone)

## Coverage Gaps to Fill

When writing new campaigns, prioritize underrepresented:
- Regions: Sub-Saharan Africa, Southeast Asia, South America, Central Asia
- Periods: 6th-10th centuries, pre-classical ancient
- Types: Naval battles, sieges in non-European contexts
