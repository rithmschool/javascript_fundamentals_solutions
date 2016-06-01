## Call Apply Bind Exercises

Fix the following code:

```javascript
var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}
```

- List two examples of "array-like-objects" that we have seen.
    -
    -

### Functions to write:

Make the tests pass for the following functions: 

- Write a function called `sumEvenArguments` which takes all of the arguments passed to a function and returns the sum of the even ones.

```javascript
sumEvenArguments(1,2,3,4) // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2
```

- Write a function called `arrayFrom` which converts an array-like-object into an array. 

```javascript
function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}
```

Write a function called `invokeMax` which accepts a function and a maximum amount. `invokeMax` should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

```javascript
function add(a,b){
    return a+b
}

var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"
```

Write a function called `guessingGame` which takes in one parameter `amount`. The function should return another function that takes in a parameter called `guess`. In the outer function, you should create a variable called `answer` which is the result of a random number between 0 and 10 as well as a variable called `guesses` which should be set to 0. 

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial `amount` passed to the outer function. 

You will have to make use of closure to solve this problem.

```javascript
var game = guessingGame(5)
game(1) // "You're too low!" 
game(8) // "You're too high!"
game(5) // "You're too low!"
game(7) // "You got it!" 
game(1) // "You are all done playing!" 

var game2 = guessingGame(3)
game2(5) // "You're too low!" 
game2(3) // "You're too low!"
game2(1) // "No more guesses the answer was 0" 
game2(1) // "You are all done playing!" 
```
