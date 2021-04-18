var randomNumber1 = Math.floor(1 + (Math.random()*6));
var randomNumber2 = Math.floor(1 + (Math.random()*6));
//document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
//document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "🚩Draw!";
}
