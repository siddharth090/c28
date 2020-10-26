
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1000,600);
    
	tree = createSprite(200, 150,800,30);
	tree.shapeColor = "gold";
	tree.debug = true;

    
  
    mango = createSprite(1000, 920,50,730);
    mango .shapeColor = "orange";
    mango.debug = true;
    mango.velocityX = -5;
    
    ball2 = createSprite(100, 920,50,-730);
    ball2.shapeColor = "blue";
	ball2.debug = true;
    
	ball= createSprite(200, 920,50,730);
    ball.shapeColor = "blue";
	ball.debug = true;
    ball.velocityY = 5;


    ball3 = createSprite(300, 920,50,730);
    ball3.shapeColor = "blue";
	ball3.debug = true;
    
    
   
    rod4 = createSprite(100, 510,10,700);
	rod4.shapeColor = "black";
	rod4.debug = true;

    rod4 = createSprite(200, 510,10,700);
	rod4.shapeColor = "black";
	rod4.debug = true;

    rod4 = createSprite(300, 510,10,700);
	rod4.shapeColor = "black";
	rod4.debug = true;

   
}



function draw(){
    
    drawSprites();   
    
}







