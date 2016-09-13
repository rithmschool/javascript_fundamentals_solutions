// DO NOT DELETE THIS

var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]

function printEmails(){
  users.forEach(function(user){
    console.log(user.email)
  })
}

function printHobbies(){
  users.forEach(function(user){
    user.hobbies.forEach(function(hobby){
      console.log(hobby)
    })
  })
}

function findHomeTownByState(state){
  return users.find(function(user){
    return user.hometown.state === state
  })
}

function allLanguages(){
  return users.reduce(function(prev,cur){
    return prev.concat(cur.favoriteLanguages)
  }, [])
  .filter(function(language,index,arr){
    return arr.indexOf(language) === index
  })
}

function hasFavoriteEditor(editor){
  return users.reduce(function(prev, cur){
    if(cur.favoriteEditor === editor) return true
    return false
  }, false)
}

function findByUsername(username){
  return users.find(function(user){
    return user.username === username;
  })
}

// PART 2

function vowelCount(str){
  var vowels = ["a","e","i","o","u"]
  return str.split("").reduce(function(prev,cur){
    if(vowels.indexOf(cur.toLowerCase()) !== -1){
      if(prev[cur]) prev[cur]++
      else prev[cur] = 1
    }
    return prev;
  }, {})
}

function removeVowels(str){
  var vowels = ["a","e","i","o","u"]
  return str.split("").reduce(function(prev,cur){
    if(vowels.indexOf(cur.toLowerCase()) === -1){
      prev.push(cur)
    }
    return prev;
  }, [])
}