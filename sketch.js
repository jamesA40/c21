
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
var ball
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball = ball.circle(260,100,radius/2,ball_options)
World.add(world,ball)

groundObj = new Ground
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
Matter.Bodies.circle(x,  y, radius, [options], [MaxSides])
function keypressed(){
	if (keyCode === UP_ARROW){
		function hForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		  }

		  function VForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		  }
	}
}


