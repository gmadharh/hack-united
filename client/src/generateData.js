import randomColor from "randomcolor";

export function generateData(numOptions = 5) {
    const arr = []

    for (let num = 0; num < numOptions; num++) {
        arr.push({
            option: num.toString(),
            style: { backgroundColor: randomColor({
                hue: "rgb",
                luminosity: "light",
            }) },
        })
    }

    return arr
}