import React from "react";
import "../css/card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.suit = props.suit;
    this.suitVisual = props.suitVisual;
    this.value = props.value;
    this.weight = props.weight;
    this.style = props.style;
    this.onClick = props.onClick;

    this.state = { face: true };
  }

  render() {
    return (
      <div
        className={`card ${this.suit} ${this.value}`}
        style={this.style}
        onClick={this.onClick}
      >
        <span className={`value ${this.value}`}>{this.value}</span>
        <span className={`suit ${this.suit}`}>{this.suitVisual}</span>
      </div>
    );
  }
}

export default Card;
