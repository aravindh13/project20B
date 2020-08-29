 
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = createSprite(55,90);
  weight = createSprite(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor=color(255);

  wall = createSprite(1500,200,60,hieght/2);
  wall.shapeColor(80,80,80)

}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    var defarmation=0.5*weight*speed*speed/22509;
    if(defarmation>180){
      car.shapeColor=color(255,0,0);
    }
    if(defarmation<180&&defarmation>100){
      car.shapeColor=color(230,230,0);
    }
    if(defarmation<100){
      car.shapeColor=color(0,255,0);
    }

  }
  drawSprites();
}
