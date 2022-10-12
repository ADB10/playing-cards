import React from 'react'

import classicPlayingCards from './data/classicPlayingCards.js'
import './App.css';
import Hand from './components/Hand.js';
import Deck from './components/Deck.js';

function App() {

  const [gameMaster, setGameMaster] = React.useState({
    fullDeck: classicPlayingCards.sort((a, b) => 0.5 - Math.random()),
    playerName: "host",
    hand: []
  })

  function pickRandomCard(event) {
    setGameMaster((lastGM) => {
      let cardPicked = lastGM.fullDeck.pop()
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
      <Deck cards={gameMaster.fullDeck} />
      <Hand cards={gameMaster.hand} pickRandomCard={pickRandomCard}/>
    </div>
  );
}

export default App;
