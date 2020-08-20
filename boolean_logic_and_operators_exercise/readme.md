## Part I 

Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

1. `2 == "2";` `true`
2. `2 === 2;` `true`
3. `10 % 3;` `1`
4. `10 % 3 === 1;` `true`
5. `true && false;` `false`
5. `false || true;` `true`
5. `true || false;` `true`

## Part II

Answer the following questions about this code block:

```js
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
```

1. What should the above code console.log? **The code should console.log "Keep it up!" because the value of the isLearning variable is truthy. That means the code inside of the if {} will be evaluated and not the else {}**
2. Why do we not need to specify `if(isLearning === true)`? Why does `if(isLearning)` work on its own? **Since true is a "truthy" value, we can let the if statement turn the expression into a value that is true or false. True will evaluate into a truthy value**

```js
let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
```

1. What should the above code console.log? **The code should console.log "Third" because the thirdVariable is truthy. Even though the firstVariable is falsey, the or statement is only looking for one truthy statement.**
2. What is the value of `firstVariable` when it is initialized? **The value of firstVariable is `undefined`. Variables that are not assigned to any value are assigned to the value `undefined`**
3. Is the value of firstVariable a "truthy" value? **No, `undefined` is a falsey value**
4. Is the value of secondVariable a "truthy" value? **No, empty strings are falsey values as well**
4. Is the value of thirdVariable a "truthy" value? **Yes, all numbers except for 0 are truthy**

## Part III

- Research `Math.random` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and write an if statement that console.log's "Over 0.5" if `Math.random` returns a number greater than 0.5. Otherwise console.log "Under 0.5".

```js
if(Math.random() > .5){
  console.log("Over 0.5");
} else {
  console.log("Under 0.5");
}
```

- What is a falsey value? List all the falsey values in JavaScript.

**A falsey value is a value that evaluates to false when inside of a conditional statement (if, else if, case). Inside of these conditional statements, the result will always be true or false regardless of what values are passed to the condition. The falsey values (values that will always be evaluated to false inside of a condition) in JavaScript are 0, "", false, null, undefined and NaN.**
