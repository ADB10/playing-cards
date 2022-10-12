import React from 'react'
import '../css/card.css'

export default function Card(props) {
    return (
        <div className={`card ${props.suit} ${props.value}`} style={props.style} onClick={props.pickRandomCard}>
            <span className={`value ${props.value}`}>{props.value}</span>
            <span className={`suit ${props.suit}`}>{props.suit_visual}</span>
        </div>
    )
}