const esrever = require('./index');
const chai = require('chai');
const { expect } = chai;

describe( "tests", function() {
    const { assert } = require('chai');

    it( "sample tests", function() {
      assert.strictEqual(esrever('an Easy one?'), 'eno ysaE na?')
      assert.strictEqual(esrever('a small lOan OF 1,000,000 $!'), '$ 000,000,1 FO naOl llams a!')
      assert.strictEqual(esrever('<?> &!.".'), '".!& >?<.')
      assert.strictEqual(esrever('b3tTer p4ss thIS 0ne.'), 'en0 SIht ss4p reTt3b.')
      assert.strictEqual(esrever(''), '', "Empty string!" )
    });
});