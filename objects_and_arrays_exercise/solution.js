var people = ["Greg", "Mary", "Devon", "James"];

// 1
for(var i =0; i< people.length; i++){
    console.log(people[i]);
}

// 2

people.shift();

// 3

people.pop();

// 4

people.unshift("Matt");

// 5

people.push("Elie");

// 6

for(var i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

// 7

people.slice(2);

// 8

people.indexOf("Mary");

// 9

people.indexOf("Foo");


// 10

var people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");

// 11

var withBob = people.concat("Bob");


// PART 2

var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

// 1

programming.languages.push("Go");

// 2

programming.difficulty = 7;

// 3

delete programming.jokes;

// 4

programming.isFun = true;

// 5

for (var i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

// 6

for (var key in programming){
    console.log(key);
}

// 7

for (var key in programming){
    console.log(programming[key]);
}