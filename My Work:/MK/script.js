let player1, player2;
function preload() {
    cage = loadImage('cage-background.jpg');
    
}

function setup() {

    // Canvas
    new Canvas(windowWidth, windowHeight);
    
    // Sprites
    player1 = new Sprite();
    
 
    //Sprite Images
    player1.img = 'SpaceMan.png';
    player1.img.scale = 0.3;

    //Spawns
    player1.x = 100;
    player1.y = 530;



}

function draw(){
    clear();
    image(cage, 0, 0, windowWidth, windowHeight);

    //Player Speed
    player1.speed = 10;

    //Player1 Movement
    if(kb.pressing('w')) {
        player1.direction = 0;
    } else if(kb.pressing('s')) {
        player1.direction = 180;
    } else {
        player1.speed = 0;
    }

    if(kb.holding('w')) {
        player1.img = 'SpaceManWalk1.png';
        player1.img.scale = 0.3;
    }
}
