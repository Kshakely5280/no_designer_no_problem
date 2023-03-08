const makeSVG = require("./makeSVG");
// testing suite

describe ('makeSVG', () => {
    test('this should show a black circle with yellow text', () => {
        const svg  = makeSVG('FUB', 'circle', 'black', '#FFFF00')
        expect(svg).toMatch(/^<svg.*<\/svg>$/s)
    })
})

