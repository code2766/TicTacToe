let buttons = document.querySelectorAll(".butt");
let reset = document.querySelector("#reset");
let isx = true;
let msg=document.querySelector("#msg")

let winningresults = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

for (let butt of buttons) {
    butt.addEventListener("click", function () {
        if (isx) {
            butt.innerText = "X";
            isx = false;
        } else {
            butt.innerText = "O";
            isx = true;
        }

        butt.disabled = true;
        check();
    })
    reset.addEventListener("click", function () {
    butt.innerText="";
    reset.disabled=false;
    butt.disabled=false;
    msg.innerText="";
});
}



function check() {
    for (let pattern of winningresults) {
        let p1 = buttons[pattern[0]].innerText;
        let p2 = buttons[pattern[1]].innerText;
        let p3 = buttons[pattern[2]].innerText;

        if (p1 !== "" && p1 === p2 && p2 === p3) {
            msg.innerText=(`${p1} won the game`)
            
            
            return;
        }
    }
}

