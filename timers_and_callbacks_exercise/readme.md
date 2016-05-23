## Timers and Callbacks Exercise

- Write a function called `countdown` that accepts a number as a parameter and every 1000 milliseconds console.log's the value 

```javascript
countDown(4)
// 3
// 2
// 1
// "DONE!"
```

- Write a function called `diffuse` that every second selects a random number between 0 and 1, and if the value is greater than .75

something like this....
```javascript
function diffuse(){
   var count = 0
   var t = setInterval(function(){
      console.log("We have " + (3-count) + " seconds left")
      if(Math.random() > .75){
         console.log("whew we're saved!")
         clearTimeout(t)
       }
      if(count === 3){
         console.log("BOOM!")
         clearTimeout(t)
      }
      count++
   },1000)
}
```

- Write a function called `find`. It should take in an array and a callback and return the first value found in the array that matches the condition. 

- Write a function called `findIndex`. It should take in an array and a callback and return the index of first value found in the array that matches the condition. 
