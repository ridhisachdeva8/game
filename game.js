let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const getCompChoice =()=>{
    const options= ["rock","paper", "scissors"];
    //rock, paper, scissors
  const randIdx= Math.floor( Math.random() *3); //3 se multiple se no ki range 1 se 3 ho jaati hai
  return options[randIdx];
}

const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="Game  is Draw :) Play Again!";
    msg.style.backgroundColor= " rgb(33, 33, 66)";
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
//console.log("You Win! ");
userScore++;
userScorePara.innerText=userScore;
msg.innerText=`You Win!  Your ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor= "green";
}else{
   // console.log("Computer Win!");
compScore++;
compScorePara.innerText=compScore;
    msg.innerText=`Computer Win! ${userChoice} beats  your ${compChoice}`;
msg.style.backgroundColor= "red";
}
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate Comp choice
    const compChoice= getCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice=== compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin= true;
        if (userChoice==="rock"){
            //paper, scissors
        userWin = compChoice==="paper" ? false: true;
        }else if(userChoice=== "paper"){
        userWin= compChoice==="scissors"? false:true;
        }else{
        userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    } 
}
choices.forEach((choice)=>{
   // console.log(choice);
   const userChoice= choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log("choice is clicked", userChoice);
        playGame(userChoice);
    });
}) ;