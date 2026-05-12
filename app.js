let modeBtn = document.querySelector(".toggle-mode");
let currMode = "#AA767C";

let resetBtn = document.querySelector("#reset_btn");
let boxes = document.querySelectorAll(".button");
let turn0 = true;

let msgContainer = document.querySelector(".msg-container");
// let hide = ;
let msg = document.querySelector("#msg");
let newGamebtn = document.querySelector("#new-btn");


let winning_pattern = [[0,1,2],[3,4,5],[6,7,8],
                       [0,3,6],[1,4,7],[2,5,8],
                       [0,4,8],[2,4,6]];


const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

modeBtn.addEventListener("click", ()=> {
    if(currMode === "#AA767C"){
        console.log("Dark Mode")
        document.body.style.backgroundColor = "#131313";
        document.body.style.color = "white";
        currMode = "#131313";
    }
    else{
        console.log("Light Mode")
        document.body.style.backgroundColor = "#AA767C";
        document.body.style.color = "#131313";
        currMode = "#AA767C";
    
    }
})

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Button was clicked for 0");
        if(turn0){
            box.innerText = "0";
            box.style.color = "#1d4ed8";
            turn0 = false;
            count++;
        }
        else{
            box.innerText = "X";
            box.style.color = "#dc2626";
            turn0 = true;
            count++;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}    

const showWinner = (winner) => {
    msg.innerText = `Congratulations the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () => {
    if (count === 9){
        msg.innerText = "The Game is Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

const checkWinner = () => {
    for(let pattern of winning_pattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
                return;
            }
        } 
    }
    showDraw();
}


newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
