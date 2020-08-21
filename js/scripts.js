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
        hasThree = true                    
      }
    }
    if (hasThree) {
      newRange.push("Boop!")
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
      newRange.push("Beep!")
    } else {
      newRange.push(number)
    }
  });
  return newRange
}

// Interface Logic 
$(document).ready(function() {  
  $("#mainForm").submit(function(event) {
    event.preventDefault(event);
    let userInput = $("#input").val();
    let reverse = false 
    let bleeper = false
    if (userInput.split(" ").length > 1) {
      alert("ERROR! PLease enter a SINGLE number")    
     } else if (Number.isNaN(parseInt(userInput))) {
       alert("ERROR! Please enter a NUMBER!")
     } else {
        $("#send").hide();
        $("#tryAgain").show(6000);                
        $("#display").show(2000,"swing");
        $("#inputZone").hide();       
        $("input:checkbox[name=options]:checked").each(function() {
          if ($(this).val() === "1") {
            reverse = true;         
          } else if ($(this).val() === "2") {
            bleeper = true; 
              
          } 
        });
        console.log(bleeper)    
        main(userInput,reverse);  
     }    
  });

  function main(input,reverse) {
    let mainRange = changeThree(returnRange(input))    
    console.log(reverse)
    if (reverse) {
      mainRange.reverse();
    }
    $("#output").append('"'+mainRange.join(" ")+'"')
  }

  $("#tryAgain").click(function() {
    $("#output").text("")
    $("#tryAgain").hide(100);
    $("#send").show(100);
    $("#mainForm")[0].reset();
    $("#display").hide(100);
    $("#inputZone").show(100);
  });  
});









