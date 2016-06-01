var expect = chai.expect

describe("#isEven", function(){
  it("returns true if the value is even", function(){
    expect(isEven(4)).to.equal(true)
  });
  it("returns false if the value is not even", function(){
    expect(isEven(3)).to.equal(false)
  });
});

describe("#isOdd", function(){
  it("returns true if the value is odd", function(){
    expect(isOdd(3)).to.equal(true)
  });
  it("returns false if the value is not odd", function(){
    expect(isOdd(4)).to.equal(false)
  });
});

describe("#isPrime", function(){
  it("returns true if the value is a prime", function(){
    expect(isPrime(3)).to.equal(true)
  });
  it("returns false if the value is not prime", function(){
    expect(isPrime(1024)).to.equal(false)
  });
});

describe("#numberFact", function(){
  it("takes a value and a function and runs the function with that value", function(){
    expect(numberFact(59,isEven)).to.equal(false)
    expect(numberFact(59,isOdd)).to.equal(true)
    expect(numberFact(59,isPrime)).to.equal(false)
  });
});

describe("#find", function(){
  it("takes an array and a callback function and returns the value the first time the callback function is true", function(){
    expect(find([1,2,3,4], function(val){
      return val >= 3
    })).to.equal(3)
    expect(find([1,2,3,4], function(val){
      return val === 2
    })).to.equal(2)
  });
  it("takes an array and a callback function and returns undefined if the callback is false", function(){
    expect(find([1,2,3,4], function(val){
      return val === 10
    })).to.equal(undefined)
  });
});

describe("#findIndex", function(){
  it("takes an array and a callback function and returns the index of the value if it is found", function(){
    expect(findIndex([1,2,3,4], function(val){
      return val > 3
    })).to.equal(3)
    expect(findIndex([1,2,3,4], function(val){
      return val === 2
    })).to.equal(1)
  });
  it("takes an array and a callback function and returns undefined if the value is found", function(){
    expect(findIndex([1,2,3,4], function(val){
      return val > 4
    })).to.equal(undefined)
    expect(findIndex([1,2,3,4], function(val){
      return val === 21
    })).to.equal(undefined)
  });
});

describe("#specialMultiply", function(){
  it("returns the product of two numbers when passed two parameters", function(){
    expect(specialMultiply(3,4)).to.equal(12)
  });
  it("returns a function if passed 1 parameter", function(){
    expect(specialMultiply(3)).to.be.function
  });
  it("returns a function that can be called right away with another parameter to return the product", function(){
    expect(specialMultiply(3)(4)).to.equal(12)
  });
  it("returns a function that can be called at a later point in time", function(){
    var storedMultiply = specialMultiply(3)
    expect(storedMultiply(4)).to.equal(12)
  });
});