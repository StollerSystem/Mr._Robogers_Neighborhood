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
  // if (input.split(" ").includes(/\d/g)) {
  //   console.log("IS NUMBERS!");
  // } else {
  //   console.log("NOT NUMBERS!");
  // }

  if (input.split(" ").length > 1) {
    alert("PLease enter a SINGLE number")
   } else if (parseInt(input) === NaN) {
     alert("Please enter a NUMBER!")
   } else {
     console.log("ALL GOOD")
   }


}



//console.log(parseInt("test"))
console.log(numberCheck("fuck"))
console.log(returnRange(20))






// Interface Logic 