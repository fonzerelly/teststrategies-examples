function range(start, end) {
    var ans = [];
    for (let i = start; i < end; i++) {
        ans.push(i);
    }
    return ans;
}

function serialize(n) {
    const base = range(0, n);
    return base.map((_) => {
        return 'I'
    }).join('')
}

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

module.exports = {
    fromArabicNumber: (n) => {
        let result = moduloTen(n);
        if (result[0]) {
            return result[0] + serialize(result[1])
        }
        result = moduloFive(n)
        return result[0] + serialize(result[1])
    }
}