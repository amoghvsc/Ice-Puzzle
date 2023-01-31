var player;
var obstacle;
var canMove = true;
var lastKeyPressed;
var finish


function setup() {
  createCanvas(400, 400);
  player = createSprite(15,15,20,20)
  obstacle1 = createSprite(135, 15, 30,30);
  obstacle2 = createSprite(15, 165, 30,30);
  obstacle3 = createSprite(100, 130, 30,30);
  obstacle4 = createSprite(15, 375, 30,30);
  obstacle5 = createSprite(50, 375, 30,30);
  obstacle6 = createSprite(350, 15, 30,30);
  obstacle7 = createSprite(230, 100, 30,30);
  obstacle8 = createSprite(350, 300, 30,30);
  obstacle9 = createSprite(385, 330, 30,30);
  obstacle10 = createSprite(315, 375, 30,30);
  obstacle11 = createSprite(170, 200, 30,30);
}

function draw() {
  background(200);
  detectCollision();
  drawSprites();
}
function keyPressed() {
  if ((keyCode === 37) && canMove) {
      player.velocityX = -5;
      canMove = false;    
  }
  if ((keyCode === 39) && canMove) {
    player.velocityX = 5;
    canMove = false;
  }
  if ((keyCode === 38) && canMove) {
    player.velocityY = -5;
    canMove = false;
  }
  if ((keyCode === 40) && canMove) {
    player.velocityY = 5
    canMove = false;
  }
}
function detectCollision() {
  if(player.isTouching(obstacle1) || player.isTouching(obstacle2) || player.isTouching(obstacle3) || player.isTouching(obstacle4) || player.isTouching(obstacle5) || player.isTouching(obstacle6) || player.isTouching(obstacle7) || player.isTouching(obstacle8) || player.isTouching(obstacle9) || player.isTouching(obstacle10) || player.isTouching(obstacle11)){
    canMove = true;
  }
}
