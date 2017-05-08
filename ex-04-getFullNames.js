// ex-03 getFullNames

// Write a function called `getFullNames` that takes an array
// of objects with first and last names and returns an array
// of strings, where each string is a customer's full name.

var getFullNames = function(arrayOfObjects){
  var fullOutputName = []
  for (var i = 0; i < arrayOfObjects.length; i++){
    var nameObject = arrayOfObjects[i]
    var fullName = nameObject.first + ' ' + nameObject.last;
    fullOutputName.push(fullName)
  }
  return fullOutputName
}








//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var customersList = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby'},
	{ first: 'Jen', last: 'Vin'},
	{ first: 'Dan', last: 'Theman'},
]

console.assert(getFullNames(customersList)[0] === "Joe Blogs")
console.assert(getFullNames(customersList)[1] === "John Smith")
console.assert(getFullNames(moreCustomersList)[0] === "Jack White")
console.assert(getFullNames(moreCustomersList)[2] === "Dan Theman")
