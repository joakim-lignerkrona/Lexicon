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
    addPile(pile) {
        this.buildPiles.piles.push(pile);
    }
    getPile(index) {
        return this.buildPiles.piles[index];
    }
}