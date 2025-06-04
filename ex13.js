/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemember']

const talkingCalendar = function (date) {
  // Your code here
  const dateArray = date.split('/') 
  // change number redable date
  const month = parseInt(dateArray[1]) - 1
  dateArray[1] = months[month]
  const day = parseInt(dateArray[2])

  if(day === 11 || day === 12 || day === 13 ){
    dateArray[2] = `${day}th`
  }else if(day % 10 === 1 ){
    dateArray[2] = `${day}st`
  }else if(day % 10 === 2){
    dateArray[2] = `${day}nd`
  }else if(day % 10 === 3){
    dateArray[2] = `${day}rd`
  }else{
    dateArray[2] = `${day}th`
  }
  
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[0]}`
};


console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
