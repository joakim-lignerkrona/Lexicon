import { PlayArea } from "./Playarea";
import { Deck } from "./Deck";
import { Stack } from "./Stack";
import { BuildPiles } from "./BuildPiles";
export class Game {
    constructor(playAreaElement, deckElement, stackElement, buildPilesElement) {
        this.playArea = new PlayArea(playAreaElement);
        this.deck = new Deck(deckElement);
        this.stack = new Stack(stackElement);
        this.buildPiles = new BuildPiles(buildPilesElement);
        this.init();
    }

    init() {
        this.deck.drawQue.element.addEventListener('click', () => {
            this.stack.addCards(this.deck.getCards(3));
        })
    }

    flipStack() {
        this.deck.refillCards(this.stack.removeStack());
    }

}