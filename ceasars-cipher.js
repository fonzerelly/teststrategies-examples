class CeasarsCipher {
    // _alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', M];
    static encode(shift, text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) + shift);
        }
        return result;
    }
}
module.exports = CeasarsCipher