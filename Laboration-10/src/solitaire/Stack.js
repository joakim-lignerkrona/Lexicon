

export class Stack {
    cardStack = { element: null, cards: [] };
    constructor(element) {
        this.cardStack.element = element;
    }

    addCards(cards) {
        cards.forEach(card => {
            this.cardStack.cards.push(card);
        });
    }

    removeStack() {
        const cards = [...this.cardStack.cards];
        this.cardStack.cards = [];
        return cards;
    }

}