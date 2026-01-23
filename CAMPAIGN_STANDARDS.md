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

The explanation should read like **an earnest historian helping students revise for a final exam**—educational, informative, and rich with context. Not chatty or formulaic.

### Required Elements

1. **Proper nouns** - Name the battle, commanders, places, and specific units. This is the educational payoff after guessing.

2. **Historical significance** - What made this battle important? What were the consequences?

3. **Dating logic woven naturally** - Explain WHY details indicate specific time periods, but integrate this into the narrative rather than using formulaic patterns like "For dating: X = Y."

### Tone

- **Do:** Write like an earnest historian explaining to interested students
- **Don't:** Write like a streamer commenting on a quiz ("this totally screams 1200!")
- **Don't:** Use formulaic structures ("For dating: Technology X (1400-1500) + Context Y = Date")

### Bad (formulaic/sparse):
"This was the Battle of Kircholm in 1605. Matchlock muskets were standard from 1500-1700. Cavalry lancers had fallen from use in Western Europe by 1600 but remained effective in Eastern Europe. This combination indicates the early 17th century."
- Lists dating facts without historical context
- No proper nouns beyond the battle name
- Reads like a checklist, not an explanation

### Good (rich historical context with natural dating):
"This was the Battle of Kircholm on September 27, 1605, one of the greatest cavalry victories in history. Grand Hetman Jan Karol Chodkiewicz led 3,600 Polish-Lithuanian cavalry—including the famous Winged Hussars—against 11,000 Swedish infantry under Charles IX's commander. The Hussars' charge shattered the Swedish formations in barely 20 minutes; Sweden lost over 8,000 killed while Polish casualties were under 100. Matchlock muskets with pike formations (standard 1500-1700) versus cavalry lancers (obsolete in Western Europe by 1600 but devastating in Eastern Europe) precisely identifies the early 17th century."

- Names commanders, units, and specific details
- Explains the battle's significance (one of history's greatest cavalry victories)
- Dating logic flows naturally as part of the explanation

### More Examples

**Constantinople 1453:**
"This was the Fall of Constantinople in 1453—the end of the Byzantine Empire after 1,123 years. Sultan Mehmed II ('the Conqueror'), age 21, besieged the city with ~80,000 Ottoman troops against Emperor Constantine XI Palaiologos's 7,000 defenders. The massive bombards were cast on-site by Hungarian engineer Orban; the largest required 60 oxen to move. Constantine XI died fighting on the walls—the last Roman Emperor. The bombards having to be cast on-site places this in the early gunpowder period; by the 1480s mobile bronze cannon had made such monsters obsolete."

**Mogadishu 1993:**
"This was the Battle of Mogadishu on October 3-4, 1993, immortalized in Black Hawk Down. Task Force Ranger—Delta Force and Army Rangers—launched a daylight raid to capture lieutenants of warlord Mohamed Farrah Aidid. Master Sergeant Gary Gordon and Sergeant First Class Randy Shughart volunteered to defend the second crash site; both were killed and received posthumous Medals of Honor. RPGs—cheap Soviet-designed weapons from the 1960s—brought down advanced helicopters and negated technological advantages, defining post-Cold War asymmetric warfare."

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
    explanation: "This was the Battle of X on [date], where [Commander A] faced [Commander B]. [Historical context and significance—what made this battle matter]. [Specific details: units, casualties, memorable moments]. [Dating logic woven naturally: Technology X (date range) combined with Context Y identifies the period].",
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
- [ ] Names the battle, commanders, places, and specific units (proper nouns)
- [ ] Explains historical significance (why this battle mattered)
- [ ] Dating logic woven naturally into narrative (not formulaic)
- [ ] Tone: earnest historian helping students revise (not chatty, not a checklist)
- [ ] No fake reasoning (just asserting a date without explaining the logic)

### Overall
- [ ] Accurate historical information
- [ ] Interesting to read
- [ ] Fair difficulty (possible to narrow date from description alone)

## Checking for Duplicates

Before adding a new campaign, verify it doesn't already exist:

1. **Search for the battle name** in existing explanations:
   ```bash
   grep -i "agincourt\|battle name" campaigns.js
   ```

2. **Search for the year** to find campaigns from the same time:
   ```bash
   grep "actualYear: 1415" campaigns.js
   ```
   Then verify any matches are different battles (same year ≠ same battle).

3. **Search for key identifiers** (commander names, locations):
   ```bash
   grep -i "henry v\|francis i\|cortés" campaigns.js
   ```

## Coverage Gaps to Fill

When writing new campaigns, prioritize underrepresented:
- Regions: Sub-Saharan Africa, Southeast Asia, South America, Central Asia
- Periods: 6th-10th centuries, pre-classical ancient
- Types: Naval battles, sieges in non-European contexts
