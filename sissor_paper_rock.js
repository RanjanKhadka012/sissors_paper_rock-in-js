function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const user_input = prompt("pick your weapon of choice")

const random_number = getRandomIntInclusive(1,3);
function computer_pick(number){
  if (number === 1){
    computer = "rock";
  }else if(number==2){
    computer="paper";
  }else if (number==3){
    computer="sissors";
  }
  
  return computer;
}

const computer_move = computer_pick(random_number);

function game(x,y){
  if (x==y){
    alert("it was a draw")
  }else if (x=="rock" && y =="paper"){
    alert("you've lost");
  } else if (x=="rock" && y=="sissors"){
    alert("you've won");
  } else if (x=="paper" && y=="rock"){
    alert("you've won");
  } else if (x=="paper" && y=="sissors"){
    alert("you've lost");
  }else if (x=="sissors" && y=="paper"){
    alert("you've won");
  }else if (x=="sissors" && y=="rock"){
    alert("you've lost")
  }
}

game(user_input,computer_move);
console.log("you chose" + " " + user_input + " and computer chose" + " " +computer_move);


