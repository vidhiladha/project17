
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey = createSprite(80,350,900,100);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(400,385,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
 
  
  survivalTime = 0;
  
}


function draw() {
background(225);
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }  
  
   if(keyDown("space")){
     monkey.velocityY = -12; 
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("survivalTime: " + survivalTime, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time: " + survivalTime, 100,50);
  
  spwanfood();
  spwanobstacles();
  
  drawSprites();
}

 function spwanfood(){
    
    if (frameCount % 100 === 0) {
  banana = createSprite(80,250,50,10);
  banana.x = Math.round(random(80,400));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.setLifetime = -100;    
  banana.velocityX = -4; 
   }
 }

  function spwanobstacles(){
  
    if (frameCount % 100 === 0) {
  //obstacles.y = Math.round(random(300,350));
  obstacles = createSprite(200,350,50,10);
  obstacles.addImage(obstacleImage);
  obstacles.scale = 0.2;
  obstacles.velocityX = -4;
  obstacles.setLIfeTime = -100;    
 }
  }

