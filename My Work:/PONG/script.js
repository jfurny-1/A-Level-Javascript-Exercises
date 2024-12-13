let player1, player2;
let ball;
let stopper1, stopper2, stopper3, stopper4
let scoreBox1, scoreBox2;
let barrierT, barrierB;
let scoreP1 = 0, scoreP2 = 0;
function setup() {

    new Canvas(windowWidth, windowHeight);

    player1 = new Sprite();
    player1.height = 50;
    player1.width = 10;
    player1.collider = 'k';
    player1.x = 10;

    player2 = new Sprite();
    player2.height = 50;
    player2.width = 10;
    player2.collider = 'k';
    player2.x = windowWidth -10;

    ball = new Sprite();
    ball.r = 8;
    ball.collider = 'd';

    stopper1 = new Sprite();
    stopper1.height = 5;
    stopper1.width = 10;
    stopper1.x = 10;
    stopper1.y = windowHeight;
    stopper1.collider = 's';

    stopper2 = new Sprite();
    stopper2.height = 5;
    stopper2.width = 10;
    stopper2.x = 10;
    stopper2.y = 0;
    stopper2.collider = 's';

    stopper3 = new Sprite();
    stopper3.height = 5;
    stopper3.width = 10;
    stopper3.x = windowWidth -10;
    stopper3.y = windowHeight;
    stopper3.collider = 's';

    stopper4 = new Sprite();
    stopper4.height = 5;
    stopper4.width = 10;
    stopper4.x = windowWidth -10;
    stopper4.y = 0
    stopper4.collider = 's';

    scoreBox1 = new Sprite();
    scoreBox1.textsize = 40;
    scoreBox1.text = scoreP1;
    scoreBox1.x = windowWidth /4;
    scoreBox1.y = windowHeight /8;
    scoreBox1.collider = 'n';

    scoreBox2 = new Sprite();
    scoreBox2.textsize = 40;
    scoreBox2.text = scoreP2;
    scoreBox2.x = (windowWidth /4) *3;
    scoreBox2.y = windowHeight /8;
    scoreBox2.collider = 'n';

    barrierT = new Sprite();
    barrierT.height = 5;
    barrierT.width = windowWidth;
    barrierT.y = windowHeight;
    barrierT.collider = 's';

    barrierB = new Sprite();
    barrierB.height = 5;
    barrierB.width= windowWidth;
    barrierB.y = 0;
    barrierB.collider = 's';

    
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
    scoreBox1.color = ('black');
    scoreBox2.color = ('black');
    barrierT.color = ('white');
    barrierB.color = ('white');

    scoreBox1.textColor = ('white');
    scoreBox2.textColor = ('white');

    player1.speed = 5;
    player2.speed = 5;
    ball.speed = 3;
   

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

    // if(ball.x > windowWidth) {
    //   scoreP1 += 1;
    //  else if (ball.x < 0){
    //    scoreP2 += 1;
    // }   
    
}
