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
  it("has a favoriteFoods", function(){
    expect(person.hasOwnProperty(favoriteNumber)).to.equal(true);
    expect(person.favoriteFoods).to.deep.equal([]);
  });
});

describe("#fullName", function(){
  it("returns the firstName concatenated with the lastName", function(){
    expect(person.fullName()).to.equal("Elie Schoppik")
  });
});

describe("family", function(){
  var p1 = new Person()
  var p2 = new Person()

  it("is initialized as an empty array on the Person.prototype", function(){
    expect(p1.family === p2.family).to.equal(true)
  });
});

describe("#addToFamily", function(){
  var p1 = new Person()
  var p2 = new Person()

  it("is shared amongst all objects created from the Person constructor", function(){
    p1.addToFamily(p1);
    expect(p2.family.length).to.equal(1)
  });
  it("adds a new person to the family array ONCE", function(){
    p1.addToFamily(p1);
    p1.addToFamily(p1);
    p1.addToFamily(p1);
    expect(person.family.length).to.equal(1)
  });
  it("only adds objects created from the Person constructor to the array", function(){
    p1.addToFamily(p1);
    p1.addToFamily("test");
    p1.addToFamily({});
    p1.addToFamily([]);
    p1.addToFamily(false);
    expect(person.family.length).to.equal(1)
  });
});

// PART II

describe("Array.prototype.map", function(){
  var arr = [1,2,3,4]
  it("returns a new array of values with a callback run on each value", function(){
    expect(arr.map(v => v*2)).to.deep.equal([2,4,6,8])
  });
  it("allows access to the index as a second parameter", function(){
    expect(arr.map((v,i) => i*2)).to.deep.equal([0,2,4,6])
  });
  it("allows access to the array as the third parameter", function(){
    expect(arr.map((v,i,a) => a.length)).to.deep.equal([4,4,4,4])
  });
});

describe("String.prototype.map", function(){
  it("returns a new reversed string", function(){
    expect("test".reverse()).to.equal("tset");
    expect("tacocat".reverse()).to.equal("tacocat");
  });
});

describe("Function.prototype.bind", function(){
  function add(a,b){
    return a+b
  }
  it("returns a function with the context set", function(){
    expect(add.bind(this)).to.be("function");
  });
  it("returns a function with the context set", function(){
    expect(add.bind(this,3)(4)).to.be(7);
    expect(add.bind(this)(3,4)).to.be(7);
  });
});