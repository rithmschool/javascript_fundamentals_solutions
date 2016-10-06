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

