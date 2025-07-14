const hexToBase64 = require('./index');
const chai = require('chai');
const { expect } = chai;

describe('tests', function() {
    const chai = require('chai'), { assert } = chai;
    chai.config.truncateThreshold = 0;

    it('should handle example case', function() {
        assert.strictEqual(hexToBase64(
            '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'),
            'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t');
    });

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomHex = () => '0123456789abcdef'[random(0, 15)] + '0123456789abcdef'[random(0, 15)];
    const randomInput = () => Array.from(Array(random(1, 50)), x => randomHex()).join``;
    const solution = hex => Buffer.from(hex, 'hex').toString('base64');

    it('should handle random cases', function() {
        for (let i = 0; i < 99; i++) {
            const string = randomInput();
            assert.strictEqual(hexToBase64(string), solution(string));
        }
    });
});