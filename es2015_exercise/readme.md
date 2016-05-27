## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}
```

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
```

```javascript
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
```

```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;
```

```javascript
function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
}
```

```javascript
function Person(firstName, lastName, favoriteColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

Person.isPerson = function(person){
    return person.constructor === Person;
}
```

Research the following functions - what do they do?

`Array.from` -

`Object.assign` -

`Array.includes` -

`String.startsWith` -
