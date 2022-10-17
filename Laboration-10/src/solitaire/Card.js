export class Card {
    flipped = false;
    element = null;
    front = null
    back = null
    card = null
    constructor(card, flipped) {
        this.card = card;
        this.flipped = flipped ? true : false;
        console.log(card);


        const container = document.createElement('div');
        const imageElement = document.createElement('img');
        imageElement.src = card.images.png;
        imageElement.classList.add('card');
        this.element = container
        this.front = imageElement;
        this.back = document.createElement('img');
        this.back.classList.add('card');
        this.back.classList.add('card-back');
        this.element.appendChild(this.flipped ? this.front : this.back);
    }

    flip() {
        this.flipped = !this.flipped;
        if (this.flipped) {
            this.element.appendChild(this.front);
            this.back.remove();
        }
        else {
            this.element.appendChild(this.back);
            this.front.remove();
        }

    }

    getValue() {
        let value = this.card.value;
        if (value === 'JACK') {
            value = 11;
        } else if (value === 'QUEEN') {
            value = 12;
        } else if (value === 'KING') {
            value = 13;
        } else if (value === 'ACE') {
            value = 14;
        }
        value = parseInt(value);

        return value;
    }
    getColor() {
        switch (this.card.suit) {
            case 'HEARTS':
                return 'red';
            case 'DIAMONDS':
                return 'red';
            case 'CLUBS':
                return 'black';
            case 'SPADES':
                return 'black';
            default:
                break;
        }
    }
}