/*One classic method for composing secret messages is called a square code. In this activity, we will be creating our own Square Code algorithm.

Square Code
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
    
The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.

Instruction
Create a function named squareCode that will receive a message, and return the secret square code version of the message.
*/

const squareCode = function (message) {
  // Put your solution here
  const splitMsg = message.split('')
  splitMsg.forEach((char, index) => {
    if(char === ' '){
      splitMsg.splice(index, 1)
    }
  });

  const charLength = splitMsg.length
  const colNum = Math.ceil(Math.sqrt(charLength))
  let array = []

  for(let i=0; i<charLength; i+=colNum){
    array.push(splitMsg.slice(i, i+colNum))
  }

  let result = '';
  for (let col = 0; col < colNum; col++) {
    for (let row of array) {
      if (col < row.length) {
        result += row[col];
      }
    }
    result += ' '; 
  }

  return result


};

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

module.exports = squareCode;
