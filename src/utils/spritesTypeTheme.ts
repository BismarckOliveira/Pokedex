import bug from '../assets/imgs/Bug.webp'
import dark from '../assets/imgs/Dark.webp'
import dragon from '../assets/imgs/Dragon.webp'
import electric from '../assets/imgs/ElectricI.webp'
import ghost from '../assets/imgs/ghostI.webp'
import grass from '../assets/imgs/grass.webp'
import ground from '../assets/imgs/ground.webp'
import flyingI from '../assets/imgs/FlyingI.webp'
import fire from '../assets/imgs/fireI.webp'
import fighting from '../assets/imgs/FightingI.webp'
import poison from '../assets/imgs/PoisonIC.webp'
import normal from '../assets/imgs/Normal.webp'
import Water from '../assets/imgs/Water.webp'
import Fairy from '../assets/imgs/FairyI.webp'
import Psychic from '../assets/imgs/PsychicI.webp'
import unknown from '../assets/imgs/Unknown.webp'
import rock from '../assets/imgs/Rock.webp'
import ice from '../assets/imgs/Ice.webp'

export function spritesTypesTheme(type: string) {
    if (type === 'normal') return normal

    if (type === 'poison') return poison

    if (type === 'bug') return bug

    if (type === 'flying') return flyingI

    if (type === 'water') return Water

    if (type === 'grass') return grass

    if (type === 'fire') return fire

    if (type === 'electric') return electric

    if (type === 'ground') return ground

    if (type === 'fairy') return Fairy

    if (type === 'dark') return dark

    if (type === 'fighting') return fighting

    if (type === 'psychic') return Psychic

    if (type === 'ghost') return ghost

    if (type === 'dragon') return dragon

    if (type === 'rock') return rock

    if (type === 'ice') return ice

    return unknown
}