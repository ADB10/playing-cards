
export function shuffle(deck) {
    return deck.sort((a, b) => 0.5 - Math.random())
}
