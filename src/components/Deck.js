import React from "react";
import { CARD_HEIGHT, CARD_WIDTH, LEFT_SHIFT } from "../utils/constants.js";
import "../index.css";


class Deck extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            cards : props.cards,
            style : {
                width: String(CARD_WIDTH + props.cards.length * LEFT_SHIFT) + "px",
                height: String(CARD_HEIGHT) + "px",
            }
        }
        console.log("deck")
        console.log(this.state)
    }
    
    get length() {
        return this.state.cards.length
    }
    
    shuffle() {
        let cards = this.state.cards
        for (var i = cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
        this.setState(() => ({
            cards : cards
        }))
        return this
    }
    
    pickCard() {
        let picked = this.state.cards.pop()
        this.setState(() => ({
            cards : this.state.cards,
            style : {
                width : String(CARD_WIDTH + this.state.cards.length * LEFT_SHIFT) + "px",
                height: String(CARD_HEIGHT) + "px"
            }
        }))
        return picked
    }
    
    getCardsWithStyle = () => {
        console.log("cards")
        console.log(this.state.cards)
        return this.state.cards.map((card, index) => (
            <div style={{left: String(index * LEFT_SHIFT) + "px"}}>
                {card}
            </div>
        ))
    }
    
    render() { 
        console.log("plorp")
        return (
            <div id="deck" style={this.style}>
                {this.getCardsWithStyle()}
            </div>
        );
    }
}
 
export default Deck;
