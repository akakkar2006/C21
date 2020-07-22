var fixedRect,movingRect;
var bounceRect1,bounceRect2;
var checkingRect;
function setup() {
  createCanvas(1000,600);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="red";

  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="red";

  checkingRect=createSprite(800,200,100,100);
  checkingRect.shapeColor="red";

  bounceRect1=createSprite(100,500,30,80);

  bounceRect1.debug=true;

  bounceRect2=createSprite(900,500,30,80);

  bounceRect2.debug=true;

  bounceRect1.velocityX=3;

  bounceRect2.velocityX=-3;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  bounceOff(bounceRect1,bounceRect2);
  
  drawSprites();
}

