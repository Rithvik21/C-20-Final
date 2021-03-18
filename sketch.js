var movingRect,fixedRect;


function setup() {
  createCanvas(1600,800);
  movingRect=createSprite(400, 800, 80, 30);
  fixedRect=createSprite(400, 100, 50, 80);
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

}

function draw() {
  background(0);  
  drawSprites();
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }
  if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
    }
}


