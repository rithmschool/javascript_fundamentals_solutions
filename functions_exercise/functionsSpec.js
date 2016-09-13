var expect = chai.expect

describe("#difference", function(){
  it("returns the result of one number subtracted by another", function(){
    expect(difference(10,2)).to.equal(8)
  });
  it("works with negative numbers", function(){
    expect(difference(-2,2)).to.equal(-4)
  });
});

describe("#product", function(){
  it("returns the result of one number multiplied by another", function(){
    expect(product(2,2)).to.equal(4)
  });
  it("works with negative numbers", function(){
    expect(product(-2,-2)).to.equal(4)
  });
});

describe("#printDay", function(){
  it("returns a day of the week between 1 and 7", function(){
     expect(printDay(2)).to.equal("Monday")
  });
  it("returns a day of the week between 1 and 7", function(){
     expect(printDay(4)).to.equal("Wednesday")
  });
  it("returns a day of the week between 1 and 7", function(){
     expect(printDay(7)).to.equal("Saturday")
  });
  it("returns undefined if the value is less than 1 or greater than 7", function(){
     expect(printDay(10)).to.equal(undefined)
     expect(printDay(0)).to.equal(undefined)
  });
});

describe("#lastElement", function(){
  it("returns the last element of an array", function(){
    expect(lastElement([1,2,3,4,5])).to.equal(5)
    expect(lastElement([1,2,3,4,5,null])).to.equal(null)
    expect(lastElement([1,2,3,4,{}])).to.deep.equal({})
  });
  it("returns undefined if the array is empty", function(){
    expect(lastElement([])).to.equal(undefined)
  });
});

describe("#numberCompare", function(){
  it("returns the string 'Numbers are equal' if the two numbers are the same", function(){
    expect(numberCompare(2,2)).to.equal('Numbers are equal')
  });
  it("returns the string 'First is greater' if the first number is greater", function(){
    expect(numberCompare(2,-2)).to.equal('First is greater')
  });
  it("returns the string 'Second is greater' if the second number is greater", function(){
    expect(numberCompare(-2,2)).to.equal('Second is greater')
  });
});

describe("#singleLetterCount", function(){
  it("counts the number of occurances a letter appears in a word", function(){
    expect(singleLetterCount("Amazing","a")).to.equal(2)
  });
  it("is case insensitive", function(){
    expect(singleLetterCount("tesTing","T")).to.equal(2)
    expect(singleLetterCount("AAzzaa","A")).to.equal(4)
  });
});

describe("#multipleLetterCount", function(){
  it("returns a object with the key being the letter and the value the count of each letter in a word", function(){
    expect(multipleLetterCount("hello")).to.deep.equal({h:1, e: 1, l: 2, o:1})
    expect(multipleLetterCount("person")).to.deep.equal({p:1, e: 1, r: 1, s:1, o:1, n:1})
  });
});

describe("#arrayManipulation", function(){
  it("returns the last value in an array when 'remove' and 'end' are passed to it", function(){
    expect(arrayManipulation([1,2,3], "remove", "end")).to.equal(3)
  });
  it("returns the first value in an array when 'remove' and 'beginning' are passed to it", function(){
    expect(arrayManipulation([1,2,3], "remove", "beginning")).to.equal(1)
  });
  it("returns the array when 'add' and 'beginning' are passed to it", function(){
    expect(arrayManipulation([1,2,3], "add", "beginning", 20)).to.deep.equal([20,1,2,3])
  });
  it("returns the array when 'add' and 'end' are passed to it", function(){
    expect(arrayManipulation([1,2,3], "add", "end", 30)).to.deep.equal([1,2,3,30])
  });
});

describe("#sortedKeysOfObject", function(){
  it("returns an array with all the names of the keys of the object sorted in ascending order", function(){
    expect(sortedKeysOfObject({name:"Elie", hobby:"programming", favoriteColor:"purple"})).to.deep.equal(["favoriteColor", "hobby", "name"])
  });
});

describe("#isPalindrome", function(){
  it("returns true if the string is a palindrome", function(){
    expect(isPalindrome("tacocat")).to.equal(true)
  });
  it("returns true if the string has 1 character", function(){
    expect(isPalindrome('a')).to.equal(true)
  });
  it("returns false if the string is not a palindrome", function(){
    expect(isPalindrome("test")).to.equal(false)
  });
});