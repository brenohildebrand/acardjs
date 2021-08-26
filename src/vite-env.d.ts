/// <reference types="vite/client" />

type AnimationCard = {
    name: string
    duration: number
    animate: Function
}

type Animation = {
    name: string,
    description: string,
    run: (this: AnimatedElement) => void
}

type Animations = { [key: string]: Animation }