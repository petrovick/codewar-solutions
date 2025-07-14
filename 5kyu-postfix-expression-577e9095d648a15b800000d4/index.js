const postfixEvaluator = (input) => {
    const values = input.split(' ');
    const stack = [];

    for (const value of values) {
        if (['*', '-', '/', '+'].includes(value)) {
            const num1 = stack.pop();
            const num2 = stack.pop();
            let result = 0;
            switch (value) {
                case '+':
                    result = Math.trunc(num2 + num1);
                    break;
                case '-':
                    result = Math.trunc(num2 - num1);
                    break;
                case '*':
                    result = Math.trunc(num2 * num1);
                    break;
                case '/':
                    result = Math.trunc(num2 / num1);
                    break;

            }
            stack.push(result);
            continue;
        }

        stack.push(Number(value));
    }

    return Math.trunc(stack[0]);
}
console.log(postfixEvaluator('-93 28 /'))
module.exports = postfixEvaluator;