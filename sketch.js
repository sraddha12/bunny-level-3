var player;
var target;
var snakeGroup;
function preload(){
  bgimg=loadImage("images/bg.png")
  bunnyimg=loadImage("images/bunnyImg.png")
  carrotimg=loadImage("images/carrot.png")
  snakeimg=loadImage("images/snake.png")
}

function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300);
  bg.addImage(bgimg)
  bg.scale=5
  bunny= createSprite(50,560,30,30);
  bunny.addImage(bunnyimg)
  bunny.scale=0.5
  carrot= createSprite(560,50,30,30);
  carrot.addImage(carrotimg)
  carrot.scale=0.2
  obstacle1= createSprite(70,200,100,20);
  obstacle2= createSprite(560,360,100,20);
  obstacle3= createSprite(200,70,100,20);
  obstacle4= createSprite(360,5300,100,20);
  obstacle1.shapeColor="brown";
  obstacle2.shapeColor="brown";
  obstacle3.shapeColor="brown";
 obstacle1.velocityX=3;
 obstacle2.velocityX=-3;
 obstacle3.velocityX=3;
 edges=createEdgeSprites();
 snakeGroup= new Group

}

function draw() {
  drawSprites();
  obstacle1.bounceOff(edges[1]);
  obstacle1.bounceOff(edges[0]);
  obstacle2.bounceOff(edges[1]);
  obstacle2.bounceOff(edges[0]);
  obstacle3.bounceOff(edges[1]);
  obstacle3.bounceOff(edges[0]);
  obstacle4.bounceOff(edges[1]);
  obstacle4.bounceOff(edges[0]);
  bunny.x= mouseX;
  bunny.y= mouseY;
  if(bunny.isTouching(carrot))
  {
    text("you win",300,300)
    bunny.x=50
    bunny.y=560
  }
  if(bunny.isTouching(obstacle1))
  {
    text("you lose",300,300)
    bunny.x=50
    bunny.y=560
  }
  if(bunny.isTouching(obstacle2))
  {
    text("you lose",300,300)
    textSize(20);
    bunny.x=50
    bunny.y=560
  }
  generateSnake()
  for( i=0;i<snakeGroup.length;i++)
    {
        var tem=(snakeGroup).get(i);
        if(bunny.isTouching(tem))
        {
          bunny.x=50
          bunny.y=560
        }
    }

}
function generateSnake()
 {
  if(frameCount%30==0){
    console.log(frameCount)
    snake=createSprite(700,random(70,520),random(30,120),5);
    snake.addImage(snakeimg)
   snake.scale= random(0.2,0.4)
    snake.velocityX=random(-4,4);
    snake.velocityY=random(-4,4) ;
    snakeGroup.add(snake);
 }
}