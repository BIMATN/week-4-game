//My Crystal Collector Code

//Variables

var score = 0;
var crystalA;
var crystalB;
var crystalC;
var crystalD;
var randomNumber;
var userChoice;
var wins=0;
var losses=0;

//psuedo
/*
1. random number between 19-120 is shown in the number box
2. random number value is applied to each of the cystals, with each one being a number between 1-12
3. user will select a crystal and its points will be applied to the total score
4. if the user matches the random number they win, but if they exceed the number they lose
5. game restarts with new values but tracks their win/loss history
*/



$(document).ready(function(){

	//1.
	function getRandomIntInclusive(min, max) //function for inclusive random value between two number, thanks mozilla!
	{
	  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
	}

	randomNumber = getRandomIntInclusive(19,120);
	$("#numberToReach").html(randomNumber);
	$("#score").html(score);


	//2.
	crystalA = getRandomIntInclusive(1,12);
	crystalB = getRandomIntInclusive(1,12);
	crystalC = getRandomIntInclusive(1,12);
	crystalD = getRandomIntInclusive(1,12);


	//3.
	$('#crystalA').click(function()
		{
			score+=crystalA;
			$("#score").html(score);
			winLossCheck();
		}
	);
	$('#crystalB').click(function()
		{
			score+=crystalB;
			$("#score").html(score);
			winLossCheck();
		}
	);
	$('#crystalC').click(function()
		{
			score+=crystalC;
			$("#score").html(score);
			winLossCheck();
		}
	);
	$('#crystalD').click(function()
		{
			score+=crystalD;
			$("#score").html(score);
			winLossCheck();
		}
	);

	//4.
	function winLossCheck()
	{
		if(score === randomNumber)
		{
			wins++;
			$("#wins").html("Wins: "+wins);
			randomNumber = getRandomIntInclusive(19,120);
			$("#numberToReach").html(randomNumber);
			crystalA = getRandomIntInclusive(1,12);
			crystalB = getRandomIntInclusive(1,12);
			crystalC = getRandomIntInclusive(1,12);
			crystalD = getRandomIntInclusive(1,12);
			score = 0;
			$("#score").html(score);
		}
		else if(score>randomNumber)
		{
			losses++;
			$("#losses").html("Losses: "+losses);
			randomNumber = getRandomIntInclusive(19,120);
			$("#numberToReach").html(randomNumber);
			crystalA = getRandomIntInclusive(1,12);
			crystalB = getRandomIntInclusive(1,12);
			crystalC = getRandomIntInclusive(1,12);
			crystalD = getRandomIntInclusive(1,12);
			score = 0;
			$("#score").html(score);
		}
	}

});





