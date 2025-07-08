let boxes = document.querySelectorAll(".cell");
let reset = document.querySelector("#restartBtn");

const over = document.getElementById("over");
const overlay = document.getElementById("overlay");
const message = document.getElementById("gameMessage");

const showDraw = ()  => {
  over.style.display = "flex";
  over.textContent = "It's a Draw!";
  message.textContent = "Nobody wins 😐";
  document.querySelector('.board').classList.add("disabled");
}

const showwin = (winner) => {
    overlay.style.display = "flex";
    overlay.textContent = `Win ${winner}`;
    document.querySelector('.board').classList.add("disabled");

}


let input = true;
let winnerFound = false; 

const winpatterns = [                                
                     [0,1,2],
                     [0,3,6],
                     [0,4,8],
                     [1,4,7],
                     [2,5,8],
                     [2,4,6],
                     [3,4,5],
                     [6,7,8],
];


const checkwinner = (a) => {
   for(let pattern of winpatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;


     if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 == pos2 && pos2 == pos3 && pos3 == pos1){
            showwin(pos1);
            winnerFound = true;
        }
        
     }
   }
}


let clickCount = 0;
boxes.forEach((box) => {
    
    
   
    box.addEventListener("click", () => {
         
        if (box.innerText !== "" || winnerFound) return;

        box.innerText = input ? "X" : "O";
         clickCount++;
        input = !input; // Toggle turn
        checkwinner();
        if(clickCount === 9){
            console.log("Draw");
            showDraw();
        }

        
})


    
});

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        clickCount = 0;
        winnerFound = false;
        box.innerText = "";
        overlay.style.display = "none";
        over.style.display = "none"
        message.textContent = "";
        document.querySelector('.board').classList.remove("disabled");
        
    });
    input = true;
});




// let h2 = document.querySelector("h2")
// console.dir(h2.innerText)

// h2.innerText = h2.innerText + "from JS"
// console.dir(h2.innerText)

// let btn = document.querySelector("#btn1");
// // btn.onclick = () => {
// //     let success = document.createElement("button");
// //     success.innerHTML = "Success";
    
// // }
// // let body = document.querySelector("div");
// //     body.append(success)
// btn.addEventListener("click", () => {
//     let success = document.createElement("button");
//     success.innerHTML = "Success";
//     let body = document.querySelector("div");
//     body.append(success);
// });

// let mode = document.querySelector("#mode");
// let currmode = "light";
// mode.addEventListener("click", () => {
//   if(currmode == "light"){
//     currmode = "dark"
//     document.querySelector("body").classList.remove("white");
//     document.querySelector("body").classList.add("dark");
//   }
//   else {
//     currmode = "light"
//     document.querySelector("body").classList.remove("dark");
//     document.querySelector("body").classList.add("white");
//   }
// })