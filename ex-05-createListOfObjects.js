// ex-04 createListOfObjects()

// Write a function called createListOfObjects that accepts an an array of strings
// with first and last names and returns an array of objects
// that each have the property `firstName` and `lastName` and
// corresponding value


// http://stackoverflow.com/questions/20474257/split-string-into-two-parts
// var someString = "A04.3  A new Code";
// var index = someString.indexOf(" ");  // Gets the first index where a space occours
// var id = someString.substr(0, index); // Gets the first part
// var text = someString.substr(index + 1);  // Gets the text part

var createListOfObjects = function(arrayOfObjects){
  var returnArray = []
    for(var i = 0; i < arrayOfObjects.length; i++){
      var nameObject = {
        firstName: '',
        lastName: ''
      }
      var aString = arrayOfObjects[i];
      var index = aString.indexOf(' ');
      var id = aString.substr(0, index);
      var text = aString.substr(index + 1);
      nameObject.firstName = id;
      nameObject.lastName = text;
      returnArray.push(nameObject);
    }
  return returnArray  
}








//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]

var realSportsStars = [
	'Kenny Powers',
	'Ricky Vaughn',
	'Dottie Hinson',
	'Jesus Shuttlesworth',
	'Scotty Smalls'
]



var ninjaListOfObjects = createListOfObjects(realNinjas)
var sportStarsListOfObjects = createListOfObjects(realSportsStars)
//=>
// [
//    { firstName: 'Chuck', lastName: 'Norris'},
//    { firstName: 'Jackie', lastName: 'Chan'}
//    ...
// ]
console.assert(typeof ninjaListOfObjects[0] === "object")
//------------------------------
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[1].lastName === "Chan")
console.assert(ninjaListOfObjects[3].firstName === "Billy")
console.assert(sportStarsListOfObjects[1].firstName === "Ricky")
console.assert(sportStarsListOfObjects[4].lastName === "Smalls")
