import {
  GameMode,
  CLASSIC_SUITS,
  CLASSIC_VALUES,
  PRESIDENT_WEIGHTS,
} from "./constants";
import Card from '../components/Card';
import Deck from '../components/Deck';

export default class DeckProvider {
  static buildDeck(gameMode) {
    switch (gameMode) {
      case GameMode.President:
        return DeckProvider.buildPresidentDeck().shuffle();
      default:
        alert("unknown gamemode");
        return [];
    }
  }
  
  static buildPresidentDeck() {
    let cards = [];
    for (const [suit, suitVisual] of Object.entries(CLASSIC_SUITS)) {
      for (let i = 0; i < CLASSIC_VALUES.length; ++i) {
        cards.push(
          new Card({
            "suit" : suit,
            "suitVisual" : suitVisual,
            "value" : CLASSIC_VALUES[i],
            "weigth" : PRESIDENT_WEIGHTS[i]
          })
        )
      }
    }
    return new Deck({"cards" : cards})
  }
}

