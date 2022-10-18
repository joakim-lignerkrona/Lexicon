export class Stack {
    cardStack = { element: null, cards: [] };
    constructor(element) {
        this.cardStack.element = element;
    }

    addCards(cards) {
        console.log('Got cards', cards);

        cards.forEach(card => {
            this.cardStack.cards.push(card);
            /* this.cardStack.element.appendChild(card.element.querySelector('img'));
            card.flip()
            console.log(card.element.querySelector('img')); */
        });
        this.cardStack.element.innerHTML = '';
        this.cardStack.element.appendChild(cards[cards.length - 3].element.querySelector('img'));
        this.cardStack.element.appendChild(cards[cards.length - 2].element.querySelector('img'));
        this.cardStack.element.appendChild(cards[cards.length - 1].element.querySelector('img'));

    }


    removeStack() {
        const cards = [...this.cardStack.cards];
        this.cardStack.cards = [];
        return cards;
    }

}