const output = document.querySelector('.cards');

loadPictures();
//execute()

async function execute() {
    const deckOfCards = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json())
    console.log(deckOfCards);
    const drawCards = await fetch(`https://deckofcardsapi.com/api/deck/${deckOfCards.deck_id}/draw/?count=52`).then(response => response.json())
    console.log(drawCards);
    const cards = drawCards.cards;
    cards.sort((a, b) => {
        let localA = a.value;
        let localB = b.value;
        localA = addColor(a, getNumericValue(localA));
        localB = addColor(b, getNumericValue(localB));
        return localA - localB;
    })
    cards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.images.png;
        output.appendChild(cardElement);
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
    const pictures = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json());
    console.log(pictures);
    const drawCards = await fetch(`https://deckofcardsapi.com/api/deck/${pictures.deck_id}/draw/?count=52`).then(response => response.json());
    console.log(drawCards);
    const cards = drawCards.cards;
    cards.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card.images.svg;
        div.appendChild(cardElement);
    });

}