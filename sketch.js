var PLAY = 1;
var END = 0;
var gameState = PLAY;


var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

var survivalTime = 0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  obstacleGroup =new Group();
 
   survivalTime =  0;
  
}



function setup() {
  
  createCanvas(700, 560);
  
  
  
  monkey = createSprite(60,412,500,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2;
  
  
  ground = createSprite(550,480,1500,20);
  
  
}


function draw() {
  
   background ("skyblue");
  
  stroke("black");
  textSize(30);
  fill("black");
  text("  survival Time =  "+    survivalTime, 150,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
   
  
  if (gameState===PLAY){
    
    ground.velocityX = -3 ;
    
     if (ground.x < 0)
      {
      ground.x = ground.width/2
      }
    
     
  if (keyDown("space"))
      {
    monkey.velocityY= -10;
    
      }
  monkey.velocityY = monkey.velocityY + 0.3;
  
    
    if (obstacleGroup.isTouching(monkey)){
      gameState = END;
    }
    
  }
  
   if (gameState === END) {
   
  ground.velocityX = 0;
  
  

     
     FoodGroup.setVelocityXEach(0);
     
     
    obstacleGroup.setVelocityXEach(0);
     
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1); 
     
  }   
  
    
  monkey.collide(ground);
         
  
  spawnBananaes();
  spawnObestacles();
  drawSprites();  
}

function  spawnBananaes(){
  
  if (frameCount % 150 === 0) {
  banana = createSprite(550,120,50,50)
  banana.x = Math.round(random(400,550));
  banana.addImage("banana",bananaImage);
  banana.velocityX = -5;   
  banana.scale = 0.2;
  FoodGroup.add(banana);
    
  banana.lifetime = 800;
  }
  
  
}




function spawnObestacles (){
  
  
 if(frameCount % 150 === 0) {
  obstacle = createSprite(550,430,20,20);
  obstacle.x = Math.round(random(400,550));
  obstacle.addImage("obstacle",obstaceImage);
  obstacle.velocityX = -5;  
  obstacle.scale = 0.3;
  obstacleGroup.add(obstacle); 
   
  obstacle.lifetime = 800; 
   
  }
  
}

