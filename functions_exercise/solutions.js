function difference(a,b){
  return a-b;
}

function product(a,b){
  return a*b;
}

function printDay(num){

  const DAYS_OF_WEEK = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return DAYS_OF_WEEK[num];
}

function lastElement(arr){
  return arr[arr.length-1];
}

function numberCompare(a,b){
  if(a === b){
    return 'Numbers are equal';
  } else if(a > b){
    return 'First is greater';
  }
  return 'Second is greater';
}

function singleLetterCount(str1, letter){
  let finalCount = 0;
  for(let i=0; i< str1.length; i++){
    if(str1[i].toLowerCase() === letter.toLowerCase()){
      finalCount++;
    }
  }
  return finalCount;
}

function multipleLetterCount(str){
  let finalObj = {};
  for(let i =0; i< str.length; i++){
    if (!(str[i] in finalObj)){
      finalObj[str[i]] = 1;
    } else {
      finalObj[str[i]]++;
    }
  }
  return finalObj;
}

function arrayManipulation(arr, command, position, val){
  if(command === 'remove'){
    if(position === 'end'){
      return arr.pop();
    }
      return arr.shift();
  }
  else if(command === 'add'){
    if(position === 'end'){
      arr.push(val)
      return arr;
    }
    arr.unshift(val)
    return arr;
  }
}

function isPalindrome(str){
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

  // for(let i =0; i < str.length/2; i++){
  //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
  //     return false;
  //   }
  // }
  // return true;
}

function RPS(){

  function determineComputer(num){
    if(num <= .33) return "rock";
    else if(num <= .66) return "paper";
    return "scissor";
  }

  let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
  let computerChoice = determineComputer(Math.random());


  let answers = ["rock", "paper", "scissor"];

  if(!userChoice || answers.indexOf(userChoice) === -1){
    return "Please select a valid option";
  }

  if(userChoice === computerChoice) return "Tie!";

  if(userChoice === "rock" && computerChoice === "paper") return "You lose, computer picked " +  computerChoice;
  if(userChoice === "paper" && computerChoice === "scissor") return "You lose, computer picked " +  computerChoice;
  if(userChoice === "scissor" && computerChoice === "rock") return "You lose, computer picked " +  computerChoice;

  return "You win! Computer picked " +  computerChoice;
}

