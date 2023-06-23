
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left;
var right;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
restitution:0.3,
friction:0,
density:1.2,
}
ball=Bodies.circle(100,550,20,ball_options);
World.add(world,ball);
	Engine.run(engine);
  var ground_options={
	isStatic:true
  }
  right=Bodies.rectangle(560,680,10,100,ground_options);
  World.add(world,right);

  left=Bodies.rectangle(480,680,10,100,ground_options);
  World.add(world,left);

  ground=Bodies.rectangle(400,680,1000,10,ground_options);
  World.add(world,ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1000,10);
  ellipse(ball.position.x,ball.position.y,20);
  rect(left.position.x,left.position.y,10,100);
  rect(right.position.x,right.position.y,10,100);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:-38});
	}
}

