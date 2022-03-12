class ImcCalculator {
    constructor() {
    }
    getImc(weight, height) {
        const formatedHeight = height.replace(",",".")
        return (weight / (formatedHeight * formatedHeight)).toFixed(2)
    }
}

export default ImcCalculator