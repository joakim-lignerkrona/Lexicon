import { PlayArea } from "./Playarea";
import { Deck } from "./Deck";
import { Stack } from "./Stack";
export class Game {
    constructor(playAreaElement, deckElement, stackElement) {
        this.playArea = new PlayArea(playAreaElement);
        this.deck = new Deck(deckElement);
        this.stack = new Stack(stackElement);
    }

    flipStack() {
        this.deck.refillCards(this.stack.removeStack());
    }

}