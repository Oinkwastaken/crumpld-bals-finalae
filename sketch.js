var dustpin1,Ground,a
var paper1,paperObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;
	Ground=new ground(400,680,100000,40)
	Engine.run(engine);
	paper1=new paper(400,500,10,10)
	dustpin3=new dustpin(850,610,80,10)
	dustpin4=new dustpin(710,605,10,90)
	dustpin5=new dustpin(890,605,10,90)
	launcher1=new launcher(paper1.body,{x:400,y:400})
	a=-2
}


function draw() {
	rectMode(CENTER);
	background(255);
	paper1.display()
	dustpin3.display()
	Ground.display()
	launcher1.display()
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-6.5});
		keyCode=DOWN_ARROW
		launcher1.fly()
	}	
}

	function mouseDragged(){
    	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
    	launcher1.fly();
	}
	drawSprites();


