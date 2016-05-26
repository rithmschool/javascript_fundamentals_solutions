var expect = chai.expect

// PART ONE

describe("#formatYears", function(){
  it("returns an array of objects with keys as the username and values as the years_experience*365", function(){
    expect(formatYears()).to.deep.equal([
      { larry: 8806.5},
      { jane: 12373.5},
      { sam: 2993},
      { anne: 1460},
      { david: 4562.5}
    ])
  });
});

describe("#allLanguages", function(){
  it("returns an array of all the unique programming languages", function(){
    expect(allLanguages()).to.deep.equal(["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"])
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
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "Sublime Text",
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