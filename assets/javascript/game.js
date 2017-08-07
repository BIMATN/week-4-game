//My Crystal Collector Code

//Variables

var score;
var crystalA;
var crystalB;
var crystalC;
var crystalD;
var randomNumber;
var userChoice;
var wins;
var losses;

//psuedo
/*
1. random number between 19-120 is shown in the number box
2. random number value is applied to each of the cystals, with each one being a number between 1-12
3. user will select a crystal and its points will be applied to the total score
4. if the user matches the random number they win, but if they exceed the number they lose
5. game restarts with new values but tracks their win/loss history
*/

//1.
function getRandomIntInclusive(min, max) //function for inclusive random value between two number, thanks mozilla!
{
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var randomNumber = getRandomIntInclusive(19,120);
var crystalA = getRandomIntInclusive(1,12);
var crystalB = getRandomIntInclusive(1,12);
var crystalC = getRandomIntInclusive(1,12);
var crystalD = getRandomIntInclusive(1,12);

console.log(randomNumber);
console.log(crystalA);
console.log(crystalB);
console.log(crystalC);
console.log(crystalD);

