/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  const result = []
  let resultString = ''
  let splitInput =''

  if(caze === 'camel'){
    splitInput = input.split(' ')
    splitInput.forEach((word, index) => {
      if(index === 0){
        result.push(word)
      }else{
        result.push(`${word[0].toUpperCase()}${word.slice(1)}`)
      }
      
    });
    resultString = result.join('')
    return resultString

  }else if(caze === 'pascal'){
    splitInput = input.split(' ')
    splitInput.forEach((word) => {
      result.push(`${word[0].toUpperCase()}${word.slice(1)}`)
      
    });
    resultString = result.join('')
    return resultString

  }else if(caze === 'snake'){
    splitInput = input.split(' ')
    resultString = splitInput.join("_")
    return resultString
    
  }else if(caze === 'kebab'){
    splitInput = input.split(' ')
    resultString = splitInput.join("-")
    return resultString
    
  }else if(caze === 'title'){
    splitInput = input.split(' ')
    splitInput.forEach((word) => {
      result.push(`${word[0].toUpperCase()}${word.slice(1)}`)
      
    });
    resultString = result.join(' ')
    return resultString
    
  }else if(caze === 'vowel'){
    splitInput = input.split(' ')
    splitInput.forEach((word) => {
      
      result.push(`${word[0].toUpperCase()}${word.slice(1)}`)
      
    });
    resultString = result.join(' ')
    return resultString
  }else if(caze === 'consonant'){
    
  }else if(caze === 'camel'){
    
  }else if(caze[0]=== 'upper' && caze[1] === 'snake'){
    splitInput = input.split(' ')
    splitInput.forEach(word => {
      result.push(word.toUpperCase())
    })
    resultString = result.join('_')
    return resultString
   }
};


console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
