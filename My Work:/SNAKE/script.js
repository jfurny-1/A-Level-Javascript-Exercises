let snake;
let score, scoreBox;
let barrierT, barrierB, barrierL, barrierR;

function setup(){

    //Canvas
    new Canvas(windowWidth, windowHeight);
    
    //Snake initial size
    snake = new Sprite();
    snake.d = 10;

    //Snake initial spawn
    snake.x = windowWidth/2;
    snake.y = windowHeight/2;

    //Snake initial direction
    snake.direction = 0;
 
    //Snake initial speed
    snake.speed = 5;

    //Score box
    scoreBox = new Sprite();
    scoreBox.textSize = 30;
    
    //Top barrier
    barrierT = new Sprite();
    barrierT.h = 50;
    barrierT.w = windowWidth;
    barrierT.x = windowWidth/2;
    barrierT.y = windowHeight

    //Bottom barrier
    barrierB = new Sprite();
    barrierB.h = 5;
    barrierB.w = windowWidth;

    //Left barrier
    barrierL = new Sprite();
    barrierL.h = windowHeight;
    barrierL.w = 5;

    //Right barrier
    barrierR = new Sprite();
    barrierR.h = windowHeight;
    barrierR.w = 5;
    

}

function draw(){

    //Background color
    background('yellowgreen');

    //Snake color
    snake.color('black');

    //Barrier colors
    barrierT.color = ('black');
    barrierB.color = ('black');
    barrierL.color = ('black');
    barrierR.color = ('black');

    //Score tally
    scoreBox.text = score;
    scoreBox.text.color = ('black');
}