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

- Write a function called `sum_even_arguments` which takes all of the arguments passed to a function and returns the sum of the even ones.

```javascript
sum_even_arguments(1,2,3,4) // 6
sum_even_arguments(1,2,6) // 8
sum_even_arguments(1,2) // 2
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

- List two examples of "array-like-objects" that we have seen.
    -   
    -   

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

Write a function called `guessingGame` which takes in one 

**SOMETHING LIKE THIS**

```javascript
function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    return function(guess){
        var option;
        guesses++
        if(guess === answer) option = "You got it!"
        if(guess > answer) option = "You're too high!"
        if(guess < answer) option = "You're too low!"
        if(guesses === amount && guess !== answer) return "No more guesses the answer was " + answer;
        return option;
    }
}
```
