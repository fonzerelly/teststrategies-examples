function range(start, end) {
    var ans = [];
    for (let i = start; i < end; i++) {
        ans.push(i);
    }
    return ans;
}

function createSerialize(representation) {
    return (n) => {
        const base = range(0, n);
        return base.map((_) => {
            return representation
        }).join('')
    }
}
const serializeOne = createSerialize('I')
const serializeTen = createSerialize('X')

function createModulo(devider, representation) {
    return (n) => {
        return [
            (n >= devider) ? representation : '',
            n % devider,
        ]
    }
}

const moduloFive = createModulo(5, 'V')
const moduloTen = createModulo(10, 'X')
const moduloFifty = createModulo(50, 'L')

module.exports = {
    fromArabicNumber: (n) => {
        let result = moduloFifty(n);
        if(result [0]) {
            const result10 = moduloTen(result[1])
            if(result10[0]) {
                const result5 = moduloTen(result[1])
                return result[0] + result5[0] + serializeOne(result5[1])    
            }
            return result[0] + serializeOne(result10[1]);
        }
        // usecase up to 18
        result = moduloTen(n);
        if (result[0]) {
            const result5 = moduloFive(result[1])
            return result[0] + result5[0] + serializeOne(result5[1])
        }
        // simple use case up to 8 
        result = moduloFive(n)
        return result[0] + serializeOne(result[1])
    }
}