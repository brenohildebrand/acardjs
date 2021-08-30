/*
    Decks

    ***description
*/

class Deck {
    private name: string
    private description: string
    private cards: {[key: string]: AcardEffectCard}

    constructor(name: string, description?: string) {
        this.name = name
        this.description = description || ''
        this.cards = {}
    }

    addCard(card: AcardEffectCard) {
        this.cards[card.name] = card
    }

    setName(name: string) {
        this.name = name
    }

    setDescription(description: string) {
        this.description = description
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getCard(name: string) {
        return this.cards[name]
    }

}

export default Deck