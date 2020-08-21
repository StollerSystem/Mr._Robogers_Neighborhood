// Business Logic
function returnRange(input){
  let range = [];
  number = 0;
  while (number <= input){
    range.push(number)
    number += 1
    
  }
  return changeThree(range)
}

function numberCheck(input){  
  if (input.split(" ").length > 1) {
    alert("PLease enter a SINGLE number")    
   } else if (Number.isNaN(parseInt(input))) {
     alert("Please enter a NUMBER!")
   } else {     
     return returnRange(input)
   }
}

function changeThree(range) {  
  newRange = []
  range.forEach(function(number) {
    let hasThree = false    
    for (const digit of number.toString()) {
      if (digit === "3") {        
        hasThree = true                    
      }
    }
    if (hasThree) {
      newRange.push("won't you be my neighbor?")
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

// Interface Logic 
$(document).ready(function() {  
  $("#mainForm").submit(function(event) {
    $("#send").hide();
    $("#tryAgain").show(1000);
    event.preventDefault(event);
    let userInput = $("#input").val();    
    $("#output").append('"'+changeThree(numberCheck(userInput)).join(" ")+'"')    
    $("#display").show(2000,"swing");
    $("#inputZone").hide();
  });

  $("#tryAgain").click(function() {
    $("#output").text("")
    $("#tryAgain").hide(100);
    $("#send").show(100);
    $("#mainForm")[0].reset();
    $("#display").hide(100);
    $("#inputZone").show(100);
  });  
});









