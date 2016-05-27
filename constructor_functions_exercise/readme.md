# Constructors Exercise

1. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

2. Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

3. Create a constructor function for a Vehicle. Each vehicle should have a make, model and year. 

4. Refactor the following code so that there is no duplication inside the `Child` function.

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
