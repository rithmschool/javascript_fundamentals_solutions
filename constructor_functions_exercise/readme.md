# Constructors Exercise

Answer the following questions and make the tests pass.

1. What is the purpose of a constructor function? 

2. What does the `new` keyword do?

3. What does the keyword `this` refer to inside of a constructor function? 

4. What is a `class`? What is an `instance`?

5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

7. Refactor the following code so that there is no duplication inside the `Child` function.

```javascript
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}
```
