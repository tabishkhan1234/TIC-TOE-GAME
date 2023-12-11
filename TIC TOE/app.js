let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#reset2");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame=()=>{
turnO=true
enablebtn()
.msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
            box.innerText = "0"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true

        checkWinner()


    });
});
const disablebtn=()=>{
for(let box of boxes){
    box.disabled=true
}
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
    }
const showWinner = (winner) => {
    msg.innerText = `"Congrulation YOU ARE WINNER", ${winner}`;
    msgcontainer.classList.remove("hide")
    disablebtn()

}
const checkWinner = () => {
    for (let pattern of winpattern) {
        let postion1 = boxes[pattern[0]].innerText
        let postion2 = boxes[pattern[1]].innerText
        let postion3 = boxes[pattern[2]].innerText
        if (postion1 != "" && postion2 != "" && postion3 != "") {
            if (postion1 === postion2 && postion2 === postion3) {
               
                
                showWinner(postion1)
            }
        }
    }
}

newGameBtn .addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)

