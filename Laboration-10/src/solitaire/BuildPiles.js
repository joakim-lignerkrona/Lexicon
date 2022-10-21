export class BuildPiles {
    buildPiles = [
        { pile: [], suit: null, element: null },
        { pile: [], suit: null, element: null },
        { pile: [], suit: null, element: null },
        { pile: [], suit: null, element: null }];
    constructor(element) {
        console.log(element);

        this.buildPiles.forEach((pile, index) => {
            pile.element = element.children[index];
        })
        console.log(this.buildPiles);
    }
    addPile(card) {
        this.validateCard(card);
        this.buildPiles[0].pile.push(card);
        console.log(this.buildPiles.element);

        this.buildPiles[0].element.appendChild(card[0].element);
    }

    validateCard(card) {
        if (this.buildPiles[0].pile.length === 0) {
            this.buildPiles[0].suit = card[0].suit;
        } else {
            if (this.buildPiles[0].suit !== card[0].suit) {
                throw new Error('Not the same suit');
            }
        }
    }
    getPile(index) {
        return this.buildPiles.piles[index];
    }
}