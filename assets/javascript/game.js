var COMBATRPGJS = {
	heroes:[
		{name: "Ursa",
		health: 100,
		atk: 6,
		img: "assets/images/Ursa_icon.png"},
		{name: "Troll Warlord",
		health: 80,
		atk: 8,
		img: "assets/images/Troll_Warlord_icon.png"},
		{name: "Lifestealer",
		health: 150,
		atk: 2,
		img: "assets/images/Lifestealer_icon.png"},
		{name: "Lone Druid",
		health: 130,
		atk: 4,
		img: "assets/images/Lone_Druid_icon.png"},
		{name: "Lycan",
		health: 60,
		atk: 10,
		img: "assets/images/Lycan_icon.png"}
	],
	smEnemy:[
		{name: "Kobold Foreman",
		health: 20,
		atk: 5,
		img: "assets/images/Kobold_Foreman_model.png"},
		{name: "Ghost",
		health: 10,
		atk: 10,
		img: "assets/images/Ghost_model.png"},
		{name: "Fell Spirit",
		health: 30,
		atk: 2,
		img: "assets/images/Fell_Spirit_model.png"},
		{name: "Harpy Stormcrafter",
		health: 5,
		atk: 15,
		img: "assets/images/Harpy_Stormcrafter_model.png"},
		{name: "Vhoul Assassin",
		health: 40,
		atk: 5,
		img: "assets/images/Vhoul_Assassin_model.png"}
	],
	mdEnemy:[
		{name: "Centaur Conqueror",
		health: 25,
		atk: 2,
		img: "assets/images/Centaur_Conqueror_model.png"},
		{name: "Alpha Wolf",
		health: 20,
		atk: 10,
		img: "assets/images/Alpha_Wolf_model.png"},
		{name: "Satyr Mindstealer",
		health: 60,
		atk: 5,
		img: "assets/images/Satyr_Mindstealer_model.png"},
		{name: "Ogre Bruiser",
		health: 150,
		atk: 3,
		img: "assets/images/Ogre_Bruiser_model.png"},
		{name: "Mud Golem",
		health: 180,
		atk: 5,
		img: "assets/images/Mud_Golem_model.png"}
	],
	lgEnemy:[
		{name: "Centaur Conqueror",
		health: 25,
		atk: 2,
		img: "assets/images/Centaur_Conqueror_model.png"},
		{name: "Satyr Tormentor",
		health: 200,
		atk: 5,
		img: "assets/images/Satyr_Tormenter_model.png"},
		{name: "Hellbear Smasher",
		health: 350,
		atk: 3,
		img: "assets/images/Hellbear_Smasher_model.png"},
		{name: "Wildwing Ripper",
		health: 100,
		atk: 15,
		img: "assets/images/Wildwing_Ripper_model.png"},
		{name: "Dark Troll Summoner",
		health: 300,
		atk: 5,
		img: "assets/images/Dark_Troll_Summoner_model.png"}
	],
	Roshan:{
		name: "Roshan",
		health: 300,
		atk: 15,
		img: "assets/images/Roshan_model.png"},
	centerDiv: $(".cholder"),
	Hero: {},
	Enemy: {},
	enemyTier: 0,
	heroHealth: 0,
	heroAtk: 0,
	enemyHealth: 0,
	initialization: function (){
		console.log("initialization");
		COMBATRPGJS.enemyTier = 0;
		COMBATRPGJS.heroHealth = 0;
		COMBATRPGJS.enemyHealth = 0;
		COMBATRPGJS.heroAtk = 0;
		$(".topUI").empty();
		COMBATRPGJS.centerDiv.empty();
		COMBATRPGJS.generation(COMBATRPGJS.heroes, COMBATRPGJS.heroSelection);
	},
	randomnum: function(array){
		return Math.floor(Math.random() * array.length);
	},
	generation: function (choices, type){
		console.log("generation entered");
		//populate center div with choices from given array
		// this.centerDiv.empty();
		let c = [];
		let o;
		let temp = $("<div>");
		let temp2;
		for (let i = 0; i < choices.length; i++){
			c.push(choices[i]);
		}
		if (this.enemyTier === 3){
			let o = c.splice(this.randomnum(c),1);
			temp.addClass("col-xs-offset-1 col-xs-3 choice");
			// console.log("What is o");
			// console.log(o);
			temp.attr("data-value", o[0].name);
			temp.data("char", o[0]);
			temp.on("click",type);
			temp2 = $("<img>");
			temp2.attr("src", o[0].img);
			temp2.addClass("selectionIcon");
			temp.append(temp2);
			temp2 = $("<div>");
			temp2.addClass("stateList");
			temp2.html(o[0].name + "<br>Health: " + o[0].health + "<br>Attack: " + o[0].atk);
			temp.append(temp2);
			this.centerDiv.append(temp);	
		} else {
			for (let i = 0; i < 3; i++){
				let o = c.splice(this.randomnum(c),1);
				let temp = $("<div>");
				if(i === 0){
					temp.addClass("col-xs-3 choice");
				}else{		
					temp.addClass("col-xs-offset-1 col-xs-3 choice");
				}
				// console.log("What is o");
				// console.log(o);
				temp.attr("data-value", o[0].name);
				temp.data("char", o[0]);
				temp.on("click",type);
				temp2 = $("<img>");
				temp2.attr("src", o[0].img);
				temp2.addClass("selectionIcon");
				temp.append(temp2);
				temp2 = $("<div>");
				temp2.addClass("stateList");
				temp2.html(o[0].name + "<br>Health: " + o[0].health + "<br>Attack: " + o[0].atk);
				temp.append(temp2);
				this.centerDiv.append(temp);
			}
		}			
	},
	readProperties: function (o){
		for (p in o){
			console.log ("Obj." + p + " = " + o[p]);
		}
	},
	heroSelection: function (event) {
		console.log("Hero Selection entered");
		// console.log(this);
		COMBATRPGJS.Hero = $(this).data("char");
		//console.log(COMBATRPGJS.Hero);
		COMBATRPGJS.heroHealth = $(this).data("char").health;
		COMBATRPGJS.heroAtk = $(this).data("char").atk;
		$(this).off();
		$(this).addClass("hero col-xs-offset-1");
		$(this).detach().appendTo(".topUI");
		COMBATRPGJS.centerDiv.empty();
		COMBATRPGJS.generation(COMBATRPGJS.smEnemy,COMBATRPGJS.enemySelection);
	},
	enemySelection: function (event) {
		console.log("Enemy Selection entered");
		//console.log(this);
		COMBATRPGJS.Enemy = $(this).data("char");
		COMBATRPGJS.enemyHealth = $(this).data("char").health;
		//console.log(COMBATRPGJS.Enemy);
		$(this).off();
		$(this).addClass("enemy col-xs-offset-1");
		$(this).detach().appendTo(".topUI");
		COMBATRPGJS.centerDiv.empty();
		$(".hero").appendTo(COMBATRPGJS.centerDiv);
		$(this).detach().appendTo(COMBATRPGJS.centerDiv);
		let temp = $("<button>");
		temp.text("Fight!");
		temp.addClass("col-xs-offset-1 b");
		temp.on("click",COMBATRPGJS.fight);
		temp.appendTo(COMBATRPGJS.centerDiv);
		temp = $("<div>");
		temp.addClass("fightcol col-xs-offset-1 col-xs-3");
		temp.appendTo(COMBATRPGJS.centerDiv);		
	},
	fight: function(){
		//Run a combat round ($(".hero").data("char"),$(this).data("char"))
		console.log("Combat entered");
		// console.log(COMBATRPGJS.Hero);
		// console.log(COMBATRPGJS.Enemy);
		let herostate = $(".hero .stateList");
		let enemystate = $(".enemy .stateList");
		let temp = $("<p>");
		temp.addClass("fightLog");
		temp.appendTo(".fightcol");
		let tempString = "";

		COMBATRPGJS.heroHealth = COMBATRPGJS.heroHealth - COMBATRPGJS.Enemy.atk;
		COMBATRPGJS.enemyHealth = COMBATRPGJS.enemyHealth - COMBATRPGJS.heroAtk;
		let tempatk = COMBATRPGJS.heroAtk;
		COMBATRPGJS.heroAtk = Math.floor(COMBATRPGJS.heroAtk * 1.5);
		console.log("floored atk: " + COMBATRPGJS.heroAtk);
		// COMBATRPGJS.readProperties(COMBATRPGJS.Hero);
		// COMBATRPGJS.readProperties(COMBATRPGJS.Enemy);	
		//console.log(COMBATRPGJS.Hero.health);
		herostate.html(COMBATRPGJS.Hero.name + "<br>Health: " + COMBATRPGJS.heroHealth + "<br>Attack: " + COMBATRPGJS.heroAtk);
		enemystate.html(COMBATRPGJS.Enemy.name + "<br>Health: " + COMBATRPGJS.enemyHealth + "<br>Attack: " + COMBATRPGJS.Enemy.atk);

		if (COMBATRPGJS.heroHealth <= 0){
			// console.log("lost");
			tempString = "You lost!";
			temp.text(tempString);
			$(".topUI").empty();
			$(".hero").detach().prependTo(".topUI");
			COMBATRPGJS.centerDiv.empty();
			temp.appendTo(COMBATRPGJS.centerDiv);
			temp = $("<button>");
			temp.on("click", COMBATRPGJS.initialization);
			temp.text("Play again!");
			temp.addClass("b");
			temp.appendTo(COMBATRPGJS.centerDiv);
		} else if (COMBATRPGJS.enemyHealth <= 0){
			if (COMBATRPGJS.Enemy.name === "Roshan"){
				// console.log("Game won!");
				tempString = "You won!";
				$(".topUI").empty();
				$(".hero").detach().prependTo(".topUI");
				COMBATRPGJS.centerDiv.empty();
				COMBATRPGJS.enemyTier++;
				temp.text(tempString);
				temp.appendTo(COMBATRPGJS.centerDiv);
				temp = $("<button>");
				temp.on("click", COMBATRPGJS.initialization);
				temp.text("Play again!");
				temp.addClass("b");
				temp.appendTo(COMBATRPGJS.centerDiv);
			} else {
				// console.log("won");
				tempString = "You won!";
				$(".topUI").empty();
				$(".hero").detach().prependTo(".topUI");
				COMBATRPGJS.centerDiv.empty();
				COMBATRPGJS.enemyTier++;
				temp.text(tempString);
				temp.appendTo(COMBATRPGJS.centerDiv);
				temp = $("<button>");
				temp.on("click", COMBATRPGJS.tierSelector);
				temp.text("Next round!");
				temp.addClass("b");
				temp.appendTo(COMBATRPGJS.centerDiv);
			}
		} else {
			tempString = "You fought! You did " + tempatk + " damage. You took " + COMBATRPGJS.Enemy.atk + " damage."; 
			temp.text(tempString);
		}
	},
	updateStats: function (){
		console.log ("updateStats entered");
		console.log (this.Hero);
		console.log (this.Enemy);
	},
	tierSelector: function (){
		console.log("tierSelector entered");
		// console.log(COMBATRPGJS);
		// console.log(COMBATRPGJS.enemyTier);

		switch (COMBATRPGJS.enemyTier) {
			case 1:
				// console.log("md tier");
				COMBATRPGJS.centerDiv.empty();
				COMBATRPGJS.generation(COMBATRPGJS.mdEnemy,COMBATRPGJS.enemySelection);
				break;
			case 2:
				// console.log("lg tier");
				COMBATRPGJS.centerDiv.empty();
				COMBATRPGJS.generation(COMBATRPGJS.lgEnemy, COMBATRPGJS.enemySelection);
				break;
			case 3:
				// console.log("rosh tier");
				COMBATRPGJS.centerDiv.empty();
				console.log([COMBATRPGJS.Roshan]);
				COMBATRPGJS.generation([COMBATRPGJS.Roshan], COMBATRPGJS.enemySelection);
				break;
		}
	}
}

COMBATRPGJS.initialization();
// var bool = true;
// document.onkey = if (bool){
// 	console.log("true!");
// } else {
// 	console.log("false!");
// };
// COMBATRPGJS.readProperties(COMBATRPGJS);
// COMBATRPGJS.readProperties(COMBATRPGJS.fighter5);