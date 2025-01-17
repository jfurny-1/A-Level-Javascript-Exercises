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
    walking()
}

function walking() {
    while (kb.pressing('w')) {
        for(let i = 1; i > 11; i++){
         if(i = 1){
            player1.img = 'SpaceManWalk1.png'
            player1.img.scale = 0.3;
         } else if(i = 2){
            player1.img = 'SpaceManWalk2.png'
            player1.img.scale = 0.3;
         } else if(i = 3){
            player1.img = 'SpaceManWalk3.png'
            player1.img.scale = 0.3;
         } else if(i = 4){
            player1.img = 'SpaceManWalk4.png'
            player1.img.scale = 0.3;
         } else if(i = 5){
            player1.img = 'SpaceManWalk5.png'
            player1.img.scale = 0.3;
         } else if(i = 6){
            player1.img = 'SpaceManWalk6.png'
            player1.img.scale = 0.3;
         } else if(i = 7){
            player1.img = 'SpaceManWalk7.png'
            player1.img.scale = 0.3;
         } else if(i = 8){
            player1.img = 'SpaceManWalk8.png'
            player1.img.scale = 0.3;
         } else if(i = 9){
            player1.img = 'SpaceManWalk9.png'
            player1.img.scale = 0.3;
         } else if(i = 10){
            player1.img = 'SpaceManWalk10.png'
            player1.img.scale = 0.3;
         } else if(i = 11){
            player1.img = 'SpaceManWalk11.png'
            player1.img.scale = 0.3;
            i = 1;
         }
        }
        
    }
}