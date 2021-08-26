/*
    AnimationContext

    This file contains the AnimationContext class, which provides a context to 
    run and organize AnimationCards.
*/

class AnimationContext {
    animationQueue: AnimationCard[]
    previousDurationTime: 0

    constructor() {
        this.animationQueue = []
        this.previousDurationTime = 0
    }

    start() {
        setTimeout(function() {
            this.runAnimationQueue()
            console.log(this)
        }, 0)
    }

    runAnimationQueue() {

    }

    runNextAnimationCard() {

    }
}

export default AnimationContext