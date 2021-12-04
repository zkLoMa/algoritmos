var movingRect, fixedRect ;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,50,80);
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  }
  drawSprites();
}