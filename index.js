/*

var player1 = prompt("inserisci il nome del primo giocatore!")
var player2 = prompt("inserisci il nome del secondo giocatore!")

document.querySelectorAll("p")[0].innerHTML= player1;
document.querySelectorAll("p")[1].innerHTML= player2;


*/

//dice player n1
var randomNumber = Math.floor(Math.random()*6)+1;
var imgSrc = "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imgSrc);


//dice player n2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);


//changing of the title depending who wins
if (randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player one wins!"
}
else if (randomNumber < randomNumber2){
  document.querySelector("h1").innerHTML="Player two wins! 🚩"
}
else{
  document.querySelector("h1").innerHTML="🎲 Draw! 🎲"
}
