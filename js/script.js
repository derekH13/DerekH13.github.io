var dev = document.querySelector("#span");
const text = "DESENVOLVEDOR BACKEND";
const interval = 110;

function showText(dev, text, interval){

 

const char = text.split("").reverse();

const typer = setInterval(() => {

if(!char.length){
  return clearInterval(typer);
}//feito para ele parar quando o array char não tiver mais letras

const next = char.pop();//MOSTRANDO O ULTIMO ELEMENTO DE UM ARRAY

dev.innerHTML += next

}, interval);

}
showText(dev, text, interval);

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';






function animeScroll(){
const windowTop= window.pageYOffset + ((window.innerHeight - 200));
target.forEach(function(element){
  if((windowTop) > element.offsetTop){
    element.classList.add(animationClass);
  }else{
    element.classList.remove(animationClass);
  }


})//separa todos o elementos que estão relacionados ao target
}

animeScroll();

window.addEventListener('scroll', function(){
animeScroll();


})
