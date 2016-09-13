# Iterators Exercise

## Part I 

To run the tests, open the `index.html` file. There are not tests for the first couple functions since `forEach` is not easily testable. Use the following object for this set of questions:

```javascript
var users = [
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
},
{
    username: "jane",
    email: "jane@test.com",
    years_experience: 33.9,
    favorite_languages: ["Haskell", "Scala", "PHP"],
    favorite_editor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: {
        city: "New York",
        state: "NY"
    }
},
{
    username: "sam",
    email: "sam@test.com",
    years_experience: 8.2,
    favorite_languages: ["JavaScript","Ruby", "Python", "Go"],
    favorite_editor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: {
        city: "Fargo",
        state: "SD"
    }
},
{
    username: "anne",
    email: "anne@test.com",
    years_experience: 4,
    favorite_languages: ["C#", "C++", "F#"],
    favorite_editor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: {
        city: "Albany",
        state: "NY"
    }
},
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "Sublime Text",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
]
```

- Write a function called `printEmails` which console.log's each emails for the users.

```javascript
printEmails()
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com
```

- Write a function called `printHobbies` which console.log's each hobby for each user.

```javascript
printHobbies()
// "Fishing", 
// "Sailing", 
// "Hiking",
// "Swimming", 
// "Biking", 
// "Hiking",
// "Golf", 
// "Cooking", 
// "Archery",
// "Tennis", 
// "Biking", 
// "Archery",
// "Volunteering", 
// "Biking", 
// "Coding",
```

- Write a function called `findHometownByState` which returns the first user which has a hometown of the state that is passed in

```javascript
findHometownByState("CA")
/*/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/
```

- Write a function called `formatYears` which returns an array of objects with the username as the key and the years experience in days (as floats).

```javascript
formatYears() 
/*/
[
    { larry: 8806.5},
    { jane: 12373.5},
    { sam: 2993},
    { anne: 1460},
    { david: 4562.5}
]
/*/
```

- Write a function called `allLanguages` which returns an array of all of the **unique** values 

```javascript
allLanguages()
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]
```

- Write a function called `hasFavoriteEditor` which returns a boolean if any of the users have the editor passed in

```javascript
hasFavoriteEditor("Sublime Text") // true
hasFavoriteEditor("Eclipse") // false
```

- Write a function called `findByUsername` which takes in a string and returns an object in the `users` array that has that username

```javascript
findByUsername("david") 
/*/
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "Sublime Text",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
/*/
```

## Part II

- Write a function called `vowelCount` that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter)

```javascript
vowelCount("incredible")
// {i:2, e: 2}
vowelCount("awesome")
// {a:1, e:2, o:1}
```

- Write a function called `removeVowels` that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function)

```javascript
removeVowels("amazing") // ["m","z","n","g"]
removeVowels("fun") // ["f","n"]
removeVowels("silly") // ["s","l","l","y"]
```


