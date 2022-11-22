html
--------------------------------------------------------
<!DOCTYPE html>
<html>
    <head>
        <title>shashi</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <div id="app"></div>
        <div style="display:flex;">
        <h1>Shashi's Score:</h1>
        <h1 id="score"></h1>
    </div>
    <button id="reset">Reset</button>
    <br><br><br>

    
        <script src="script.js"></script>
    </body>
</html>

------------------------------------------------------------------------------------------------------------

java script 

const body=document.getElementsByTagName("body")[0];
const bombs=[];
let score=0;
let gameOver=false;
const visitedNodes=[];

const resetButton=document.getElementById("reset");
resetButton.addEventListener("click",()=>{
   window.location.reload();
});

function incrementScore(){
    score++;
    const scoreElement=document.getElementById("score");
    scoreElement.innerText=score;

}
function showAllBombs(){
    const allBombs=document.getElementsByClassName("bomb");
    for(let bomb of allBombs){
        bomb.style.background="red";
    }

}
function createGrid(){
    for(let i=0;i<9;i++)
    {
    const row=document.createElement("div");
   row.style.display="flex";
    for(let j=0;j<9;j++)
    {
    const column=document.createElement("div");
    column.style.height="20px";
    column.style.width="20px";
    column.style.background="grey";
    column.style.border="1px solid black";
    const currIndex=i*9+j;
    if(bombs.includes(currIndex)){
        column.className="bomb";
    }
    column.addEventListener("click",()=>{
        if(!gameOver){
        if(bombs.includes(currIndex)){
            column.style.background= "red";
            gameOver=true;
            showAllBombs();

        }
        else{
            column.style.background="green";
            if(!visitedNodes.includes(currIndex)){
            incrementScore();
            visitedNodes.push(currIndex);
        }
    }
    }
    });
    row.appendChild(column)


    }
    body.appendChild(row);
}

}
function generateRandomNumber(){
    let randomNumber=Math.random();
    //give the number between 0 to 1
    randomNumber=randomNumber.toFixed(2);
    randomNumber=randomNumber * 100;
    //writing a logic to restrict upto 81 only 
      randomNumber=randomNumber % 81;
      randomNumber=Math.floor(randomNumber);
      return randomNumber;

}
function placeBombs(){
    while(bombs.length<9)
    {
        const randomNumber=generateRandomNumber();
        if(!bombs.includes(randomNumber)){
            bombs.push(randomNumber);

        }
    }
    
}
placeBombs();
createGrid();

