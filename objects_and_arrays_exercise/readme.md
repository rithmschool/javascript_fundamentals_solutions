# Objects and Arrays Exercise

For each of the exercises below, assume you are starting with the following `people` array.

```javascript
var people = ["Greg", "Mary", "Devon", "James"]
```

1. using a loop, iterate through this array and console.log all of the people
2. write the command to remove "Greg" from the array
3. write the command to remove "James" from the array
4. write the command to add "Matt" to the front of the array
5. write the command to add your name to the end of the array
6. using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop
7. write the command to make a copy of the array using `slice`. The copy should **NOT** include "Mary"
8. Write the command that gives the indexOf where "Mary" is located
8. Write the command that gives the indexOf where "Foo" is located (this should return `-1`)
9. Redefine the people variable with the value you started with. Using the `splice` command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done `["Greg", "Mary", "Elizabeth", "Artie", "James"]`
10. Create a new variable called `withBob` and set it equal to the `people` array concatenated with the string of `"Bob"`

For each of the exercises below, assume you are starting with the following `programming` object.

```javascript
var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
```

1. Write the command to add the language "Go" to the end of the languages array
2. Change the difficulty to the value of `7`.
2. Using the `delete` keyword, write the command to remove the jokes key from the programming object
3. Write the command to add a new key called `isFun` and a value of `true` to the programming object.
4. Using a loop, iterate through the languages array and console.log all of the languages
5. Using a loop, console.log all of the keys in the programming object
5. Using a loop, console.log all of the values in the programming object
