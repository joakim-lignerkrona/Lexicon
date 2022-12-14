import { Card } from "./Card";

export class PlayArea {

    table = {
        rows: [
            { id: 1, cards: [], element: null },
            { id: 2, cards: [], element: null },
            { id: 3, cards: [], element: null },
            { id: 4, cards: [], element: null },
            { id: 5, cards: [], element: null },
            { id: 6, cards: [], element: null },
            { id: 7, cards: [], element: null }
        ],
    }
    element = null;
    selectedCard = null;

    constructor(element, buildPile) {
        this.element = element;
        this.buildPile = buildPile;
    }

    /**
     * 
     * @param {[*]} cards should be an array of 28 cards
     */
    setTable(cards) {
        console.log(cards);
        let rows = document.querySelectorAll('.row');
        rows.forEach((row, index) => {
            this.table.rows[index].element = row;
        })
        this.table.rows.forEach((row, index, array) => {
            for (let i = 0; i < row.id; i++) {
                const card = cards.shift();
                array[index].cards.push(card)
            }
            array[index].cards.forEach((card, index) => {
                row.element.appendChild(card.element);
                card.element.style.zIndex = index;
            })
            row.cards[row.cards.length - 1].flip();
            row.cards[row.cards.length - 1].makeDraggable()
            row.cards[row.cards.length - 1].onDbClick((e, card) => {
                console.log(e.target);
                console.log(card);
                this.moveToBuildPile(card);

            })

        })
    }



    getRowFromId(id) {
        return this.table.rows.find(row => row.id === id);
    }
    addCardToRow(card, rowId) {
        const row = this.getRowFromId(rowId);
        row.cards.push(card);
    }
    moveCardToRow(fromRowId, toRowId) {
        this.removeCardFromRow(card, fromRowId);
        this.addCardToRow(card, toRowId);
    }
    moveToBuildPile(card) {

        const row = this.table.rows.find(
            row => row.cards.find(
                rowCard => rowCard.card.code === card.card.code
            )
        )
        const indexInRow = row?.cards.lastIndexOf(card)
        console.log(row.id - 1, indexInRow);
        let movedCard = row.cards.splice(indexInRow, row.cards.length);
        console.log(movedCard[0].element.remove());
        this.buildPile.addPile(movedCard);



    }

}