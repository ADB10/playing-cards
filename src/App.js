import React from 'react'

import { GameMode } from './utils/constants.js';
import DeckProvider from './utils/DeckProvider.js'
import './App.css';
import Hand from './components/Hand.js';

function App() {

  const [gameMaster, setGameMaster] = React.useState({
    fullDeck: DeckProvider.buildDeck(GameMode.President),
    playerName: "host",
    hand: new Hand({cards : {}})
  })

  function pickRandomCard(event) {
    setGameMaster((lastGM) => {
      let cardPicked = lastGM.fullDeck.pickCard()
      return {
        ...lastGM,
        hand: [...lastGM.hand, cardPicked],
        fullDeck: lastGM.fullDeck
      }
    })
  }

  return (
    <div>
      <nav>
        <p onClick={pickRandomCard}>Pick a card</p>
        <p className="number-of-cards">{gameMaster.fullDeck.length} cards remaining</p>
      </nav>
      {gameMaster.fullDeck}
      {gameMaster.hand}
    </div>
  );
}

export default App;
