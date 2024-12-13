let player1, player2;
let ball;
let stopper1, stopper2, stopper3, stopper4

function setup() {

    new Canvas(windowWidth, windowHeight);

    player1 = new Sprite();
    player1.height = 50;
    player1.width = 10;

    player2 = new Sprite();
    player2.height = 50;
    player2.width = 10;

    ball = new Sprite();
    ball.r = 8;

    stopper1 = new Sprite();
    stopper1.height = 5;
    stopper1.width = 10;
    stopper1.x = 10;
    stopper1.y = windowHeight;
    stopper1.collider = 'static';

    stopper2 = new Sprite();
    stopper2.height = 5;
    stopper2.width = 10;
    stopper2.x = 10;
    stopper2.y = 0;
    stopper2.collider = 'static';

    stopper3 = new Sprite();
    stopper3.height = 5;
    stopper3.width = 10;
    stopper3.x = 1540;
    
    stopper3.collider = 'static';

    stopper4 = new Sprite();
    stopper4.height = 5;
    stopper4.width = 10;
    stopper4.x = 1500;
    stopper4.y = 0
    stopper4.collider = 'static';

    player1.x = 10;
    player2.x = windowWidth -10;


}

function draw() {

    background('black');

    ball.color = ('white');
    player1.color = ('white');
    player2.color = ('white');
    stopper1.color = ('white');
    stopper2.color = ('white');
    stopper3.color = ('white');
    stopper4.color = ('white');

    player1.speed = 5;
    player2.speed = 5;
   

    if(kb.pressing('up')) {
        player1.direction = -90;
    } else if(kb.pressing('down')) {
        player1.direction = 90;
    } else {
        player1.speed = 0;
    }

    if(kb.pressing('E')) {
        player2.direction = -90;
    } else if(kb.pressing('D')) {
        player2.direction = 90;
    } else {
        player2.speed = 0;
    }
    
}