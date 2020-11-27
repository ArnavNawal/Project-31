const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos = []
var particles = []

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0; i <= 480; i=i+50){
    plinkos.push(new Plinko(i,75))
    
  }
  for(var i = 15; i<=480; i=i+50){
    plinkos.push(new Plinko(i,175))
  }
  for(var i = 0; i<=480; i=i+50){
    plinkos.push(new Plinko(i,275))
  }
  for(var i = 15; i<=480; i=i+50){
    plinkos.push(new Plinko(i,375))
  }
  ground = new Ground(240,790,480,10)
  division1 = new Division(0,650,10,280);
  division2 = new Division(80,650,10,280);
  division3 = new Division(160,650,10,280);
  division4 = new Division(240,650,10,280);
  division5 = new Division(320,650,10,280);
  division6 = new Division(400,650,10,280);
  division7 = new Division(480,650,10,280);
  
}

function draw() {
  
  background(0);
  Engine.update(engine);
  if(frameCount % 90 === 0){
    particles.push(new Particles(random(10,450),10,10))
  }
  
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  for(var i = 0; i<particles.length; i++){
    particles[i].display();
    
  }
  division1.display();  
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  ground.display(); 
  //line.display();
  drawSprites();
}
