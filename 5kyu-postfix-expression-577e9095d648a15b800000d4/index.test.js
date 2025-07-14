const postfixEvaluator = require('./index');
const Test = require('@codewars/test-compat');
const chai = require('chai');
const { expect } = chai;

describe('sample tests', function(){

  const { assert } = require('chai');

  function doTest(input, expected) {
      const message = `input= ${JSON.stringify(input)}\n`;
      const actual = postfixEvaluator(input);
      assert.strictEqual(actual, expected, message);
  }

  it('simple addition:', function(){
      doTest("2 3 +", 5);
  });

  it('addition with negative numbers:', function(){
      doTest("2 -3 +", -1);
  });

  it('constant numbers:', function(){
      doTest("1", 1);
      doTest("-1", -1);
  });

  it('complex expressions:', function(){
      doTest("2 3 9 4 / + *", 10);
      doTest("3 4 9 / *", 0);
      doTest("4 8 + 6 5 - * 3 2 - 2 2 + * /", 3);
  });
});