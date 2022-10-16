
export class Deck {
    drawQue = { element: null, cards: [] };
    hasCards = false
    constructor(element) {
        this.drawQue.element = element;
        this.#fetchCards()
            .then(this.hasCards = true)
            .catch(error => {
                throw error
            });
    }

    refillCards(cards) {
        cards.forEach(card => {
            this.drawQue.cards.push(card);
        });
    }

    /**
     * 
     * @param {number} amount The amount of cards to draw
     * @returns cards
     */
    getCards(amount = 1) {
        return this.drawQue.cards.splice(0, amount);
    }

    async #fetchCards() {
        const deckOfCards = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json())
        console.log(deckOfCards);
        const drawCards = await fetch(`https://deckofcardsapi.com/api/deck/${deckOfCards.deck_id}/draw/?count=52`).then(response => response.json())
        console.log(drawCards);
        const cards = drawCards.cards;
        cards.forEach(card => {
            this.drawQue.cards.push(card);
        });
    }
}