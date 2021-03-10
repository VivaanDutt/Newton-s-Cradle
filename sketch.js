const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;

function preload() {
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	bobDiameter = 45;
	roof = new Roof(500, 50, 900, 20);

	bob1 = new Bob(300, 500, bobDiameter);
	bob2 = new Bob(400, 500, bobDiameter);
	bob3 = new Bob(500, 500, bobDiameter);
	bob4 = new Bob(600, 500, bobDiameter);
	bob5 = new Bob(700, 500, bobDiameter);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*4, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*2, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*4, 0);

	Engine.run(engine);
}


function draw() {
  background("grey");
  rectMode(CENTER);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100, y: -100})
	}
}

