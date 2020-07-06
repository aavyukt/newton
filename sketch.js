const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rope1
var bo1
var paddle
 


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	paddle=new (600,100,200,10);
	bo1=new paper(650,200,25);
    rope1=new Chain(bo1.body,paddle.body,-bo1*2,0);
    
}

function draw(){
    
    Engine.update(engine);
	paddle.display();
	bo1.display();
	rope1.display();
}