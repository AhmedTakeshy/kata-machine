export default function two_crystal_balls(breaks: boolean[]): number {
    let jump = Math.floor(Math.sqrt(breaks.length))
    let floors = breaks.length
    let i = jump
    while (i < floors && !breaks[i]) {
        i += jump
    }
    i -= jump
    for (let n = i; n <= i + jump; n++) {
        if (breaks[n]) {
            return n
        }
    }
    return -1
}