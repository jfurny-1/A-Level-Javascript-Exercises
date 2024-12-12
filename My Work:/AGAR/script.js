
let player1;



function setup() {
	new Canvas(windowWidth, windowHeight);
	
	player1 = new Sprite(); 
	player1.diameter = 50;

	
}

function preload() {
	player1 = loadImage('New Piskel.gif');
}

function movement() {
	if (kb.pressing('a')) 
player1.vel.x = -5;
	else if (kb.pressing('d'))
player1.vel.x = 5;
	else 
player1.vel.x = 0;

    if (kb.pressing('w'))
player1.vel.y = 5;
    else if (kb.pressing('s'))
player1.vel.y = -5;
	else
player1.vel.y = 0;

}

function draw() {
	background('blue');
	Image(player1, 0,0);
}