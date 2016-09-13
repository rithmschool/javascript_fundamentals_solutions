var expect = chai.expect

describe("#allLanguages", function(){
  it("returns an array of all the unique programming languages", function(){
    expect(allLanguages()).to.deep.equal(["Perl", "Java", "C++", "Haskell", "Clojure", "PHP", "JavaScript", "Ruby", "Python", "Go", "C#", "F#", "Swift"])
  });
});

describe("#hasFavoriteEditor", function(){
  it("returns true if the editor exists", function(){
    expect(hasFavoriteEditor("Sublime Text")).to.equal(true)
  });
  it("returns true if the editor does not exist", function(){
    expect(hasFavoriteEditor("Eclipse")).to.equal(false)
  });
});

describe("#findByUsername", function(){
  it("finds a user by a username", function(){
    expect(findByUsername("david")).to.deep.equal({
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
})
  });
});

// PART TWO
describe("#vowelCount", function(){
  it("returns an object with the key as the vowel and value as the number of occurances in the word", function(){
    expect(vowelCount("incredible")).to.deep.equal({i:2, e: 2})
    expect(vowelCount("awesome")).to.deep.equal({a:1, e:2, o:1});
  });
  it("returns an empty object if there are no vowels", function(){
    expect(vowelCount("fmp")).to.deep.equal({});
  });
})

describe("#removeVowels", function(){
  it("returns an array with each character that is not a vowel", function(){
    expect(removeVowels("silly")).to.deep.equal(["s","l","l","y"])
  });
  it("returns an empty array if there are only vowels", function(){
    expect(removeVowels("aeiou")).to.deep.equal([])
  });
});