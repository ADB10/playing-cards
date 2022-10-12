
import { shuffle } from "./deckOperations"
import { GameMode, CLASSIC_SUITS, CLASSIC_VALUES, PRESIDENT_WEIGHTS } from "./constants"

export default class DeckProvider {
    
    static buildDeck(gameMode) {
        switch(gameMode) {
            case GameMode.President:
                return shuffle(buildPresidentDeck())
            default:
                alert("unknown gamemode")
                return []
        }
    }
}

function buildPresidentDeck() {
    let deck = []
    for (const [suit, suit_visual] of Object.entries(CLASSIC_SUITS)) {
        for(let i=0; i<CLASSIC_VALUES.length; ++i) {
            deck.push({
                "suit": suit,
                "suit_visual" : suit_visual,
                "value": CLASSIC_VALUES[i],
                "weight": PRESIDENT_WEIGHTS[i]
            })
        }
    }
    return deck
}
