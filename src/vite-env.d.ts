/// <reference types="vite/client" />

type AcardEffectCard = {
    name: string,
    description?: string,
    effect: Function,
}

type AcardEffect = {
    card: AcardEffectCard,
    target?: HTMLElement | undefined,
}