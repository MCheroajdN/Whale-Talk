/*
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/


const input = "Colourful whale painting"; // text to be translated 
const vowels = ["a", "e", "i", "o", "u"];// all vowels from input variable
//tested to make sure working
//console.log(vowels[3]); //outputs i

const resultArray = []; // storage for input string that matches the vowels
for (let inputCounter = 0; inputCounter < input.length; inputCounter++) {
  //to count number of characters in my input including spaces
      //console.log("inputCounter = " + inputCounter);  //this ouputs 24 characters starting from 0

      //to actually log my input
      //console.log("inputCounter = " + input[inputCounter]);
      for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    //to check number of characters in my vowel variable
     //console.log("vowelsIndex = " + vowelsIndex)// outputs 0 through 4

     //compares input letter to letters in the vowels array
     if (input[inputCounter] === vowels[vowelsIndex]) {
       if (input[inputCounter] === "e") {
         resultArray.push('ee');
       } else if (input[inputCounter] === "u") {
         resultArray.push("uu");
       
       } else 
         resultArray.push(input[inputCounter]);

           }
      }
   }
   //console.log(resultArray); //outputs: [ 'o', 'o', 'uu', 'uu', 'a', 'ee', 'a', 'i', 'i' ]
 //console.log(resultArray.join("")); // outputs: oouuuuaeeaii

console.log(resultArray.join("").toUpperCase()); //output OOUUUUAEEAII