export class Stack {
    cardStack = { element: null, cards: [] };
    constructor(element) {
        this.cardStack.element = element;
    }

    addCards(cards) {
        console.log('Got cards', cards);

        cards.forEach(card => {
            this.cardStack.cards.push(card);
            card.flip()
            /* this.cardStack.element.appendChild(card.element.querySelector('img'));
            
            console.log(card.element.querySelector('img')); */
        });
        this.cardStack.element.innerHTML = '';
        this.cardStack.element.appendChild(cards[cards.length - 3].element);
        this.cardStack.element.appendChild(cards[cards.length - 2].element);
        this.cardStack.element.appendChild(cards[cards.length - 1].element);

    }


    removeStack() {
        const cards = [...this.cardStack.cards];
        this.cardStack.cards = [];
        return cards;
    }

}