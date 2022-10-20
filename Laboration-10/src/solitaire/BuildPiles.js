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
        this.buildPiles[0].pile.push(card);
        console.log(this.buildPiles.element);

        this.buildPiles[0].element.appendChild(card[0].element);
    }
    getPile(index) {
        return this.buildPiles.piles[index];
    }
}