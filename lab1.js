/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.computeFibonacci = (req, res) => {

  let num = req.body.compute;
  let result;

  function fibonacciArray(num) {
    let i = 0;
    let fibonacciNumbers = [];

    while (fibonacci(i) <= num) {
      fibonacciNumbers.push(fibonacci(i));
      i++;
    } 

    return fibonacciNumbers;
  }

  function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }

  function isOdd(num) { 
    return num % 2;
  }

  function sumOdd(numArray) {
    let sum = 0;
    for (var i = 0; i < numArray.length; i++) {		
      if ( isOdd( numArray[i] ) ) {
        sum += numArray[i];
      }				
    }
    return sum;
  }

    
  if (Number.isInteger(num)) {
    let fibonacciNumbers = fibonacciArray(num);
    result = sumOdd(fibonacciNumbers);

  } else {
    result = 'value is not an integer';
  }

  res.status(200).send({ "result": result });
};
