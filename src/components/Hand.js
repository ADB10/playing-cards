import React from 'react'

import { CARD_WIDTH, LEFT_SHIFT } from '../utils/constants.js';
import '../css/hand.css'

class Hand extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            cards : props.cards,
        }
    }
    
    computeRotateRatio = () => {
        let rotateRatio = 1
        switch(Math.ceil(this.state.cards.length / 2)){
            case 3:
                rotateRatio = 0.8
                break
            case 4:
                rotateRatio = 0.6
                break
            case 5:
                rotateRatio = 0.4
                break
            default:
                rotateRatio = 0.35
        }
        return rotateRatio
    }
    
    removeCard = (index) => {
        this.state.cards.splice(index, 1)
        this.setState(() => ({
            cards : this.state.cards,
        }))
    }
    
    addCard = (card) => {
        this.state.cards.push(card)
        this.setState(()=> ({
            cards : this.state.cards
        }))
    }
    
    getCardsWithStyle = () => {
        const nCards = this.state.cards.length
        const angleRange = Math.min(Math.floor(nCards/2) * 7 * 2, 70)
        const rotateRatio = this.computeRotateRatio()
        
        this.state.cards.forEach((card, index) => {
            let centralizedRotation = (index * angleRange / nCards) - angleRange / 2
            let cardStyle = {
                left: String(Math.floor(index * LEFT_SHIFT * rotateRatio)) + "px",
                rotate: `${centralizedRotation}deg`
            }
            
            return (
                <div style={cardStyle}>
                    {card}
                </div>
            )
        })
    }
    
    render() { 
        const nCards = this.state.cards.length
        
        let styleHand = {
            width: String(CARD_WIDTH + nCards * (LEFT_SHIFT)) + "px", // width de la hand
            // transform: `translate(${LEFT_SHIFT* nCards * CARD_WIDTH},0%)`
        }
        
        return ( 
            <div className="hand" style={styleHand}>
                {this.getCardsWithStyle()}
            </div>
         );
    }
}
 
export default Hand;
