var paper, trash, ground, world, engine;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	ellipseMode(CENTER);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	paper = new Paper (50, 610);
	ground = new Ground();
	trash = new Trash();	
	Engine.run(engine);
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:140,y:-140})
	  }
}

function draw() {
	rectMode(CENTER);
	background(255);
   	paper.display();
	ground.display();
	trash.display();
	Engine.update(engine);
}
