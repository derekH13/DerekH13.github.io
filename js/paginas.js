let flip = document.getElementById("container");
let cover1 = document.querySelector(".cover1");

function prox(){
  flip.classList.add("container-flip");
  flip.classList.remove("container");
}
function back(){
  flip.classList.remove("container-flip");
  flip.classList.add("container");

}
function prox1(){
  flip.classList.add("container-flip1");
  flip.classList.remove("container");
}
function back1(){
  flip.classList.remove("container-flip1");
  flip.classList.add("container");

}



