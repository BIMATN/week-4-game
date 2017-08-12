//My Star Wars RPG Code

//Variables and Objects

//objects
var obi = 
{
	name: "Obi Wan Kenobi",
	health: 120,
	hitPoints: 12,
	counter: 12,
	playerHtml: "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1>Master Obiwan</h3><h3 class=playerHealth>120 HP</h3></div>",
	villainHtml: "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1>Master Obiwan</h3><h3 class=banner2>120 HP</h3></div>",
	opponentHtml: "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1>Master Obiwan</h3><h3 class=opponentHealth>120 HP</h3></div>"
}

var luke = 
{
	name: "Luke Skywalker",
	health: 100,
	hitPoints: 10,
	counter: 10,
	playerHtml: "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1>Master Luke</h3><h3 class=playerHealth>100 HP</h3></div>",
	villainHtml: "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1>Master Luke</h3><h3 class=banner2>100 HP</h3></div>",
	opponentHtml: "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1>Master Luke</h3><h3 class=opponentHealth>100 HP</h3></div>"
}

var sid = 
{
	name: "Darth Sidious",
	health: 180,
	hitPoints: 15,
	counter: 15,
	playerHtml: "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1>Darth Sidious</h3><h3 class=playerHealth>180 HP</h3></div>",
	villainHtml: "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1>Darth Sidious</h3><h3 class=banner2>180 HP</h3></div>",
	opponentHtml: "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1>Darth Sidious</h3><h3 class=opponentHealth>180 HP</h3></div>"
}

var maul = 
{
	name: "Darth Maul",
	health: 150,
	hitPoints: 18,
	counter: 18,
	playerHtml: "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1>Darth Maul</h3><h3 class=playerHealth>150 HP</h3></div>",
	villainHtml: "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1>Darth Maul</h3><h3 class=banner2>150 HP</h3></div>",
	opponentHtml: "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1>Darth Maul</h3><h3 class=opponentHealth>150 HP</h3></div>"
}

//Future Objects
var villainA; //future villain
var villainB; //future villain
var villainC; //future villain
var player; //future player
var opponent = {health:0}; //future opponent with initial health set to 0 to accomodate condition statements below

//variables
var hitInc;

//Begin Game Activity

$(document).ready(function(){

//Select Player Character
	
$('#obiPic').click(function()
		{
			$('#obiPic').off("click");//disable click event
			player = obi;
			hitInc = obi.hitPoints;
			$("#pickLuke").empty(); //empty html contents so that character disapears
			$("#pickDarthSid").empty();	//empty html contents so that character disapears
			$("#pickDarthMaul").empty();	//empty html contents so that character disapears
			$("#yourCharBottom").empty();	//empty html contents so that text disapears
			$("#yourCharTop").html("Your Chosen Fighter:"); //Change text location from bottom to top using trickery
			$("#pickObi").html(player.playerHtml);
			$(".playerHealth").html(player.health+" HP");
			villainA=luke; //assign villain objects to villains
			villainB=sid; //assign villain objects to villains
			villainC=maul; //assign villain objects to villains
			$("#villainA").html(villainA.villainHtml); //load villains
			$("#villainB").html(villainB.villainHtml); //load villains
			$("#villainC").html(villainC.villainHtml); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);
$('#lukePic').click(function()
		{
			$('#lukePic').off("click");//disable click event
			player = luke;
			hitInc = luke.hitPoints;
			$("#pickObi").empty();
			$("#pickDarthSid").empty();
			$("#pickDarthMaul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter:");
			$("#pickLuke").html(player.playerHtml);
			$(".playerHealth").html(player.health+" HP");//Update health html to player object health
			villainA=obi;
			villainB=sid;
			villainC=maul;
			$("#villainA").html(villainA.villainHtml); //load villains
			$("#villainB").html(villainB.villainHtml); //load villains
			$("#villainC").html(villainC.villainHtml); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);
$('#sidPic').click(function()
		{
			$('#sidPic').off("click");//disable click event
			player=sid;
			hitInc = sid.hitPoints;
			$("#pickObi").empty();
			$("#pickLuke").empty();
			$("#pickDarthMaul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter:");
			$("#pickDarthSid").html(player.playerHtml);
			$(".playerHealth").html(player.health+" HP");//Update health html to player object health
			villainA=obi;
			villainB=luke;
			villainC=maul;
			$("#villainA").html(villainA.villainHtml); //load villains
			$("#villainB").html(villainB.villainHtml); //load villains
			$("#villainC").html(villainC.villainHtml); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);
$('#maulPic').click(function()
		{
			$('#maulPic').off("click");//disable click event
			player=maul;
			hitInc = maul.hitPoints;
			$("#pickObi").empty();
			$("#pickLuke").empty();
			$("#pickDarthSid").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter:");
			$("#pickDarthMaul").html(player.playerHtml);
			$(".playerHealth").html(player.health+" HP");//Update health html to player object health
			villainA=obi;
			villainB=luke;
			villainC=sid;
			$("#villainA").html(villainA.villainHtml); //load villains
			$("#villainB").html(villainB.villainHtml); //load villains
			$("#villainC").html(villainC.villainHtml); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);

//Select Villain to Attack and add them to opponent object and display opponent

$('#villainA').click(function()
		{
			if(opponent.health < 1)
			{
				opponent = villainA; //opponent adopts villain object properties
				$("#villainA").empty(); //empty villain for move to bottom
				opponentHealth = villainA.health+" HP";
				$("#opponentText").html("Your Chosen Opponent:");
				$("#opponent").html(opponent.opponentHtml); //add villain to bottom
				$("#attackButton").html("<button id = attack><h3 class=banner2>Attack</h3></button>");
			}
			else
			{
				alert("You can't seriously believe you are powerful enough to face two enemies. Focus on the one for now.");
			}
		}
	);
$('#villainB').click(function()
		{
			if(opponent.health < 1)
			{
				opponent = villainB;
				$("#villainB").empty(); //empty villain for move to bottom
				$("#opponentText").html("Your Chosen Opponent:");
				$("#opponent").html(opponent.opponentHtml); //add villain to bottom
				$("#attackButton").html("<button id = attack><h3 class=banner2>Attack</h3></button>");
			}
			else
			{
				alert("You can't seriously believe you are powerful enough to face two enemies. Focus on the one for now.");
			}
		}
	);
$('#villainC').click(function()
		{
			if(opponent.health < 1)
			{
				opponent = villainC;
				$("#villainC").empty(); //empty villain for move to bottom
				$("#opponentText").html("Your Chosen Opponent:");
				$("#opponent").html(opponent.opponentHtml); //add villain to bottom
				$("#attackButton").html("<button id=attack><h3 class=banner2>Attack</h3></button>");
			}
			else
			{
				alert("You can't seriously believe you are powerful enough to face two enemies. Focus on the one for now.");
			}
		}
	);


//Attack Process
$("#attackButton").click(function()
		{
			if(opponent.health > 0 && player.health > 0)
			{
				opponent.health -= player.hitPoints;//update health of opponent
				
				player.health -= opponent.counter;//updating health of player
			
				$(".opponentHealth").html(opponent.health+" HP");//Update display health of opponent
				$(".playerHealth").html(player.health+" HP");//Update display health of player

				if(opponent.health > 0 && player.health < 1)
				{
					alert("You have lost your fight. Return to your master for further training.");
					location.reload();
				}

				else if (opponent.health < 1 && player.health > 0)
				{
					alert("Your training has made you stronger, choose your next opponent.");
					$("#opponent").empty(); //empty villain category
				}
				player.hitPoints+=hitInc; //increase hit points
			}
			else
			{
				alert("So anxious to fight you haven't even picked an opponent yet. Try fighting something other than the air.");
			}
		}
	);
});