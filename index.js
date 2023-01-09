var randomNumber1= Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var diceimg1=document.querySelector(".img1");
var diceimg2=document.querySelector(".img2");
switch (randomNumber1) {
    case 1:
            diceimg1.src="images/dice1.png";
        break;
    case 2:
        diceimg1.src="images/dice2.png";

        break;
    case 3:
        diceimg1.src="images/dice3.png";

        break;
    case 4:
        diceimg1.src="images/dice4.png";

        break;
    case 5:
        diceimg1.src="images/dice5.png";
        break;
    case 6:
        diceimg1.src="images/dice6.png";

        break;
    default:    alert("error");

        break;
}

switch (randomNumber2) {
    case 1:
            diceimg2.src="images/dice1.png";
        break;
    case 2:
        diceimg2.src="images/dice2.png";

        break;
    case 3:
        diceimg2.src="images/dice3.png";

        break;
    case 4:
        diceimg2.src="images/dice4.png";

        break;
    case 5:
        diceimg2.src="images/dice5.png";
        break;
    case 6:
        diceimg2.src="images/dice6.png";

        break;
    default: 
    alert("error");
        break;
}
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Won";
   
}
else{
    document.querySelector("h1").innerHTML="It's a Draw !";

}