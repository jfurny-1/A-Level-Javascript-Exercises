let player1, player2;

function preload() {

    cage = loadImage('cage-background.jpg');

    walkingrP1 = loadAni('SpaceManWalk.png', 
                        'SpaceManWalk2.png', 
                        'SpaceManWalk3.png', 
                        'SpaceManWalk4.png', );
    walkingrP1.frameDelay = 5;
}

function setup() {

    // Canvas
    new Canvas(windowWidth, windowHeight);
    
    // Sprites
    player1 = new Sprite();
    
 
    //Sprite Images
    
    player1.image = 'SpaceMan.png'
    player1.img.scale = 0.3;

    //Spawns
    player1.x = 100;
    player1.y = 530;



}

function draw(){
    clear();
    image(cage, 0, 0, windowWidth, windowHeight);

    //Player Speed
    player1.speed = 5;

    //Player1 Movement
    if(kb.pressing('w')) {
        player1.addAni(walkingrP1)
        player1.direction = 0;
    } else if(kb.pressing('s')) {
        player1.direction = 180;
        player1.image = 'SpaceMan.png'
    } else {
        player1.speed = 0;
        player1.image = 'SpaceMan.png'
    }
    
}

