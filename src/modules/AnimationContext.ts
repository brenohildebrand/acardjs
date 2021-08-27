/*
    AnimationContext

    This file contains the AnimationContext class, which provides a context to 
    run and organize AnimationCards.
*/

class AnimationContext {
    animationQueue: AnimationCard[]
    previousAnimationDuration: number

    constructor() {
        this.animationQueue = []
        this.previousAnimationDuration = 0
    }

    start() {
        setTimeout(this.runAnimationQueue, 0)
    }

    private runAnimationQueue() {
        if(this.animationQueue.length > 0) {
            setTimeout(() => {
                this.runNextAnimationCard()
                this.runAnimationQueue()
            }, this.previousAnimationDuration)
        }
    }

    private runNextAnimationCard() {
        const nextAnimationCard = this.animationQueue.shift()
        
        if(nextAnimationCard === undefined) {
            throw new Error("AnimationCard is undefined!")
        }

        nextAnimationCard.run()
        this.previousAnimationDuration = nextAnimationCard?.duration
    }
}

export default AnimationContext