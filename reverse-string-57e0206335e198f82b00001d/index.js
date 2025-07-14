const esrever = (str) => {
    if (str.length === 0) return '';
    let reversedString = str.split('').reverse().join('');
    const lastChar = str[str.length - 1];
    reversedString = reversedString.slice(1);
    return reversedString + lastChar;
}

module.exports = esrever;