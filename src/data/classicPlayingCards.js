let deck = []
let suits = ["hearts", "diamonds", "clubs", "spades"]
let values = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"]
for (const suit of suits) {
    for (let i = 0; i < values.length; ++i) {
        deck.push({
            "suit": suit,
            "value": values[i],
            "weight": i
        })
    }
}
export default deck