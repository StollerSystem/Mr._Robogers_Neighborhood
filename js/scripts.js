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

function changeThree(range) {  
  newRange = []
  range.forEach(function(number) {
    let hasThree = false    
    for (const digit of number.toString()) {
      if (digit === "3") {
        //console.log("THREE!")
        hasThree = true                    
      }
    }
    if (hasThree) {
      newRange.push("Won't you be my neighbor?")
    } else {
      newRange.push(number)
    }
  });
  return changeTwo(newRange)
}

function changeTwo(range) {  
  newRange = []
  range.forEach(function(number) {
    let hasThree = false    
    for (const digit of number.toString()) {
      if (digit === "2") {
        //console.log("TWO!")
        hasThree = true                    
      }
    }
    if (hasThree) {
      newRange.push("Boop")
    } else {
      newRange.push(number)
    }
  });
  return changeOne(newRange)
}

function changeOne(range) {  
  newRange = []
  range.forEach(function(number) {
    let hasThree = false    
    for (const digit of number.toString()) {
      if (digit === "1") {
        //console.log("ONE!")
        hasThree = true                    
      }
    }
    if (hasThree) {
      newRange.push("Beep")
    } else {
      newRange.push(number)
    }
  });
  return newRange
}
//console.log(parseInt("test"))
//console.log(numberCheck("20"))
//console.log(changeThree(returnRange("23")))

// Interface Logic 
$(document).ready(function() {  
  $("#mainForm").submit(function(event) {
    $("#send").hide();
    $("#tryAgain").show();
    event.preventDefault(event);
    let userInput = $("#input").val();
    console.log(userInput)
    console.log(changeThree(returnRange(userInput)))
    $("#output").text(changeThree(returnRange(userInput)).join(" "))
  });

  $("#tryAgain").click(function() {
    $("#output").text("")
    $("#tryAgain").hide();
    $("#send").show();
    $("#mainForm")[0].reset();
  });
});