import randomColor from "randomcolor";

export function generateData(challenges) {
    const arr = []

    for (let i = 0; i < challenges.length; i++) {
        let challenge = challenges[i]
        arr.push({
            option: (i + 1).toString(),
            style: { backgroundColor: randomColor({
                hue: "rgb",
                luminosity: "light",
            }) },
            challenge
        })
    }

    return arr
}