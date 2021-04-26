var circleButtonX, circleButtonY;
let circleButtonSize = 45;
var rectButtonX, rectButtonY;
var rectButtonW, rectButtonH;
var funnyCircleX, funnyCircleY;
var funCircleMoveX, funCircleMoveY;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  background(220, 220, 220);
  circleButtonY = (height/1.65);
  circleButtonX = (width/1.325);
  rectButtonX = width/1.5;
  rectButtonY = height/2.5;
  rectButtonW = 70;
  rectButtonH = 35;
  funnyCircleX = 167;
  funnyCircleY = 204;
  funCircleMoveX = 1;
  funCircleMoveY = 1;
}

let tvTransparency = 255;
let tvOn = 0;
let channel1Transparency = 255;
let channel2Transparency = 0;

function draw() {
  
  update(mouseX, mouseY);
  
  push();            //tv base
  strokeWeight(2);
  stroke(0);
  fill(85, 60, 35);
  rect((width/8), (height/3.5), 300, 175, 1);
  pop();
  
  //insert channels here
  push();
  strokeWeight(1);
  stroke(110, 80, 45);
  fill(0, 0, 0, channel1Transparency);
  rect((width/5), (height/3), 175, 135, 4);
  noStroke();
  fill(255, 255, 255, channel1Transparency);
  ellipse(funnyCircleX, funnyCircleY, 10, 10);
  funnyCircleX += funCircleMoveX;
  funnyCircleY += funCircleMoveY;
  if (funnyCircleX >= 250){
    funCircleMoveX = -1;
  }
  else if (funnyCircleX <= 85){
    funCircleMoveX = 1;
  }
  if (funnyCircleY >= 264){
    funCircleMoveY = -1;
  }
  else if (funnyCircleY <= 138){
    funCircleMoveY = 1;
  }
  pop();
  
  push();
  strokeWeight(1);
  stroke(110, 80, 45);
  fill(240, 0, 240, channel2Transparency);
  rect((width/5), (height/3), 175, 135, 4);
  
  pop();
  
  push();                  //blank tv screen
  strokeWeight(1);
  stroke(110, 80, 45);
  fill(40, 40, 40, tvTransparency);
  rect((width/5), (height/3), 175, 135, 4);
  pop();
  
  //insert buttons here
  push();
  noStroke();
  if (circleOver){
    fill(200);
  }
  else {
    fill(255);
  }
  ellipse(circleButtonX, circleButtonY, circleButtonSize);
  fill(0);
  butt1text = "Power";
  text(butt1text, circleButtonX - 17, circleButtonY);
  pop();
  
  
  
  push();
  noStroke();
  if (rectOver){
    fill(45);
  }
  else {
    fill(10);
  }
  rect(rectButtonX, rectButtonY, rectButtonW, rectButtonH);
  fill(255);
  butt2text = "Channel";
  text(butt2text, rectButtonX + 10, rectButtonY + 20);
  pop();
  
  
  //insert antenna here
  push();
  stroke(45);
  line(200, 116, 115, 45);
  line(201, 116, 245, 55);
  fill(45);
  circle(115, 45, 5);
  circle(245, 55, 5);
  pop();
  
  
  
}

//slightly modified code from Lab Examples 05
function update( x,  y) {
  if ( overCircle(circleButtonX, circleButtonY, circleButtonSize) ) {
    circleOver = true;
    rectOver = false;
  }
  else if (overRect(rectButtonX, rectButtonY, rectButtonW, rectButtonH)){
    circleOver = false;
    rectOver = true;
  }
  else {
    circleOver = rectOver = false;
  }
}

function mousePressed(){
  if (circleOver){
    if (tvTransparency == 0){
      tvTransparency = 255;
    }
    else {
      tvTransparency = 0;
    }
    if (tvOn == 0){
      tvOn = 1;
    }
    else {
      tvOn = 0;
    }
  }
  if (rectOver){
    if (channel1Transparency == 255 && tvOn == 1){
      channel1Transparency = 0;
      channel2Transparency = 255;
    }
    else if (channel1Transparency != 255 && tvOn == 1) {
      channel1Transparency = 255;
      channel2Transparency = 0;
    }
  }
}

//slightly modified code from Lab Examples 05
function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } 
  else {
    return false;
  }
}

//borrowed from Lab Examples 05
function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}