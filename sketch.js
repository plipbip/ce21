const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,ground , ground1;
var ball, rope
var score=0
function setup() {
  createCanvas(1800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 800 , 400 , 20);
  ground1 = new Ground(1300, 500 , 300 ,20)

  box1 = new Box(650, 100, 50, 50);
  box2 = new Box(700, 100, 50, 50);
  box3 = new Box(750, 100, 50, 50);
  box4 = new Box(750, 100, 50, 50);
  box5 = new Box(800, 100, 50, 50);
  box6 = new Box(800, 100, 50, 50);
  box7 = new Box(850, 100, 50, 50);
  box8 = new Box(850, 100, 50, 50);
  box9 = new Box(900, 100, 50, 50);
  box10 = new Box(800, 100, 50, 50);
  box11 = new Box(700, 100, 50, 50);
  box12 = new Box(750, 100, 50, 50);
  box13 = new Box(850, 100, 50, 50);
  box14 = new Box(900, 100, 50, 50);
  box15 = new Box(950, 100, 50, 50);
  box16 = new Box(800, 100, 50, 50);
  box17 = new Box(1250, 100, 50, 50);
  box18 = new Box(1250, 100, 50, 50);
  box19 = new Box(1200, 100, 50, 50);
  box20 = new Box(1300, 100, 50, 50);
  box21 = new Box(1300,100 ,50,50)
  box22 = new Box(1350,100 ,50,50)
  box23 = new Box(1350,100 ,50,50)
  box24 = new Box(1400,100 ,50,50)
  box25 = new Box(1300,100 ,50,50)
  

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);

  textSize(25);
    text("SCORE : "+score,750,40)

  Engine.update(engine);
  ground.display();
  ground1.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display()
  box4.score();
  box5.display()
  box5.score();
  box6.display()
  box6.score();
  box7.display()
  box7.score();
  box8.display()
  box8.score();
  box9.display()
  box9.score();
  box10.display()
  box10.score();
  box11.display()
  box11.score();
  box12.display()
  box12.score();
  box13.display()
  box13.score();
  box14.display()
  box14.score();
  box15.display()
  box15.score();
  box16.display()
  box16.score();
  box17.display()
  box17.score();
  box18.display()
  box18.score();
  box19.display()
  box19.score();
  box20.display()
  box20.score();
  box21.display()
  box21.score();
  box22.display()
  box22.score();
  box23.display()
  box23.score();
  box24.display()
  box24.score();
  box25.display()
  box25.score();
  ball.display();
  rope.display();
  
 

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
     rope.attach(ball.body);
  }
}


