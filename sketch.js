
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofobject1 = new Roof(600,400,60,40);
	bobobject1 = new Bob();
	bobobject2 = new Bob();
	bobobject3 = new Bob();
	bobobject4 = new Bob();
	bobobject5 = new Bob();

	rope= new Rope(bobobject1.body,roofobject1.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(800,800);
  
  drawSprites();
 
}


keyPressed("UP"){
	Bob = null;
}


