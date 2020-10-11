var play = 1;
var END = 0;
var gameState = play;

var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var score
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkey2 = loadAnimation("sprite_0.png")
}



function setup() {
  createCanvas(500, 400)

 monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
   monkey.addAnimation("stop",monkey2)
  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
  invisibleGround = createSprite(400,350,900,10);
 invisibleGround.visible=false; 
  
  FoodGroup = new Group();
  obstacleImage = new Group();
}


function draw() {

   background('255')

  monkey.collide(ground)
  
  stroke("white")
  textSize(20);
  fill("white")
  text("score" + score,500,50)
  
  stroke("black")
  textSize(20);
  fill("black")
  
  text("survival Time" + survivalTime,100,50)
  
  console.log("this is ",gameState)
  
  if(gameState === play){
    
survivalTime = Math.ceil(frameCount/frameRate())
 
    if(FoodGroup.isTouching(monkey)){
    
     FoodGroup.destroyEach();
     score = score+1;
   }
    
    
    if (ground.x < 0) {
  ground.x = ground.width / 2;
}
    monkey.velocityY = monkey.velocityY + 0.8
    
   
 
    
    
  if (keyDown("space")&&monkey.y>=300) {
  monkey.velocityY = -10;
}
    
    bananaimg()
  obimg()

    
if( obstacleImage.isTouching(monkey)){
  
  survivalTime = 0;
  gameState = END;
}
  

  
 
}

  else if(gameState === END){
 
    monkey.changeAnimation("stop",monkey2)
    ground.velocityX = 0;
  obstacleImage.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0);       
  
    
                 
    
    
    
    
  }
  
  
 drawSprites()

}
function bananaimg(){
  
  if(World.frameCount%200 ===0){
   
  banana= createSprite(400,200,20,20);
    
      
  var position = Math.round(random(100,300))
  
  banana.addImage("moving",bananaImage)
  banana.velocityX = -8;
  banana.setLifetime = 50;
  banana.scale = 0.1;
   
    FoodGroup.add(banana)
  }
}

function obimg(){
  
  if(World.frameCount%200 ===0){
   
 obstacle = createSprite(400,327,20,20);
    
      
  var position = Math.round(random(100,300))
  
  obstacle.addImage(obstaceImage)
  obstacle.velocityX = -8;
  obstacle.setLifetime = 50;
  obstacle.scale = 0.1;
  obstacleImage.add(obstacle)
  }
}