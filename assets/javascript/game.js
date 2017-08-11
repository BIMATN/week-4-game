//My Star Wars RPG Code

//Variables and Objects

var obiHealth=120;
var lukeHealth=100;
var sidHealth=180;
var maulHealth=150;

var obi = 
{
	name: "Obi Wan Kenobi",
	health: 120,
	hitPoints: 12,
	counter: 12,
	html: "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good></h3></div>"
}

var luke = 
{
	name: "Luke Skywalker",
	health: 100,
	hitPoints: 10,
	counter: 10,
	html: "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good>"+lukeHealth+"</h3></div>"

}

var sid = 
{
	name: "Darth Sidious",
	health: 180,
	hitPoints: 15,
	counter: 15,
	html: "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad>"+sidHealth+"</h3></div>"

}

var maul = 
{
	name: "Darth Maul",
	health: 150,
	hitPoints: 18,
	counter: 18,
	html: "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad>"+maulHealth+"</h3></div>"

}

var hitInc;

//Future Objects
var villainA; //future villain
var villainB; //future villain
var villainC; //future villain
var playerChar; //future player
var opponent = {health:0}; //future opponent with initial health set to 0 to accomodate condition statements below


//psuedo
/*
1. build variables and objects
2. when player chooses character other choices disappear
3. other choices become villains
4. player chooses first villain
5. player attacks villain

*/
$("#pickObi").html(obi.html);
$("#pickLuke").html(luke.html);
$("#pickDarthSid").html(sid.html);
$("#pickDarthMaul").html(maul.html);


$(document).ready(function(){

//Select Player Character
	
$('#obiPic').click(function()
		{
			$('#obiPic').off("click");//disable click event
			playerChar = obi;
			hitInc = obi.hitPoints;
			playerChar.html = "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good>"+playerChar.health+"</h3></div>";
			$("#pickObi").html(playerChar.html);
			$("#pickLuke").empty(); //empty html contents
			$("#pickDarthSid").empty();	//empty html contents
			$("#pickDarthMaul").empty();	//empty html contents
			$("#yourCharBottom").empty();	//empty html contents
			$("#yourCharTop").html("Your Chosen Fighter"); //Change location from bottom to top using trickery
			villainA=luke; //assign villain objects to villains
			villainB=sid; //assign villain objects to villains
			villainC=maul; //assign villain objects to villains
			villainA.html = "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good>"+villainA.health+"</h3></div>";
			$("#villainA").html(villainA.html); //load villains
			villainB.html = "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad>"+villainB.health+"</h3></div>";
			$("#villainB").html(villainB.html); //load villains
			villainC.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad>"+villainC.health+"</h3></div>";
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);
$('#lukePic').click(function()
		{
			$('#lukePic').off("click");//disable click event
			playerChar=luke;
			hitInc = luke.hitPoints;
			playerChar.html = "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good>"+playerChar.health+"</h3></div>";
			$("#pickLuke").html(playerChar.html);
			$("#pickObi").empty();
			$("#pickDarthSid").empty();
			$("#pickDarthMaul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter");
			villainA=obi;
			villainB=sid;
			villainC=maul;
			villainA.html = "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good>"+villainA.health+"</h3></div>";
			$("#villainA").html(villainA.html); //load villains
			villainB.html = "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad>"+villainB.health+"</h3></div>";
			$("#villainB").html(villainB.html); //load villains
			villainC.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad>"+villainC.health+"</h3></div>";
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);
$('#sidPic').click(function()
		{
			$('#sidPic').off("click");//disable click event
			playerChar=sid;
			hitInc = sid.hitPoints;
			playerChar.html = "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad>"+playerChar.health+"</h3></div>";
			$("#pickDarthSid").html(playerChar.html);
			$("#pickObi").empty();
			$("#pickLuke").empty();
			$("#pickDarthMaul").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter");
			villainA=obi;
			villainB=luke;
			villainC=maul;
			villainA.html = "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good>"+villainA.health+"</h3></div>";
			$("#villainA").html(villainA.html); //load villains
			villainB.html = "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good>"+villainB.health+"</h3></div>";
			$("#villainB").html(villainB.html); //load villains
			villainC.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad>"+villainC.health+"</h3></div>";
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);
$('#maulPic').click(function()
		{
			$('#maulPic').off("click");//disable click event
			playerChar=maul;
			hitInc = maul.hitPoints;
			playerChar.html = "<div class=charBoxBad><img src=assets/images/darthMaul.jpeg class=img-responsive img-thumbnail id=maulPic alt=Darth Maul><h3 class=banner1Bad>Darth Maul</h3><h3 class=banner2Bad>"+playerChar.health+"</h3></div>";
			$("#pickDarthMaul").html(playerChar.html);
			$("#pickObi").empty();
			$("#pickLuke").empty();
			$("#pickDarthSid").empty();
			$("#yourCharBottom").empty();
			$("#yourCharTop").html("Your Chosen Fighter");
			villainA=obi;
			villainB=luke;
			villainC=sid;
			villainA.html = "<div class=charBoxGood><img src=assets/images/masterObiwan.jpg class=img-responsive img-thumbnail id=obiPic alt=Obi Wan Kenobi><h3 class=banner1Good>Master Obiwan</h3><h3 class=banner2Good>"+villainA.health+"</h3></div>";
			$("#villainA").html(villainA.html); //load villains
			villainB.html = "<div class=charBoxGood><img src=assets/images/masterLuke.jpg class=img-responsive img-thumbnail id=lukePic alt=Luke Skywalker><h3 class=banner1Good>Master Luke</h3><h3 class=banner2Good>"+villainB.health+"</h3></div>";
			$("#villainB").html(villainB.html); //load villains
			villainC.html = "<div class=charBoxBad><img src=assets/images/darth_sidious.jpg class=img-responsive img-thumbnail id=sidPic alt=Darth Sidious><h3 class=banner1Bad>Darth Sidious</h3><h3 class=banner2Bad>"+villainC.health+"</h3></div>";
			$("#villainC").html(villainC.html); //load villains
			$("#chooseVillain").html("Choose Your Opponent"); //Choose Villain Text
		}
	);

//Select Villain to Attack

$('#villainA').click(function()
		{
			if(opponent.health < 1)
			{
				opponent = villainA; //opponent adopts villain properties
				$("#villainA").empty(); //empty villain for move to bottom
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
				alert("So anxious to fight you haven't even picked an opponent yet. Try fighting something other than the air.");
			}
		}
	);
});





