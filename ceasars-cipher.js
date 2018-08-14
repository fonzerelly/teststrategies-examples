const _alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class CeasarsCipher {
    static encode(shift, text) {
        let key = _alphabet.slice(shift).concat(_alphabet.slice(0, shift))
        let result = "";
        return text.split('').map((ch) => {
            if (ch === ' ') {
                return ' ';
            }
            return key[_alphabet.indexOf(ch)]
        }).join('')
    }
}
module.exports = CeasarsCipher