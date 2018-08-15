const CeasarsCipher = require('./ceasars-cipher.js');
const jsc = require('jsverify')

fdescribe('ceasars-cipher', () => {
    describe('encode', () => {
        [
            {shift: 1, text: 'ABC', output: 'BCD'},
            {shift: 1, text: 'HELLOWORLD', output: 'IFMMPXPSME'},
            {shift: 2, text: 'ABC', output: 'CDE'},
            {shift: 1, text: 'XYZ', output: 'YZA'},
            {shift: 1, text: 'HELLO WORLD', output: 'IFMMP XPSME'},

        ].forEach((setup) => {
            it(`should encode '${setup.text}' to '${setup.output}'`, () => {
                expect(CeasarsCipher.encode(setup.shift, setup.text)).toBe(setup.output)
            })
        })

        it('should throw on unsupported characters', () => {
            expect(() => { CeasarsCipher.encode(1, 'abc is unsupported')}).toThrow();
        })

        xit('should throw on invalid blank character', () => {
            expect(() => { CeasarsCipher.encode(0, '\u0000')}).toThrow()
        })
    })

    describe('decode', () => {
        it('should decode ciphered text to clear text', () => {
            expect(CeasarsCipher.decode(1, 'IFMMP XPSME')).toBe('HELLO WORLD')
        })

        xit('should decode empty string', () => {
            expect(CeasarsCipher.decode(0, '\u0000')).toBe('')
        })
    })

    /*
    * The Property based Test showed, that there is a fundamental issue with encode/decode.
    * They value range is heavily restricted to A-Z and it would simply fail for any other character
    * So if we could assure, that encode only works on ValueObjects, that fullfill the restriction,
    * we could accept a property based test, that only tests for this small value space.
    */
    describe('invariant', () => {
        xit('should hold true for every input combination', () => {
            const propertyHolds = jsc.checkForall(jsc.integer, jsc.string, (shift, text) => {
              return text === CeasarsCipher.decode(shift, CeasarsCipher.encode(shift, text))
            })
            expect(propertyHolds).toBe(true)
        })
    })
})