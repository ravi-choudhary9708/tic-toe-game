let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".restart");
let msgbox =document.querySelector(".msg-box");
let msg = document.querySelector(".msg")
let newgame=document.querySelector("#new-game")

let turno=true
let WinPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
console.log("box was clicked");
if(turno){
    box.innerHTML="x";
    turno=false
}
else{
    box.innerHTML="0"
    turno=true
}
boxes.disabled = true;
checkwinner()

})
})
let disboxes=()=>{
for(let box of boxes){
    box.disabled = true;
    msgbox.classList.add("hide");
    box.innerHTML=""

}
}
let resetgame= ()=>{
    resetbtn.addEventListener("click", ()=>{
       console.log("im a okay");
       disboxes()

    })
}
resetgame()
let game = ()=>{
    newgame.addEventListener("click",()=>{
      
        disboxes()
    })
}
let showinner=(winner)=>{
          msg.innerHTML=`congratulation,  winner is ${winner}`;
          msgbox.classList.remove("hide");
         
}
let checkwinner=()=>{
    for (let random of WinPattern) {
       
        let pos1val=boxes[random[0]].innerHTML;
        let pos2val=boxes[random[1]].innerHTML;
        let pos3val=boxes[random[2]].innerHTML;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showinner(pos1val);
                game();
               

            }
        }
    
    }

}