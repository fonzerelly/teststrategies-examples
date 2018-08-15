const _alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class CeasarsCipher {
    static encode(shift, text) {
        let key = _alphabet.slice(shift).concat(_alphabet.slice(0, shift))
        return text.split('').map((ch) => {
            const alphaIndex = _alphabet.indexOf(ch)

            if (ch === ' ') {
                return ' ';
            } else if (alphaIndex === -1) {
                throw new Error(`Invalid character passed: '${ch}'`)
            }
            return key[alphaIndex]
        }).join('')
    }

    static decode(shift, text) {
        return CeasarsCipher.encode(_alphabet.length - shift ,text)
    }
}
module.exports = CeasarsCipher