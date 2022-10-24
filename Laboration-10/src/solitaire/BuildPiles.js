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


        this.buildPiles[0].element.appendChild(card[0].element);
    }

    validateCard(card) {

        console.log(card);
        if (card[0].card.value === 'ACE') {
            this.#addToFirstEmpty(card);
            return 0
        } else {
            return -1
        }

    }
    #addToFirstEmpty(card) {
        let emptyBuildPile = this.buildPiles.find(pile => pile.pile.length === 0)
        emptyBuildPile.pile.push(card);
    }
    getPile(index) {
        return this.buildPiles.piles[index];
    }
}