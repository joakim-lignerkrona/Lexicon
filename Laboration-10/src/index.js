import "./css/style.css";
import { Game } from "./solitaire/Game";



const game = new Game(document.querySelector('.play-area'), document.querySelector('.deck'), document.querySelector('.stack'));
const intervall = setInterval(() => {
    if (game.deck.hasCards) {
        clearInterval(intervall);
        game.playArea.setTable(game.deck.getCards(28))
        console.log(game.playArea.table);
    }
}, 1000);


/* 
const deck = {
    element: null,
    cards: []
};
const stack = {
    element: null,
    cards: []
};
deck.element = document.querySelector('button');
stack.element = document.querySelector('.stack');
console.log(stack);


getCards()
    .then(loadPictures)
    .then(() => {
        deck.element.addEventListener('click', () => {
            console.log('card clicked');
            drawCards()
        })
    });

async function getCards() {
    const deckOfCards = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json())
    console.log(deckOfCards);
    const drawCards = await fetch(`https://deckofcardsapi.com/api/deck/${deckOfCards.deck_id}/draw/?count=52`).then(response => response.json())
    console.log(drawCards);
    const cards = drawCards.cards;
    cards.forEach(card => {
        deck.cards.push(card);
    });
}

async function drawCards() {
    stack.element.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const card = deck.cards.shift();
        if (card !== undefined) {
            stack.cards.push(card);
        }

    }
    for (let i = 0; i < 3; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = stack.cards[stack.cards.length - i - 1].images.png;
        imageElement.classList.add('card');
        stack.element.appendChild(imageElement);
    }
}


async function execute() {
    const stack = document.querySelector('.stack');
    cards.forEach((card, index) => {
        const cardElement = document.createElement('img');
        cardElement.src = card.images.png;
        cardElement.classList.add('from-deck');
        cardElement.classList.add('card');
        stack.appendChild(cardElement);
    });

    function getNumericValue(value) {
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

    function addColor(card, value) {
        switch (card.suit) {
            case 'HEARTS':
                return value + 100;
            case 'DIAMONDS':
                return value + 200;
            case 'CLUBS':
                return value + 300;
            case 'SPADES':
                return value + 400;
            default:
                break;
        }
    }

}

async function loadPictures() {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.style.overflow = 'hidden';
    div.style.height = '0px';
    body.appendChild(div);
    deck.cards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.images.svg;
        div.appendChild(cardElement);
    });

} */