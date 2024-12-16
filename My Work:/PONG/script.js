let player1, player2;
let ball;
let scoreBox1, scoreBox2;
let barrierT, barrierB, barrierL, barrierR;
let scoreP1 = 0, scoreP2 = 0;
let spawner = Math.floor(Math.random() *8) +1;
let winner;

function setup() {

    new Canvas(windowWidth, windowHeight);

// Padle 1
    player1 = new Sprite();
    player1.height = windowHeight /10;
    player1.width = 10;
    player1.collider = 'k';
    player1.x = 10;

// Padle 2
    player2 = new Sprite();
    player2.height = windowHeight /10;
    player2.width = 10;
    player2.collider = 'k';
    player2.x = windowWidth -22;

// Ball
    ball = new Sprite();
    ball.r = 8;
    ball.collider = 'd';
    ball.layer = 2;
    
// Player 1's score
    scoreBox1 = new Sprite();
    scoreBox1.x = windowWidth /4;
    scoreBox1.y = windowHeight /8;
    scoreBox1.collider = 'n';

// Player 2's score
    scoreBox2 = new Sprite();
    scoreBox2.x = (windowWidth /4) *3;
    scoreBox2.y = windowHeight /8;
    scoreBox2.collider = 'n';

// Top barrier
    barrierT = new Sprite();
    barrierT.height = 5;
    barrierT.width = windowWidth;
    barrierT.y = windowHeight;
    barrierT.collider = 's';

// Bottom barrier
    barrierB = new Sprite();
    barrierB.height = 5;
    barrierB.width = windowWidth;
    barrierB.y = 0;
    barrierB.collider = 's';

// Left barrier
   barrierL = new Sprite();
   barrierL.height = windowHeight;
   barrierL.width = 5;
   barrierL.x = -10;
   barrierL.collider = 's';

// Right barrier
   barrierR = new Sprite();
   barrierR.height = windowHeight;
   barrierR.width = 5;
   barrierR.x = windowWidth -7;
   barrierR.collider = 's';
    
// Winner
   winner = new Sprite();
   winner.height = 20;
   winner.width = 100; 
   winner.collider ='n';
   winner.layer = 2;
}

function draw() {

    background('black');
// Layers
   ball.layer = 2;
   winner.layer = 1;
   scoreBox1.layer = 1;
   scoreBox2.layer = 1;

// Sprite colors
    ball.color = ('white');
    player1.color = ('white');
    player2.color = ('white');
    scoreBox1.color = ('black');
    scoreBox2.color = ('black');
    barrierT.color = ('white');
    barrierB.color = ('white');
    barrierL.color = ('white');
    barrierR.color = ('white');
    winner.color = ('black');
    scoreBox1.textColor = ('white');
    scoreBox2.textColor = ('white');
    winner.textColor = ('white');
    

// Sprite speeds
    player1.speed = 10;
    player2.speed = 10;
    ball.speed = 15;
   
// Movement of player 1
    if(kb.pressing('up')) {
        player1.direction = -90;
    } else if(kb.pressing('down')) {
        player1.direction = 90;
    } else {
        player1.speed = 0;
    }

// Movement of player 2
    if(kb.pressing('E')) {
        player2.direction = -90;
    } else if(kb.pressing('D')) {
        player2.direction = 90;
    } else {
        player2.speed = 0;
    }

// Scoring system
    if(ball.collides(barrierL)) {
        scoreP2 += 1;
        ball.x = windowWidth /2;
        ball.y = windowHeight /spawner;
      } else if (ball.collides(barrierR)) {
        scoreP1 += 1;
        ball.x = windowWidth /2;
        ball.y = windowHeight /2
      }   
      scoreBox1.text = scoreP1;
      scoreBox2.text = scoreP2;

// Barriers for both players
    //  if(player1.y >= windowHeight) {
    //    player1.direction = 90;
    // } else if(player1.y <= 0) {
    //    player1.speed = 0;
    //  }

    //  if(player2.y >= windowHeight) {
    //    player2.speed = 0;
    //  } else if(player2.y <= 0) {
    //    player2.speed = 0;
    //  } 

// Winner   
   if(scoreP1 === 10) {
    winner.text = 'Player 1 has won!';
    ball.speed = 0;
    ball.layer = 1;
    winner.layer = 2;
   } else if(scoreP2 === 10) {
    winner.text = 'Player 2 has won!';
    ball.speed = 0;
    ball.layer = 1;
    winner.layer = 2;
   }

// Ball speed
   if(ball.collides(player1) || ball.collides(player2)) {
    ball.speed += 1;
   }
}
