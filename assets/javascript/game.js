//My Star Wars RPG Code

//Variables and Objects

var obi = 
{
	name: "Obi Wan Kenobi",
	health: 120,
	hitPoints: 12,
	counter: 12
}

var luke = 
{
	name: "Luke Skywalker",
	health: 100,
	hitPoints: 10,
	counter: 10
}

var sid = 
{
	name: "Darth Sidious",
	health: 150,
	hitPoints: 15,
	counter: 15
}

var maul = 
{
	name: "Darth Maul",
	health: 180,
	hitPoints: 18,
	counter: 18
}

var playerHitPoints;
var playerHealth;

//Future Objects
var villainA; //future villain
var villainB; //future villain
var villainC; //future villain
var opponent = {health:0}; //future opponent with initial health set to 0 to accomodate condition statements below


//psuedo
/*
1. build variables and objects
2. when player chooses character other choices disappear
3. other choices become villains
4. player chooses first villain
5. player attacks villain

*/



$(document).ready(function(){

//Select Player Character
	
$('#obi').click(function()
		{
			$('#obi').off("click");//disable click event
			playerHitPoints = obi.hitPoints; //set points of object to player points for manipulation
			playerHealth = obi.health; //set points of object to player points for manipulation
			hitInc = obi.hitPoints;
			$("#luke").empty(); //empty html contents
			$("#sid").empty();	//empty html contents
			$("#maul").empty();	//empty html contents
			$("#yourCharBottom").empty();	//empty html contents
			$("#yourCharTop").html("Your Fighter:"); //Change location from bottom to top using trickery
			villainA=luke; //assign villain objects to villains
			villainB=sid; //assign villain objects to villains
			villainC=maul; //assign villain objects to villains
			$("#villainA").html("luke"); //load names for villains
			$("#villainB").html("sid"); //load names for villains
			$("#villainC").html("maul"); //load names for villains
		}
	);
$('#luke').click(function()
		{
			$('#luke').off("click");//disable click event
			playerHitPoints = luke.hitPoints;
			playerHealth = luke.health;
			hitInc = luke.hitPoints;
			$("#obi").empty();
			$("#sid").empty();
			$("#maul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Fighter:");
			villainA=obi;
			villainB=sid;
			villainC=maul;
			$("#villainA").html("obi");
			$("#villainB").html("sid");
			$("#villainC").html("maul");
		}
	);
$('#sid').click(function()
		{
			$('#sid').off("click");//disable click event
			playerHitPoints = sid.hitPoints;
			playerHealth = sid.health;
			hitInc = sid.hitPoints;
			$("#obi").empty();
			$("#luke").empty();
			$("#maul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Fighter:");
			villainA=obi;
			villainB=luke;
			villainC=maul;
			$("#villainA").html("obi");
			$("#villainB").html("luke");
			$("#villainC").html("maul");
		}
	);
$('#maul').click(function()
		{
			$('#maul').off("click");//disable click event
			playerHitPoints = maul.hitPoints;
			playerHealth = maul.health;
			hitInc = maul.hitPoints;
			$("#obi").empty();
			$("#luke").empty();
			$("#sid").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Fighter:");
			villainA=obi;
			villainB=luke;
			villainC=sid;
			$("#villainA").html("obi");
			$("#villainB").html("luke");
			$("#villainC").html("sid");
		}
	);

//Select Villain to Attack

$('#villainA').click(function()
		{
			if(opponent.health < 1)
			{
				$("#villainA").empty(); //empty villain for move to bottom
				$("#opponent").html(villainA.name); //add villain to bottom
				opponent = villainA; //opponent adopts villain properties
				console.log("This is the new opponent health: " + opponent.health);
			}
			else
			{
				alert("You can't seriously believe you are powerful enough to face two enemies. Focus on the one for now.")
			}
		}
	);
$('#villainB').click(function()
		{
			if(opponent.health < 1)
			{
				$("#villainB").empty(); //empty villain for move to bottom
				$("#opponent").html(villainB.name); //add villain to bottom
				opponent = villainB;
				console.log("This is the new opponent health: " + opponent.health);
			}
			else
			{
				alert("You can't seriously believe you are powerful enough to face two enemies. Focus on the one for now.")
			}
		}
	);
$('#villainC').click(function()
		{
			if(opponent.health < 1)
			{
				$("#villainC").empty(); //empty villain for move to bottom
				$("#opponent").html(villainC.name); //add villain to bottom
				opponent = villainC;
				console.log("This is the new opponent health: " + opponent.health);
			}
			else
			{
				alert("You can't seriously believe you are powerful enough to face two enemies. Focus on the one for now.")
			}
		}
	);


//Attack Process
$('#attack').click(function()
		{
			console.log("this is my new opponent health after pressing attack: "+opponent.health);
			if(opponent.health > 0 && playerHealth > 0)
			{
				opponent.health -= playerHitPoints;
				console.log("my opponents health "+opponent.health);
				playerHealth -= opponent.counter;
				console.log("my health " + playerHealth);
				console.log("my initial hit points "+playerHitPoints);
				//update visual display of player and opponent health;
				if(opponent.health > 0 && playerHealth < 1)
				{
					alert("You have lost your fight. Return to your master for further training.");
					location.reload();
				}

				else if (opponent.health < 1 && playerHealth > 0)
				{
					alert("Your training has made you stronger, choose your next opponent.");
					$("#opponent").empty(); //empty villain category
				}
				playerHitPoints+=hitInc; //increase hit points
				console.log("my hit points "+playerHitPoints);
			}
			else
			{
				alert("So anxious to fight you haven't even picked an opponent yet. Try fighting something other than the air.")
			}
		}
	);


	/*console.log(maul);
	console.log(luke);
	console.log(sid);
	console.log(obi);*/

});





