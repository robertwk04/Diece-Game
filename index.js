var num1=Math.floor(Math.random()*6+1);
var num2=Math.floor(Math.random()*6+1);
num1="./images/dice"+num1+".png";
num2="./images/dice"+num2+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",num1);
document.getElementsByClassName("img2")[0].setAttribute("src",num2);
if(num1>num2)
 document.getElementsByTagName("h1")[0].textContent="Player 1 win!";
if(num1<num2)
 document.getElementsByTagName("h1")[0].textContent="Player 2 win!";
if(num1==num2)
 document.getElementsByTagName("h1")[0].textContent="Draw";
