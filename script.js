const resetbtn = document.getElementById("reset-btn");
let game_box = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;
let count = 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

game_box.forEach(box => {
    box.addEventListener("click", (e) => {
        if (turn0) {
            box.innerText = '0';
            box.style.color = "red";
            turn0 = false;
        } else {
            box.innerText = 'X';
            box.style.color = "black";
            turn0 = true;
        }
        box.disabled = true;
        count++
        let iswinner = checkWinner()
        if(count === 9 && !iswinner){
            gameDraw()
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    resetbtn.classList.add("hide")
    disableBtn();
  };

function showWinner(winner){
    msg.innerText = `Congratulations! The winner is player ${winner}` 
    console.log("winer",winner)
    msgContainer.classList.remove("hide")
    resetbtn.classList.add("hide")
}

function resetGame(){
turn0 = true;
enableBtn()
count =0 
msgContainer.classList.add("hide")
resetbtn.classList.remove("hide")

}
function disableBtn(){
    for (let boxes of game_box) {
            boxes.disabled = true;
    }
}

function enableBtn(){
    for (let boxes of game_box) {
            boxes.disabled = false;
            boxes.innerText = "";
    }
}

function checkWinner(){
    for (let items of winPatterns) {
        let pos1=game_box[items[0]].innerText;
        let pos2=game_box[items[1]].innerText;
        let pos3= game_box[items[2]].innerText;
        if(pos1 !="" && pos2 != "" && pos3 !=""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1)
                disableBtn()
                return true;
            }
        }
}
}

resetbtn.addEventListener("click",resetGame)
newGameBtn.addEventListener("click",resetGame)