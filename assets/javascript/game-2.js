//My Star Wars RPG Code

//Variables and Objects

//objects
var obi = 
{
	name: "Obi Wan Kenobi",
	health: 120,
	hitPoints: 12,
	counter: 12,
}

var luke = 
{
	name: "Luke Skywalker",
	health: 100,
	hitPoints: 10,
	counter: 10,
}

var sid = 
{
	name: "Darth Sidious",
	health: 180,
	hitPoints: 15,
	counter: 15,
}

var maul = 
{
	name: "Darth Maul",
	health: 150,
	hitPoints: 18,
	counter: 18,
}

//Future Objects
var villainA; //future villain
var villainB; //future villain
var villainC; //future villain
var playerChar; //future player
var opponent = {health:0}; //future opponent with initial health set to 0 to accomodate condition statements below

//variables
var obiHealth;
var lukeHealth;
var sidHealth;
var maulHealth;
var playerCharHealth;
var hitInc;

//psuedo
/*
1. build variables and objects
2. when player chooses character other choices disappear
3. other choices become villains
4. player chooses first villain
5. player attacks villain
*/

$(document).ready(function(){

//Create html for each character so it displays with the dynamic health
obiHealth=obi.health+" HP";//define obiHealth variable as the health property inside the obi object and HP
//add a property to the obi object that has a variable value for display of health
obi.html = "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good>"+obiHealth+"</h3></div>";
$("#pickObi").html(obi.html);
lukeHealth=(luke.health+" HP");
luke.html = "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good>"+lukeHealth+"</h3></div>"
$("#pickLuke").html(luke.html);
sidHealth=(sid.health+" HP");
sid.html = "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad>"+sidHealth+"</h3></div>"
$("#pickDarthSid").html(sid.html);
maulHealth=(maul.health+" HP");
maul.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad>"+maulHealth+"</h3></div>"
$("#pickDarthMaul").html(maul.html);

//Select Player Character
	
$('#obiPic').click(function()
		{
			$('#obiPic').off("click");//disable click event
			playerChar = obi;
			hitInc = obi.hitPoints;
			playerCharHealth = playerChar.health+" HP";//updating health display variable
			//update html so that it can be targeted and displays playerCharHealth variable
			playerChar.html = "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good id=playerHealthDisplay>"+playerCharHealth+"</h3></div>";
			$("#pickObi").html(playerChar.html);
			//$("#obiHealth").toggleClass("obiHD playerHealthDisplay");
			//$(".playerHealthDisplay").html(playerChar.health+" HP");
			$("#pickLuke").empty(); //empty html contents
			$("#pickDarthSid").empty();	//empty html contents
			$("#pickDarthMaul").empty();	//empty html contents
			$("#yourCharBottom").empty();	//empty html contents
			$("#yourCharTop").html("Your Chosen Fighter"); //Change location from bottom to top using trickery
			villainA=luke; //assign villain objects to villains
			villainB=sid; //assign villain objects to villains
			villainC=maul; //assign villain objects to villains
			$("#villainA").html(villainA.html); //load villains
			$("#villainB").html(villainB.html); //load villains
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
			villainA.html =
			villainB.html =
			villainC.html =
		}
	);
$('#lukePic').click(function()
		{
			$('#lukePic').off("click");//disable click event
			playerChar=luke;
			hitInc = luke.hitPoints;
			playerCharHealth = playerChar.health+" HP";//updating health display variable
			playerChar.html = "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good id=playerHealthDisplay>"+playerCharHealth+"</h3></div>"
			$("#pickLuke").html(playerChar.html);
			$("#pickObi").empty();
			$("#pickDarthSid").empty();
			$("#pickDarthMaul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter");
			villainA=obi;
			villainB=sid;
			villainC=maul;
			$("#villainA").html(villainA.html); //load villains
			$("#villainB").html(villainB.html); //load villains
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
			villainA.html =
			villainB.html =
			villainC.html =
		}
	);
$('#sidPic').click(function()
		{
			$('#sidPic').off("click");//disable click event
			playerChar=sid;
			hitInc = sid.hitPoints;
			playerCharHealth = playerChar.health+" HP";//updating health display variable
			playerChar.html = "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad id=playerHealthDisplay>"+playerCharHealth+"</h3></div>"
			$("#pickDarthSid").html(playerChar.html);
			$("#pickObi").empty();
			$("#pickLuke").empty();
			$("#pickDarthMaul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter");
			villainA=obi;
			villainB=luke;
			villainC=maul;
			$("#villainA").html(villainA.html); //load villains
			$("#villainB").html(villainB.html); //load villains
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
			villainA.html =
			villainB.html =
			villainC.html =
		}
	);
$('#maulPic').click(function()
		{
			$('#maulPic').off("click");//disable click event
			playerChar=maul;
			hitInc = maul.hitPoints;
			playerCharHealth = playerChar.health+" HP";//updating health display variable
			playerChar.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad id=playerHealthDisplay>"+playerCharHealth+"</h3></div>"
			$("#pickDarthMaul").html(playerChar.html);
			$("#pickObi").empty();
			$("#pickLuke").empty();
			$("#pickDarthSid").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter");
			villainA=obi;
			villainB=luke;
			villainC=sid;
			$("#villainA").html(villainA.html); //load villains
			$("#villainB").html(villainB.html); //load villains
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
			villainA.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad id=opponentHealthDisplay>""</h3></div>"
			villainB.html
			villainC.html

		}
	);

//Select Villain to Attack

$('#villainA').click(function()
		{
			if(opponent.health < 1)
			{
				opponent = villainA; //opponent adopts villain properties
				$("#villainA").empty(); //empty villain for move to bottom
				opponentHealth = villainA.health+" HP";
				$("#opponent").html(opponent.html); //add villain to bottom
				$("#opponentText").html("Your Chosen Opponent");
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
				opponent = villainB;
				$("#villainB").empty(); //empty villain for move to bottom
				$("#opponent").html(opponent.html); //add villain to bottom
				$("#opponentText").html("Your Chosen Opponent");
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
				opponent = villainC;
				$("#villainC").empty(); //empty villain for move to bottom
				$("#opponent").html(opponent.html); //add villain to bottom
				$("#opponentText").html("Your Chosen Opponent");
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
			if(opponent.health > 0 && playerChar.health > 0)
			{
				opponent.health -= playerChar.hitPoints;
				//console.log("my opponents health "+opponent.health);
				playerChar.health -= opponent.counter;//updating health of player
				playerCharHealth = playerChar.health+" HP";//updating health of player display variable
				//console.log("my health " + playerChar.health);
				//console.log("my initial hit points "+playerChar.hitPoints);
				//update visual display of player and opponent health;
				//$(".playerHealthDisplay").html(playerChar.health+" HP");
				$("#playerHealthDisplay").html(playerCharHealth);//displaying health

				if(opponent.health > 0 && playerChar.health < 1)
				{
					alert("You have lost your fight. Return to your master for further training.");
					location.reload();
				}

				else if (opponent.health < 1 && playerChar.health > 0)
				{
					alert("Your training has made you stronger, choose your next opponent.");
					$("#opponent").empty(); //empty villain category
				}
				playerChar.hitPoints+=hitInc; //increase hit points
				console.log("my hit points "+playerChar.hitPoints);
			}
			else
			{
				alert("So anxious to fight you haven't even picked an opponent yet. Try fighting something other than the air.");
			}
		}
	);
});





