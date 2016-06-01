var expect = chai.expect

describe("#sumEvenArguments", function(){
  it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
    expect(sumEvenArguments(1,2,3,4)).to.equal(6) // 6
    expect(sumEvenArguments(1,2,6)).to.equal(8) // 8
    expect(sumEvenArguments(1,2)).to.equal(2) // 2
  });
});

describe("#arrayFrom", function(){
  it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
  });
});

describe("#invokeMax", function(){
  it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
  });
});