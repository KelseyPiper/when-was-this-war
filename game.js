// Game State
const state = {
    currentRound: 0,
    totalRounds: 10,
    score: 0,
    difficulty: 'all',
    campaigns: [],
    usedCampaignIds: [],
    currentCampaign: null,
    hintsRevealed: 0,
    roundResults: [],
    guessSubmitted: false
};

// DOM Elements
const elements = {
    // Screens
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    endScreen: document.getElementById('end-screen'),

    // Start screen
    difficultySelect: document.getElementById('difficulty-select'),
    roundsSelect: document.getElementById('rounds-select'),
    startBtn: document.getElementById('start-btn'),
    highScoreDisplay: document.getElementById('high-score-display'),

    // Game screen
    currentRound: document.getElementById('current-round'),
    totalRounds: document.getElementById('total-rounds'),
    currentScore: document.getElementById('current-score'),
    campaignTitle: document.getElementById('campaign-title'),
    campaignDescription: document.getElementById('campaign-description'),
    hintBtn: document.getElementById('hint-btn'),
    hintCost: document.getElementById('hint-cost'),
    hintsList: document.getElementById('hints-list'),
    hintsContainer: document.getElementById('hints-container'),
    yearInput: document.getElementById('year-input'),
    submitBtn: document.getElementById('submit-btn'),
    giveUpBtn: document.getElementById('give-up-btn'),
    guessSection: document.getElementById('guess-section'),
    resultSection: document.getElementById('result-section'),
    resultDisplay: document.getElementById('result-display'),
    timelineViz: document.getElementById('timeline-viz'),
    explanation: document.getElementById('explanation'),
    nextBtn: document.getElementById('next-btn'),

    // End screen
    finalScore: document.getElementById('final-score'),
    maxScore: document.getElementById('max-score'),
    scoreBreakdown: document.getElementById('score-breakdown'),
    shareBtn: document.getElementById('share-btn'),
    shareFeedback: document.getElementById('share-feedback'),
    playAgainBtn: document.getElementById('play-again-btn')
};

// Initialize
function init() {
    displayHighScore();
    attachEventListeners();
}

function attachEventListeners() {
    elements.startBtn.addEventListener('click', startGame);
    elements.submitBtn.addEventListener('click', submitGuess);
    elements.giveUpBtn.addEventListener('click', giveUp);
    elements.hintBtn.addEventListener('click', revealHint);
    elements.nextBtn.addEventListener('click', nextRound);
    elements.shareBtn.addEventListener('click', shareResult);
    elements.playAgainBtn.addEventListener('click', resetGame);

    elements.yearInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitGuess();
    });
}

function showScreen(screen) {
    elements.startScreen.classList.add('hidden');
    elements.gameScreen.classList.add('hidden');
    elements.endScreen.classList.add('hidden');
    screen.classList.remove('hidden');
}

// Game Flow
function startGame() {
    state.difficulty = elements.difficultySelect.value;
    state.totalRounds = parseInt(elements.roundsSelect.value);
    state.currentRound = 0;
    state.score = 0;
    state.usedCampaignIds = [];
    state.roundResults = [];

    // Filter campaigns by difficulty
    let filteredCampaigns = CAMPAIGNS.filter(c =>
        state.difficulty === 'all' || c.difficulty === state.difficulty
    );

    // Get previously seen campaigns
    const seenIds = getSeenCampaigns();

    // Separate into unseen and seen
    const unseen = filteredCampaigns.filter(c => !seenIds.includes(c.id));
    const seen = filteredCampaigns.filter(c => seenIds.includes(c.id));

    // If all campaigns have been seen, reset the seen list
    if (unseen.length === 0 && seen.length > 0) {
        resetSeenCampaigns();
        state.campaigns = shuffleArray([...filteredCampaigns]);
    } else {
        // Prioritize unseen campaigns, then add seen ones (both shuffled)
        state.campaigns = [...shuffleArray([...unseen]), ...shuffleArray([...seen])];
    }

    showScreen(elements.gameScreen);
    elements.totalRounds.textContent = state.totalRounds;
    nextRound();
}

function nextRound() {
    state.currentRound++;
    state.hintsRevealed = 0;
    state.guessSubmitted = false;

    if (state.currentRound > state.totalRounds) {
        endGame();
        return;
    }

    // Get next campaign
    state.currentCampaign = getNextCampaign();
    if (!state.currentCampaign) {
        // Ran out of campaigns, end early
        endGame();
        return;
    }

    // Update UI
    elements.currentRound.textContent = state.currentRound;
    elements.currentScore.textContent = state.score;
    elements.campaignTitle.textContent = state.currentCampaign.title;
    elements.campaignDescription.innerHTML = state.currentCampaign.description
        .split('\n\n')
        .map(p => `<p>${p}</p>`)
        .join('');

    // Reset hints
    elements.hintsList.innerHTML = '';
    updateHintButton();

    // Show guess section, hide result
    elements.guessSection.classList.remove('hidden');
    elements.resultSection.classList.add('hidden');
    elements.yearInput.value = '';

    // Scroll to top after DOM updates, then focus without scrolling
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        elements.yearInput.focus({ preventScroll: true });
    }, 0);
}

function getNextCampaign() {
    for (const campaign of state.campaigns) {
        if (!state.usedCampaignIds.includes(campaign.id)) {
            state.usedCampaignIds.push(campaign.id);
            // Mark as seen in localStorage for future sessions
            markCampaignSeen(campaign.id);
            return campaign;
        }
    }
    return null;
}

function parseYearInput(input) {
    const trimmed = input.trim().toLowerCase();

    // Handle decade format like "1870s"
    const decadeMatch = trimmed.match(/^(\d{3,4})s$/);
    if (decadeMatch) {
        return parseInt(decadeMatch[1]) + 5; // Middle of decade
    }

    // Handle BCE/BC format like "53 bce", "53 bc", "53 b.c.e.", "53 b.c."
    const bceMatch = trimmed.match(/^(\d{1,4})\s*(?:bce|bc|b\.c\.e\.?|b\.c\.?)$/);
    if (bceMatch) {
        return -parseInt(bceMatch[1]);
    }

    // Handle negative year like "-53"
    const negativeMatch = trimmed.match(/^-(\d{1,4})$/);
    if (negativeMatch) {
        return -parseInt(negativeMatch[1]);
    }

    // Handle plain year
    const yearMatch = trimmed.match(/^(\d{1,4})$/);
    if (yearMatch) {
        return parseInt(yearMatch[1]);
    }

    return null;
}

function calculateScore(guess, actual) {
    const diff = Math.abs(guess - actual);
    const age = 2026 - actual; // how old the battle is

    // Scale factor: 1x for recent battles, up to 3x for ancient battles
    // This makes older battles more forgiving since the time span is larger
    const scale = Math.min(3, Math.max(1, age / 500));

    if (diff <= 5 * scale) return 100;   // Exact
    if (diff <= 10 * scale) return 90;   // Very close
    if (diff <= 25 * scale) return 75;   // Close
    if (diff <= 50 * scale) return 60;   // Good
    if (diff <= 100 * scale) return 40;  // Fair
    if (diff <= 200 * scale) return 20;  // Distant
    return 0;                             // Way off
}

function getScoreLabel(points) {
    if (points === 100) return { text: 'Exact!', class: 'perfect' };
    if (points >= 90) return { text: 'Very close!', class: 'perfect' };
    if (points >= 75) return { text: 'Close', class: 'good' };
    if (points >= 60) return { text: 'Good', class: 'good' };
    if (points >= 40) return { text: 'Fair', class: 'okay' };
    if (points >= 20) return { text: 'Distant', class: 'miss' };
    return { text: 'Way off', class: 'miss' };
}

function submitGuess() {
    if (state.guessSubmitted) return;

    const input = elements.yearInput.value;
    const guess = parseYearInput(input);

    if (guess === null || guess < -500 || guess > 2025) {
        elements.yearInput.style.borderColor = '#c62828';
        setTimeout(() => {
            elements.yearInput.style.borderColor = '';
        }, 1000);
        return;
    }

    processGuess(guess);
}

function giveUp() {
    if (state.guessSubmitted) return;
    processGuess(null);
}

function processGuess(guess) {
    state.guessSubmitted = true;
    const actual = state.currentCampaign.actualYear;
    let points = 0;
    let diff = null;

    if (guess !== null) {
        points = calculateScore(guess, actual);
        diff = Math.abs(guess - actual);
    }

    // Apply hint penalty
    let hintPenalty = 0;
    for (let i = 0; i < state.hintsRevealed; i++) {
        if (state.currentCampaign.hints[i]) {
            hintPenalty += state.currentCampaign.hints[i].cost;
        }
    }
    points = Math.max(0, points - hintPenalty);

    state.score += points;
    state.roundResults.push({
        campaign: state.currentCampaign,
        guess: guess,
        actual: actual,
        points: points,
        hintPenalty: hintPenalty
    });

    // Update score display
    elements.currentScore.textContent = state.score;

    // Show result
    displayResult(guess, actual, points, diff, hintPenalty);
}

function displayResult(guess, actual, points, diff, hintPenalty) {
    elements.guessSection.classList.add('hidden');
    elements.resultSection.classList.remove('hidden');

    // Result text
    const label = getScoreLabel(points + hintPenalty); // Show score tier before penalty
    let resultHTML = '';

    if (guess === null) {
        resultHTML = `
            <div>The answer was <strong>${formatYear(actual)}</strong></div>
            <div class="points miss">0 points</div>
        `;
    } else {
        const diffText = diff === 0 ? 'Spot on!' : `You were ${diff} years off.`;
        resultHTML = `
            <div>You guessed <strong>${formatYear(guess)}</strong>. The answer was <strong>${formatYear(actual)}</strong>.</div>
            <div>${diffText}</div>
            <div class="points ${label.class}">${points} points</div>
        `;
        if (hintPenalty > 0) {
            resultHTML += `<div style="font-size: 0.9rem; color: var(--text-muted);">(${hintPenalty} point hint penalty applied)</div>`;
        }
    }
    elements.resultDisplay.innerHTML = resultHTML;

    // Timeline visualization
    if (guess !== null) {
        displayTimeline(guess, actual);
    } else {
        elements.timelineViz.innerHTML = '';
    }

    // Explanation - only include information the player had access to
    let explanationHTML = `
        <h3>Historical Context</h3>
        <p>${state.currentCampaign.explanation}</p>
    `;

    // Add explanations for hints the player revealed
    const revealedHints = state.currentCampaign.hints.slice(0, state.hintsRevealed);
    for (const hint of revealedHints) {
        if (hint.explanation) {
            explanationHTML += `<p>${hint.explanation}</p>`;
        }
    }

    elements.explanation.innerHTML = explanationHTML;
}

function displayTimeline(guess, actual) {
    // Determine range
    const minYear = Math.min(guess, actual) - 50;
    const maxYear = Math.max(guess, actual) + 50;
    const range = maxYear - minYear;

    const guessPos = ((guess - minYear) / range) * 100;
    const actualPos = ((actual - minYear) / range) * 100;

    elements.timelineViz.innerHTML = `
        <div class="timeline-bar">
            <div class="timeline-marker actual" style="left: ${actualPos}%"></div>
            <div class="timeline-marker guess" style="left: ${guessPos}%"></div>
        </div>
        <div class="timeline-labels">
            <span>${formatYear(minYear)}</span>
            <span>${formatYear(maxYear)}</span>
        </div>
        <div class="timeline-legend">
            <div class="legend-item">
                <div class="legend-dot guess"></div>
                <span>Your guess (${formatYear(guess)})</span>
            </div>
            <div class="legend-item">
                <div class="legend-dot actual"></div>
                <span>Actual (${formatYear(actual)})</span>
            </div>
        </div>
    `;
}

function revealHint() {
    const hints = state.currentCampaign.hints;
    if (state.hintsRevealed >= hints.length) return;

    const hint = hints[state.hintsRevealed];
    state.hintsRevealed++;

    const hintEl = document.createElement('div');
    hintEl.className = 'hint-item';
    hintEl.textContent = hint.text;
    elements.hintsList.appendChild(hintEl);

    updateHintButton();
}

function updateHintButton() {
    const hints = state.currentCampaign.hints;
    if (state.hintsRevealed >= hints.length) {
        elements.hintBtn.disabled = true;
        elements.hintBtn.textContent = 'No more hints';
    } else {
        elements.hintBtn.disabled = false;
        const nextCost = hints[state.hintsRevealed].cost;
        elements.hintCost.textContent = nextCost;
        elements.hintBtn.innerHTML = `Buy Hint (<span id="hint-cost">${nextCost}</span> pts)`;
    }
}

function endGame() {
    showScreen(elements.endScreen);

    const maxPossible = state.roundResults.length * 100;
    elements.finalScore.textContent = state.score;
    elements.maxScore.textContent = maxPossible;

    // Score breakdown
    let breakdownHTML = '';
    for (const result of state.roundResults) {
        const title = result.campaign.title.length > 30
            ? result.campaign.title.substring(0, 30) + '...'
            : result.campaign.title;
        breakdownHTML += `
            <div class="breakdown-item">
                <span class="campaign">${title}</span>
                <span class="points">${result.points} pts</span>
            </div>
        `;
    }
    elements.scoreBreakdown.innerHTML = breakdownHTML;

    // Save high score
    saveHighScore(state.score, maxPossible);
}

function saveHighScore(score, maxPossible) {
    const key = `highscore_${state.difficulty}_${state.totalRounds}`;
    const existing = localStorage.getItem(key);
    if (!existing || score > parseInt(existing)) {
        localStorage.setItem(key, score);
    }
    displayHighScore();
}

function displayHighScore() {
    const difficulty = elements.difficultySelect.value;
    const rounds = elements.roundsSelect.value;
    const key = `highscore_${difficulty}_${rounds}`;
    const score = localStorage.getItem(key);

    if (score) {
        elements.highScoreDisplay.textContent = `High score: ${score}/${rounds * 100}`;
    } else {
        elements.highScoreDisplay.textContent = '';
    }
}

function shareResult() {
    const maxPossible = state.roundResults.length * 100;
    const percent = Math.round((state.score / maxPossible) * 100);
    const text = `I scored ${state.score}/${maxPossible} (${percent}%) on When Was This War? Can you guess historical battles by their descriptions?`;

    navigator.clipboard.writeText(text).then(() => {
        elements.shareFeedback.textContent = 'Copied to clipboard!';
        setTimeout(() => {
            elements.shareFeedback.textContent = '';
        }, 2000);
    }).catch(() => {
        elements.shareFeedback.textContent = 'Could not copy to clipboard';
    });
}

function resetGame() {
    showScreen(elements.startScreen);
    displayHighScore();
}

// Utility
function formatYear(year) {
    if (year < 0) {
        return `${Math.abs(year)} BCE`;
    }
    return year.toString();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Seen campaigns tracking (localStorage)
const SEEN_CAMPAIGNS_KEY = 'seen_campaigns';

function getSeenCampaigns() {
    const stored = localStorage.getItem(SEEN_CAMPAIGNS_KEY);
    return stored ? JSON.parse(stored) : [];
}

function markCampaignSeen(id) {
    const seen = getSeenCampaigns();
    if (!seen.includes(id)) {
        seen.push(id);
        localStorage.setItem(SEEN_CAMPAIGNS_KEY, JSON.stringify(seen));
    }
}

function resetSeenCampaigns() {
    localStorage.removeItem(SEEN_CAMPAIGNS_KEY);
}

// Update high score display when settings change
elements.difficultySelect.addEventListener('change', displayHighScore);
elements.roundsSelect.addEventListener('change', displayHighScore);

// Start
init();
