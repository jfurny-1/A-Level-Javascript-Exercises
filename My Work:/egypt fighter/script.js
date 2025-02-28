let player1;
let sandBoss;

function preload() {
desert = loadImage('desertBackground.png')

// Walking Animation
walkingP1 = loadAni('player1Walk1.png',
'player1.png',
'player1Walk2.png',
'player1.png', );
walkingP1.frameDelay = 3;
}

function setup(){
// Canvas
new Canvas(windowWidth, windowHeight);

// Charaters
player1 = new Sprite();
player1.image = 'player1.png';
player1.image.scale = 0.7;
player1.x = 125;
player1.y = 470;

sandBoss = new Sprite();
sandBoss.image = 'sandBoss.png';
sandBoss.image.scale = 0.8;
sandBoss.x = 1430;
sandBoss.y = 435;


}

function draw(){
// Background 
clear();
image(desert, 0, 0, windowWidth, windowHeight);

// Movement
if(kb.pressing('d')) {
    player1.direction = 0;
    player1.speed = 4;
} else if(kb.pressing('a')) {
    player1.addAni(walkingP1)
    player1.direction = 180;
    player1.speed = 4;
} else {
    player1.speed = 0;
}


}

