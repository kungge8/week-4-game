var COMBATRPGJS = {
	heroes:[
		{name: "Hero A",
		health: 100,
		atk: 6,
		img: "assets/images/Ursa_icon.png"},
		{name: "Hero B",
		health: 100,
		atk: 6,
		img: "assets/images/Ursa_icon.png"},
		{name: "Hero C",
		health: 100,
		atk: 6,
		img: "assets/images/Ursa_icon.png"},
		{name: "Hero D",
		health: 100,
		atk: 6,
		img: "assets/images/Ursa_icon.png"},
		{name: "Hero E",
		health: 100,
		atk: 6,
		img: "assets/images/Ursa_icon.png"}
	],
	smEnemy:[
		{name: "sm A",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "sm B",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "sm C",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "sm D",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "sm E",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"}
	],
	mdEnemy:[
		{name: "md A",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "md B",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "md C",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "md D",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "md E",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"}
	],
	lgEnemy:[
		{name: "lg A",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "lg B",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "lg C",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "lg D",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"},
		{name: "lg E",
		health: 20,
		atk: 5,
		img: "assets/images/Ursa_icon.png"}
	],
	Roshan:{
		name: "Roshan",
		health: 100,
		atk: 5,
		img: "assets/images/Roshan_icon.png"},
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
			temp.append(temp2);
			temp2 = $("<div>");
			temp2.addClass("stateList");
			temp2.html("Health: " + o[0].health + "<br>Attack: " + o[0].atk);
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
				temp.append(temp2);
				temp2 = $("<div>");
				temp2.addClass("stateList");
				temp2.html("Health: " + o[0].health + "<br>Attack: " + o[0].atk);
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
		temp.addClass("col-xs-offset-1");
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
		herostate.html("Health: " + COMBATRPGJS.heroHealth + "<br>Attack: " + COMBATRPGJS.heroAtk);
		enemystate.html("Health: " + COMBATRPGJS.enemyHealth + "<br>Attack: " + COMBATRPGJS.Enemy.atk);

		if (COMBATRPGJS.heroHealth <= 0){
			// console.log("lost");
			tempString = "You lost!";
			temp.text(tempString);
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