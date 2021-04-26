function setup() {
  createCanvas(400, 400);
}

let pepperoniOn = 255;
let pizzaBitten = 0;
let textGrowth = 36;
let textGrow = true;
let textX = -150;

function draw() {
  colorMode(RGB);
  background(15, 15, 15);
  
  push();      //pizza base
  noStroke();
  fill(255, 230, 50);
  triangle(120, 210, 220, 160, 250, 195);
  triangle(120, 215, 220, 165, 250, 200);
  quad(120, 210, 120, 215, 250, 200, 250, 195);
  pop();
  
  push();          //cheese drip
  noStroke();
  fill(255, 230, 50);
  for (let i = 0; i < 6; i++){
    ellipse((140 + i*20), (212 - i*3), (7+i), 18);
  }
  pop();
  
  push();        //pepperonis
  noStroke();
  fill(200, 0, 0, pepperoniOn);
  circle(190, 180, 25);
  circle(225, 185, 20);
  circle(140, 205, 15);
  pop();
  
  push();      //pizza crust
  noStroke();
  fill(170, 100, 50);
  quad(219, 159, 235, 159, 265, 194, 250, 195);
  quad(249, 194, 265, 194, 265, 200, 250, 200);
  pop();
  
  
  push();        //pizza bite
  noStroke();
  fill(15, 15, 15, pizzaBitten);
  circle(135, 212.5, 45);
  pop();
  
  push();          //title
  textSize(textGrowth);
  textFont('Comic Sans  MS');
  fill(255, 255, 255);
  noStroke();
  text('p i z z a', textX, 65);
  pop();
  
  if (textX < 130){
    textX+=5;
  }
  
  if (textGrowth < 52 && textGrow == true){
    textGrowth+=.4;
    if (textGrowth >= 52){
      textGrow = false;
    }
  }
  else if (textGrowth > 36 && textGrow == false){
    textGrowth-=.4;
    if (textGrowth <= 36){
      textGrow = true;
    }
  }
  
  push();      //pepperoni covering
  noStroke();
  fill(15, 15, 15);
  quad(120, 209, 220, 159, 220, 140, 120, 200);
  pop();

}

function mousePressed(){
  if (pizzaBitten == 0){
    pizzaBitten = 255;
  }
  else {
    pizzaBitten = 0;
  }
}

function keyPressed(){
  if (pepperoniOn == 255){
    pepperoniOn = 0;
  }
  else {
    pepperoniOn = 255;
  }
}