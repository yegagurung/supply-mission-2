var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine=Engine.create()
	world=engine.world
	
	leftboxSprite=createSprite(width/2-100,610,20,100)
	leftboxSprite.shapeColor=("red");
	leftboxbody=Bodies.rectangle(width/2-120,610,20,100,{isStatic:true});
	World.add(world,leftboxbody)

	rightboxSprite=createSprite(width/2+100,610,20,100)
	rightboxSprite.shapeColor=("red");
	rightboxbody=Bodies.rectangle(width/2+180,610,20,100,{isStatic:true});
	World.add(world,rightboxbody)

	bottomboxSprite=createSprite(width/2,650,200,20)
	bottomboxSprite.shapeColor=("red");
    bottomboxbody=Bodies.rectangle(width/2,610+5,200,20,{isStatic:true});
	World.add(world,bottomboxbody)
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode==LEFT_ARROW)
{
helicopterSprite.x=helicopterSprite.x-20
translation={ x:-20,y:0	
}	
Matter.Body.translate(packageBody,translation)
}
else if (keyCode==RIGHT_ARROW)
{
helicopterSprite.x=helicopterSprite.x+20
translation={ x:+20,y:0	
}	
Matter.Body.translate(packageBody,translation)
}

else if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



