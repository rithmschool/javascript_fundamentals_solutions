// The first one has been completed for you:

function difference(a,b){
  return a-b;
}

function product(a,b){
  return a*b;
}

function printDay(num){

  var dates = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  }
  return dates[num]
}

function lastElement(arr){
  // [1,2,3]
  return arr[arr.length-1]
}

function numberCompare(a,b){
  if(a === b){
    return 'Numbers are equal'
  } else if(a > b){
    return 'First is greater'
  }
  return 'Second is greater'
}


