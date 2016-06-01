var expect = chai.expect
var person;

beforeEach(function(){
  person = new Person("Elie", "Schoppik", "purple", 34)
})

describe("Person", function(){
  it("has a firstName", function(){
    expect(person.hasOwnProperty(firstName)).to.equal(true);
  });
  it("has a lastName", function(){
    expect(person.hasOwnProperty(lastName)).to.equal(true);
  });
  it("has a favoriteColor", function(){
    expect(person.hasOwnProperty(favoriteColor)).to.equal(true);
  });
  it("has a favoriteNumber", function(){
    expect(person.hasOwnProperty(favoriteNumber)).to.equal(true);
  });
});

describe("#multiplyFavoriteNumber", function(){
  it("takes in a number and returns the product of the number and the Person's favorite number", function(){
    expect(person.multiplyFavoriteNumber(10)).to.equal(340)
  });
});
