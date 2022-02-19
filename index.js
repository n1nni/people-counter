 
let count=0;

let countEl= document.getElementById("count-el");

function increment(){
    count = count+1;
    countEl.innerText = count;
}


// save function
let saveEl = document.getElementById("save-el");

function save(){
    let text = count + " - ";
    saveEl.textContent+=text; 
    console.log(saveEl.innerText);
    count=0;
    countEl.textContent=0;
} 

