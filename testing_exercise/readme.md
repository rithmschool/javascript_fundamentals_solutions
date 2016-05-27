## JavaScript Testing Exercise

For this exercise you will be writing tests to make functions pass. Start by writing the tests - seeing them fail and then writing the code necessary to make the tests pass. Follow this process:

- Red -> write test code that fails
- Green -> make the tests pass
- Refactor -> refactor when/if necessary

### Getting started

You should not need to modify anything in the `index.html` file - we have already included mocha and chai for you. Write tests **first** for the following functions, and then write the code to make them pass

- Write a function called `replaceWith` that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case **sensitive**

```javascript
replaceWith("awesome", "a", "z") // "zwesomz"
replaceWith("Foo", "F", "B") // "Boo"
```

- Write a function called `expand` which takes an array and a number and returns a copy of the array with as many numbers as specified

```javascript
expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
expand(["foo", "test"],1) //["foo","test"]
```

- Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns `true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!

```javascript
acceptNumbersOnly(1,"foo") // false
acceptNumbersOnly(1,2,3,4,5,6,7) // true
acceptNumbersOnly(1,2,3,4,5,6,NaN) // false
```

- Write a function called `mergeArrays` which takes in two arrays and returns one array with the values sorted

```javascript
mergeArrays([2,1],[3,4]) // [1,2,3,4]
```

- Write a function called `mergeObjects` which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called `Object.assign` - research it, but do not use it, try to do this on your own!

```javascript
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}
mergeObjects(obj1, obj2) 
/*/
{
    name: "Foo",
    test: "thing",
    num: 55
}
/*/
```



