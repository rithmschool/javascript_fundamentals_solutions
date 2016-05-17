## Nested Objects and Arrays Exercise

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

1. console.log all of the numbers in the `primeNumbers` array
2. console.log all of the even fibonnaci numbers
3. console.log the value "second" inside the order array
4. invoke the `addSnack` function and add snack of "chocolate"
5. What does the word `this` refer to inside the `addSnack` function?

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

1. Write a function to add a speaker (must be )
1. Write a function `addLanguage` 
1. Write a function `addCountry` 