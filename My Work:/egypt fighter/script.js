

function preload() {
    desert = loadImage('desertBackground.png')
}

function setup(){
// Canvas
new Canvas(windowWidth, windowHeight);

}

function draw(){
    clear();
    image(desert, 0, 0, windowWidth, windowHeight);
}