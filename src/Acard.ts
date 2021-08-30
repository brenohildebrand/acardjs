/*
    Acard

    ***description
*/

class Acard {
    
    constructor() {}

    play(effect: AcardEffect) {
        const { card, target } = effect
        card.effect.call(target)
    }

}

export default (new Acard())