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

    constructor(element) {
        this.element = element;
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
}