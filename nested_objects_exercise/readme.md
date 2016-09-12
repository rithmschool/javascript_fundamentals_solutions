## Nested Objects and Arrays Exercise

## Part I

Given the following nested object:

```javascript
var nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [1,3,5,7,9],
            fibonnaci: [1,1,2,3,5,8,13]
        },
        addSnack: function(snack){
            this.snacks.push(snack);
            return this;
        }
    }
}
```

- using a for loop, console.log all of the numbers in the `primeNumbers` array
- using a for loop, console.log all of the even fibonnaci numbers
- console.log the value "second" inside the order array
- invoke the `addSnack` function and add the snack "chocolate"
- Inside of the addSnack function there is a special keyword called `this`. What does the word `this` refer to inside the `addSnack` function?

Given the following nested object:

```javascript
var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}]
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        }
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}
```

- Write a function to add a speaker to the array of speakers in the nested
- The speaker you add must be an object.

- Write a function `addLanguage` that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

- Write a function `addCountry` that adds a country to the countries object. The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values

### Part II

- Write a function called rotate which takes an array and a number and moves each element however many spaces the number is to the right

```javascript
rotate([1,2,3], 1) // [1,2,3]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]
```

- Write a function called `makeXOGrid` which takes in two parameters, rows and amount and returns an array of arrays with the number of values in the array equal to the `amount` parameter and the number of subarrays equal to the `rows` parameter. The values in the sub-arrays should switch between `"X"` and `"O"`.

```javascript
makeGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeGrid(2,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/

```

**BONUS**

- Write a function called rotateClockwise that rotate a two dimensional array clockwise

```javascript
rotateClockwise([[1,2,3], [4,5,6], [7,8,9]],2) // [[8,9,1], [2,3,4], [5,6,7]]
```
