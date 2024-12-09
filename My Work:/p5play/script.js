let floor;
let ball;

function setup() {
  world.gravity.y = 9.8

	ball = new Sprite();
	ball.diameter = 50;
  ball.x = 500
	new Canvas(1000, 1000);

	floor = new Sprite();
	floor.width = 1000;
	floor.height = 50;
  floor.collider = "s"


}

  function draw() {
    ball.velocity.x = 0
    if (kb.pressing = ('a')) {
      ball.velocity.x = -5
     } else if (kb.pressing = ('d')) {
        ball.velocity.x = 5
      } 
       
clear();
  }

  