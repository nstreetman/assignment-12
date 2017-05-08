// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

var makeNamesObject = function(name1, name2, name3){
  var newNamesObject = {}
  var anotherName1 = name1.split(' ');
  var anotherName2 = name2.split(' ');
  var anotherName3 = name3.split(' ');

  for(var i = 0; i < anotherName1.length; i++){
      var property = anotherName1[0];
      var value = anotherName1[1];
      newNamesObject[property] = value
  }

  for(var i = 0; i < anotherName2.length; i++){
      var property = anotherName2[0];
      var value = anotherName2[1];
      newNamesObject[property] = value
  }

  for(var i = 0; i < anotherName3.length; i++){
      var property = anotherName3[0];
      var value = anotherName3[1];
      newNamesObject[property] = value
  }
  return newNamesObject
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
