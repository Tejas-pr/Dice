// alert("please reload the page.")
var randomNumber = Math.floor(Math.random()*6) + 1;//here i get random number from 1-6
var randomImage = "./images/"+"dice "+randomNumber+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

//for 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "./images/"+"dice "+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 won";
}else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="player 2 won 🚩";
}else{
document.querySelector("h1").innerHTML="Draw!";
}