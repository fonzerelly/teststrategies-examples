const RomanNumbers = require('./roman-numbers.js');
fdescribe('RomanNumbers', () => {
    describe('fromArabicNumber', () => {
        [
            { arabic: 1, roman: 'I' },
            { arabic: 2, roman: 'II'},
            { arabic: 3, roman: 'III'},
            { arabic: 5, roman: 'V'},
            { arabic: 6, roman: 'VI'},
            { arabic: 7, roman: 'VII'},
            { arabic: 8, roman: 'VIII'},
            { arabic: 10, roman: 'X'},
            { arabic: 11, roman: 'XI'},
            { arabic: 12, roman: 'XII'},
            { arabic: 13, roman: 'XIII'},
            { arabic: 15, roman: 'XV'},
            { arabic: 16, roman: 'XVI'},
            { arabic: 17, roman: 'XVII'},
            { arabic: 18, roman: 'XVIII'},
            { arabic: 50, roman: 'L'},
            { arabic: 51, roman: 'LI'},
            { arabic: 60, roman: 'LX'},
            { arabic: 62, roman: 'LXII'}
        ].forEach((testSetup)=> {
            it(`should turn ${testSetup.arabic} to ${testSetup.roman}`, () => {
                console.log(RomanNumbers.fromArabicNumber(testSetup.arabic))
                expect(RomanNumbers.fromArabicNumber(testSetup.arabic))
                    .toBe(testSetup.roman);
            })
        })
    })
})