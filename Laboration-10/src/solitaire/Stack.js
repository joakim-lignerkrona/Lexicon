

export class Stack {
    cardStack = { element: null, cards: [] };
    constructor(element) {
        this.cardStack.element = element;
    }

    addCards(cards) {
        console.log('Got cards', cards);

        cards.forEach(card => {
            this.cardStack.cards.push(card);
            this.cardStack.element.appendChild(card.element.firstChild);
            card.flip()
        });
    }


    removeStack() {
        const cards = [...this.cardStack.cards];
        this.cardStack.cards = [];
        return cards;
    }

}