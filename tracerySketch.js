//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(212,226,235,50);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"origin": [
		"#meandering# in the #liminal# #space# we feel #feeling# for #time# of our #meaningful# lives. #exclaim#."
	],
	"space": [
		"airport",
		"waiting room",
		"elevator",
		"childhood homes",
		"coastal landscape",
		"hallway",
		"street",
		"hospital"
	],
	"feeling": [
		"grief",
		"optimism",
		"anxiety",
		"hope",
		"wonder",
		"loss",
		"fear",
		"deep existential dread",
		"a nagging feeling of ... something",
		"apprehension",
		"guilt",
		"",
		"unsettled",
		"disoriented",
		"displaced",
		"dizziness",
		"like lost souls",
		"like hungry ghosts",
		"expansion",
		"unity",
		"invisible",
		"like unmoored souls",
		"connected",
		"floaty",
		"grounded",
		"like we are no one",
		"like we are everyone",
		"like we are no one and everyone"
	],
	"time": [
		"-EVER",
		"no time at all",
		"seconds",
		"hours",
		"days",
		"months",
		"years",
		"decades",
		"centuries",
		"moments",
		"a blip on the radar",
		"an iota of time",
		"a neverending moment",
		"a brief eternity",
		"an eternity",
		"what feels like forever",
		"an undetermined amount of time",
		"exceptional amount of time",
		"hours and hours and hours",
		"mere seconds",
		"the longest day"
	],
	"liminal": [
		"liminal",
		"claustrophobic",
		"labyrinthine",
		"lush",
		"cold",
		"busy",
		"empty",
		"abandoned",
		"chaotic",
		"haunted",
		"mystical",
		"spooky",
		"crowded",
		"deserted",
		"grey",
		"bluegreen",
		"dark",
		"sunny"
	],
	"meandering": [
		"Meandering",
		"Wandering",
		"Running",
		"Trapped",
		"Wondering",
		"Pondering",
		"Sitting",
		"Pacing",
		"Contained",
		"Waiting",
		"Traveling",
		"Walking",
		"Standing",
		"Ruminating",
		"Reading",
		"Navigating"
	],
	"meaningful": [
		"meaningful",
		"hopeful",
		"nasty, brutish, and short",
		"brief and gorgeous",
		"wondrous",
		"magical",
		"glorious",
		"hopeless",
		"full and happy",
		"miserable and depressing"
	],
	"exclaim": [
		"Sigh",
		"WHOA",
		"Oh gheesh",
		"...",
		"Breath deep",
		"Holy shit",
		"So many thoughts",
		"Cue existential crisis",
		"Wow.",
		"Fear creeps in.",
		"Heart rate quickens",
		"What do we do?"
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = random(15,50);
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Courier");
		//This centers the text on the click
		textAlign(CENTER, CENTER);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill(99,102,106);
		//This positions the text
    text(this.text, this.x, this.y);
  }
}