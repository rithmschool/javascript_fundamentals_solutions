## ES2015 Exercise

Convert the following es5 code into es2015 code:

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
