import React from 'react'
import Card from './Card.js'
import '../index.css'


export default function Deck(props) {
    const LEFT_SHIFT = 5,
    CARD_WIDTH = 278,
    CARD_HEIGHT = 356
    let nCards = props.cards.length
    let styleDeck = {
        width: String(CARD_WIDTH + nCards*LEFT_SHIFT) + "px", // width de la hand
        height: String(CARD_HEIGHT) + "px"
    }

    let currentDeck = props.cards.map((card, index) => {
        let leftShift = {
            left: String(index*LEFT_SHIFT) + "px"
        }
        return (<Card key={index} suit={card.suit} value={card.value} style={leftShift} />)
    })


    return (
        <div id='deck' style={styleDeck}>
            {currentDeck}
        </div>
    )
}