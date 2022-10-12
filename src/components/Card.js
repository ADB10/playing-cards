import React from 'react'
import '../css/card.css'

// clubs (♣), diamonds (♦), hearts (♥), and spades (♠)

export default function Card(props) {

    let draw_suit

    switch (props.suit) {
        case "hearts":
            draw_suit = "♥"
            break;
        case "diamonds":
            draw_suit = "♦"
            break;    
        case "clubs":
            draw_suit = "♣"
            break;
        default:
            draw_suit = "♠"
            break;
    }

    return (
        <div className={`card ${props.suit} ${props.value}`} style={props.style} onClick={props.pickRandomCard}>
            <span className={`value ${props.value}`}>{props.value}</span>
            <span className={`suit ${props.suit}`}>{draw_suit}</span>
        </div>
    )
}