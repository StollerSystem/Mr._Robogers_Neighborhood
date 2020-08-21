// Business Logic

function returnRange(input){
  let range = [];
  number = 0;
  while (number <= input){
    range.push(number)
    number += 1
    
  }
  return range
}

function numberCheck(input){
  //console.log(Number.isNaN(parseInt(input)))
  if (input.split(" ").length > 1) {
    alert("PLease enter a SINGLE number")
   } else if (Number.isNaN(parseInt(input))) {
     alert("Please enter a NUMBER!")
   } else {
     console.log("ALL GOOD")
     return parseInt(input)
   }
}



//console.log(parseInt("test"))
console.log(numberCheck("20"))
console.log(returnRange(20))






// Interface Logic 