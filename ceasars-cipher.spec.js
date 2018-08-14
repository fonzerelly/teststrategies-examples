const CeasarsCipher = require('./ceasars-cipher.js');
fdescribe('ceasars-cipher', () => {
    describe('encode', () => {
        [
            {shift: 1, text: 'ABC', output: 'BCD'},
            {shift: 1, text: 'HELLOWORLD', output: 'IFMMPXPSME'},
            {shift: 2, text: 'ABC', output: 'CDE'},
            {shift: 1, text: 'XYZ', output: 'YZA'},
            // {shift: 1, text: 'HELLO WORLD', output: 'IFMMP XPSME'},

        ].forEach((setup) => {
            it(`should encode '${setup.text}' to '${setup.output}'`, () => {
                expect(CeasarsCipher.encode(setup.shift, setup.text)).toBe(setup.output)
            })
        })
    })
})