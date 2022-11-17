import React from 'react'

import Card from './Card.js'
import '../css/hand.css'

export default function Hand(props) {

    const LEFT_SHIFT = 90
    const CARD_WIDTH = 278
    
    let nCards = props.cards.length
    let rotateRatio = 1
    
    if(nCards > 4) {
        rotateRatio = 0.8
    }
    if(nCards > 6) {
        rotateRatio = 0.6
    }
    if(nCards > 8) {
        rotateRatio = 0.4
    }
    if(nCards > 10) {
        rotateRatio = 0.35
    }

    let angleRange = Math.min(Math.floor(nCards/2) * 7 * 2, 70)
    let styleHand = {
        width: String(CARD_WIDTH + nCards * (LEFT_SHIFT)) + "px", // width de la hand
        // transform: `translate(${LEFT_SHIFT* nCards * CARD_WIDTH},0%)`
    }
    let currentHand = props.cards.map((card, index) => {
        let centralizedRotation = (index * angleRange / nCards) - angleRange / 2
        let styleCard = {
            left: String(Math.floor(index*LEFT_SHIFT*rotateRatio)) + "px",
            rotate: `${centralizedRotation}deg`
        }
        return (<Card key={index} suit={card.suit} suit_visual={card.suit_visual} value={card.value} style={styleCard} pickRandomCard={props.pickRandomCard} />)
    })

    return (
        <div className="hand" style={styleHand}>
            <div className="cards">
                {currentHand}
            </div>
        </div>
    )
}