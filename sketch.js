const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;

var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create(); //world gets automatically created, you just have to save it
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);

  

  
}

function draw() {
  background("yellow");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
}