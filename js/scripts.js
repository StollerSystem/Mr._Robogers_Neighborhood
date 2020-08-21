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
     return returnRange(input)
   }
}

function threeToText(range) {  
  newRange = []
  range.forEach(function(number) {
    let hasThree = false    
    for (const digit of number.toString()) {
      if (digit === "3") {
        console.log("THREE!")
        hasThree = true
        //newRange.push("Won't you be my neighbor?")             
      }
    }
    if (hasThree) {
      newRange.push("Won't you be my neighbor?")
    } else {
      newRange.push(number)
    }
  });
  return newRange
}



//console.log(parseInt("test"))
console.log(numberCheck("20"))
console.log(threeToText(returnRange("23")))






// Interface Logic 