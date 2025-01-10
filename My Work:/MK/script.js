let player1, player2;
function preload() {
    cage = loadImage('cage-background.jpg')
}

function setup() {
    new Canvas(windowWidth, windowHeight)
}
function draw(){
    image(cage, 0, 0, windowWidth, windowHeight)
}