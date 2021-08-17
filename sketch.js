const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world,gamestate;
var polyImg,poly,ground,platform,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var slingShot;

function preload() {
polyImg=loadImage("polygon.png");
}

function setup(){
  canvas = createCanvas(1200,400);
   engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(400, 300, 300, 20);
    var polyoptions={
        'restitution':1.0,
        'friction':0.2,
        'density':1.0
    }
    poly=Bodies.circle(1000,200,10,polyoptions);
    World.add(world,poly)

    // level 1  
    box1 = new Box(300,280,30,40);
    box2 = new Box(330,280,30,40);
    box3 = new Box(360,280,30,40);
    box4 = new Box(390,280,30,40);
    box5 = new Box(420,280,30,40);
    box6 = new Box(450,280,30,40);
    box7 = new Box(480,280,30,40);
    // level 2
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    // level 3
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    // Top
    box16 = new Box(390,155,30,40);

    slingShot=new SlingShot(this.poly,{x:1000,y:200})
    gameState="onSling";
}

function draw(){
 background("black");
    textSize(10);
    fill("red");
    text("Fire the polygon and hit the pyramid!",width-300,50);
    text("For another go, push ' spacebar ' !",width-300,80);

    Engine.update(engine);
    ground.display();
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    imageMode(CENTER)
    image(polyImg,poly.position.x,poly.position.y,30,30)
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY});  
}  
function mouseReleased(){
    slingShot.fly();
}
function keyPressed() {
    if (keyCode === 32) {
     slingShot.attach(this.poly);
    }
}