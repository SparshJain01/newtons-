
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1 , bob2 , bob3 , bob4 , bob5;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(100 , 500 , 150);
bob2 = new Bob(250 , 500 , 150);
bob3 = new Bob(400 , 500 , 150);
bob4 = new Bob(550 , 500 , 150);
bob5 = new Bob(700 , 500 , 150);
ground1 = new Ground(400 , 50 , 750 , 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();

  drawSprites();
 
}



