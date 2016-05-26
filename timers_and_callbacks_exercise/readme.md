## Timers and Callbacks Exercise

- Write a function called `countdown` that accepts a number as a parameter and every 1000 milliseconds console.log's the value 

```javascript
countDown(4)
// 3
// 2
// 1
// "DONE!"
```

- Write a function called `randomGame` that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than `.75` - stop the timer and return the amount of times it took before we found a number greater than `.75`.

- Write a function called isEven which takes in a number and returns true if the number is odd and returns false if it is not

`isEven(2) => true`
`isEven(3) => false`

- Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

`isOdd(3) => true`
`isOdd(14) => false`

- Write a function called isPrime which takes in a number and returns true if the number is a prime number (can only be divided in whole by itself and 1) or returns false

`isPrime(8) => false`
`isPrime(17) => true`

- Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

`numberFact(59,isEven) => false`
`numberFact(59,isOdd) => true`
`numberFact(59,isPrime) => true`

- Write a function called `find`. It should take in an array and a callback and return the first value found in the array that matches the condition. 

`find([1,2,3], function(val){return val >= 2} => 2`
`find([1,2,3], function(val){return val === 4} => undefined`

- Write a function called `findIndex`. It should take in an array and a callback and return the index of first value found in the array that matches the condition. 

`find([1,2,3], function(val){return val >= 2} => 1`
`find([1,2,3], function(val){return val === 4} => undefined`

- Write a function called `specialMultiply` which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use **closure** and **arguments** to solve this.

```javascript
specialMultiply(3,4) // 12
specialMultiply(3)(4) // 12
specialMultiply(3) // returns a function 
```
