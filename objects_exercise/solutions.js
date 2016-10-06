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