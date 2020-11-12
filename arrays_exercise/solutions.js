let people = ["Greg", "Mary", "Devon", "James"];

// 1
for(let i =0; i< people.length; i++){
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

for(let i =0; i< people.length; i++){
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

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");

// 11

let withBob = people.concat("Bob");

