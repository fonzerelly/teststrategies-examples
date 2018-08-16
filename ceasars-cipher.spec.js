const CeasarsCipher = require('./ceasars-cipher.js');
const jsc = require('jsverify')

fdescribe('ceasars-cipher', () => {
    describe('createMessage', () => {
        it('should return structure of a message', () => {
            expect(CeasarsCipher.createMessage('ABC').text).toBe('ABC')
        });

        it('should throw on invalid characters', () => {
            expect(() => { CeasarsCipher.createMessage('abc') }).toThrow()
        })

        it('should accept space', () => {
            expect(() => { CeasarsCipher.createMessage(' ') }).not.toThrow()
        })
    })

    describe('encode', () => {
        [
            {shift: 1, text: 'ABC', output: 'BCD'},
            {shift: 1, text: 'HELLOWORLD', output: 'IFMMPXPSME'},
            {shift: 2, text: 'ABC', output: 'CDE'},
            {shift: 1, text: 'XYZ', output: 'YZA'},
            {shift: 1, text: 'HELLO WORLD', output: 'IFMMP XPSME'},

        ].forEach((setup) => {
            it(`should encode '${setup.text}' to '${setup.output}'`, () => {
                expect(CeasarsCipher.encode(setup.shift, CeasarsCipher.createMessage(setup.text)).text).toBe(setup.output)
            })
        })

        it('should throw on non Message objects', () => {
            expect(() => { CeasarsCipher.encode(1, { text :'abc is unsupported' })}).toThrow();
        })

        it('should throw on negative shifts', () => {
            expect(() => {
                CeasarsCipher.encode(
                    -1,
                    CeasarsCipher.createMessage('ABC')
                )
            }).toThrow();
        })

        it('should throw on shifts greater than 26', () => {
            expect(() => {
                CeasarsCipher.encode(
                    27,
                    CeasarsCipher.createMessage('ABC')
                )
            }).toThrow();
        })
    })

    describe('decode', () => {
        it('should decode ciphered text to clear text', () => {
            expect(CeasarsCipher.decode(1, CeasarsCipher.createMessage('IFMMP XPSME')).text).toBe('HELLO WORLD')
        })
    })

    describe('invariant', () => {
        it('should hold true for every input combination', () => {
            const propertyHolds = jsc.checkForall(
                jsc.nat(26),
                jsc.suchthat(
                    jsc.string,
                    (str) => {
                        // assures that only capital letters get used
                        return str.match(/^[A-Z]*$/) !== null
                    }
                ),
                (shift, text) => {
                    const msg = CeasarsCipher.createMessage(text)
                    const encoded = CeasarsCipher.encode(shift, msg)
                    const decoded = CeasarsCipher.decode(shift, encoded)

                    return text === decoded.text
                }
            )
            expect(propertyHolds).toBe(true)
        })
    })
})