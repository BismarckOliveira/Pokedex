export function powerTheme(power: number) {
    if (power <= 45) return '#00FF00'

    if (power >= 100) return '#FF0000'

    return '#FFFF00'
}