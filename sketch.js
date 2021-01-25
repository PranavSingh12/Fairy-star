var fairy, fairyImage, fairySound; 

var star, starImage, starBody; 

var backgroundImage;

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var world, engine;





function preload(){

  fairyImage = loadAnimation("images/fairy1.png", "images/fairy2.png");
  starImage = loadImage("images/star.png");
  backgroundImage = loadImage("images/starnight.png");
  
  
  
  
}

function setup() {
  createCanvas(800, 750);
  
  fairy = createSprite(100,500); 
  fairy.addAnimation("fairy", fairyImage);
  fairy.scale = 0.25;

  star = createSprite(700,50, 20, 20); 
  star.addImage(starImage); 
  star.scale = 0.25;

  engine = Engine.create(); 
  world = engine.world; 

  starBody = Bodies.rectangle(star.x, star.y, 20,20); 
  World.add(world, starBody)

  
}


function draw() {
  background(backgroundImage);

  star.x = starBody.position.x; 
  star.y = starBody.position.y; 

  if(starBody.position.y > 470){
    
  }

  if(keyDown("right")){
    fairy.x = fairy.x + 20; 
  }

  if(keyDown("left")){
    fairy.x = fairy.x -20; 
  }
  



Engine.update(engine); 


  drawSprites(); 

}
