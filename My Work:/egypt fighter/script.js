let player1;
let anubisBoss;

function preload() {
    desert = loadImage('desertBackground.png')
}

function setup(){
// Canvas
new Canvas(windowWidth, windowHeight);

// Charaters
player1 = new Sprite();
anubisBoss = new Sprite();

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
    player1.direction = 180;
    player1.speed = 4;
} else {
    player1.speed = 0;
}


}