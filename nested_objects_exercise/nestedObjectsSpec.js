var expect = chai.expect

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

describe("#addSpeaker", function(){
  addSpeaker('Bob')

  it("adds an object to the speakers array", function(){
    expect(nestedObject.speakers.length).to.equal(4)
  });
  it("adds an object with a key of hello", function(){
    expect(nestedObject.speakers[3]).to.have.any.keys('name');
  });
  it("adds an object with a key of hello with a value specified in the function", function(){
    expect(nestedObject.speakers[3].name).to.equal('Bob');
  });
});

describe("#addLanguage", function(){

  addLanguage('german', 'halo')

  it("adds an object inside of the languages object", function(){
    expect(Object.keys(nestedObject.data.languages).length).to.equal(3)
  });
  it("adds an object with a key of hello with a value specified in the function", function(){
    expect(nestedObject.data.languages.german).to.have.any.keys('hello');
    expect(nestedObject.data.languages.german.hello).to.equal('halo');
  });
});

describe("#addCountry", function(){

  addCountry('germany', 'Berlin', 3500000)

  it("adds an object inside of the countries object", function(){
    expect(Object.keys(nestedObject.data.continents.europe.countries).length).to.equal(2)
  });
  it("adds an object with a key of capital and population with a value specified in the function", function(){
    expect(nestedObject.data.continents.europe.countries.germany).to.have.any.keys('capital', 'population');
    expect(nestedObject.data.continents.europe.countries.germany.capital).to.equal('Berlin')
    expect(nestedObject.data.continents.europe.countries.germany.population).to.equal(3500000)
  });
});

describe("#rotate", function(){
  it("rotates an array 1 place", function(){
    expect(rotate([1,2,3],2)).to.deep.equal([3,1,2])
  });
  it("rotates an array back to the start", function(){
    expect(rotate([1,2,3],3)).to.deep.equal([1,2,3])
  });
});

describe("#makeXOGrid", function(){
  it("makes a 1x4 grid", function(){
    expect(makeXOGrid(1,4)).to.deep.equal([ [ 'X', 'O', 'X', 'O' ] ] )
  });

  it("makes a 2x2 grid with a continuation of the previous row", function(){
    expect(makeXOGrid(2,2)).to.deep.equal([ [ 'X', 'O'], ['X', 'O' ] ] )
  });

  it("makes a 3x3 grid with a continuation of the previous row", function(){
    expect(makeXOGrid(3,3)).to.deep.equal([ [ 'X', 'O', 'X'], ['O', 'X', 'O' ], [ 'X', 'O', 'X']] )
  });

  it("makes a 5x5 grid with a continuation of the previous row", function(){
    expect(makeXOGrid(5,5)).to.deep.equal([ [ 'X', 'O', 'X', 'O', 'X'], ['O', 'X', 'O', 'X', 'O' ], [ 'X', 'O', 'X', 'O', 'X'], ['O', 'X', 'O', 'X', 'O' ],[ 'X', 'O', 'X', 'O', 'X']] )
  });
});
