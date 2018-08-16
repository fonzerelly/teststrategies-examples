function createIndexForUnchangedChars (alphabet) {
    alphabet[-2] = ' '
    return alphabet
}

const _alphabet = createIndexForUnchangedChars(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])

class Message {
    constructor(text) {
        this.text = text
    }
}

function toAlphabetIndex (text) {
    return text.split('')
        .map((ch) => (ch === ' ') ? -2 : _alphabet.indexOf(ch) )
}

class CeasarsCipher {
    static createMessage(text) {
        const containsInvalidChars = toAlphabetIndex(text)
            .filter(index => index === -1).length > 0
        if (containsInvalidChars) {
            throw new Error(`Contains invallid characters: ${text}`)
        }
        return new Message(text)
    }

    static encode(shift, message) {
        if (shift < 0 || shift > 26) {
            throw new Error (`Only shifts between 0 and 26 are allowed: ${shift}`)
        }
        if (!(message instanceof Message)) {
            throw new TypeError(`"${message}" is no valid Message!`)
        }
        let key = createIndexForUnchangedChars(
            _alphabet
                .slice(shift)
                .concat(_alphabet.slice(0, shift))
        )

        return CeasarsCipher.createMessage(
            toAlphabetIndex(message.text).map((index) => {
                return key[index]
            }).join('')
        )
    }

    static decode(shift, text) {
        return CeasarsCipher.encode(_alphabet.length - shift ,text)
    }
}
module.exports = CeasarsCipher