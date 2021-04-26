function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  
  push();                      //circle 1 inner
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((mouseX + 125), (mouseX + 125), 255);
  circle((width - 100), 300, 50);
  pop();
  
  push();            //circle 1 outer
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke(230, ((mouseY - 275) + 75), 255);
  circle(300, 300, 50.9);
  pop();
  
  push();            //circle 1 light
  colorMode(RGB);
  noStroke();
  fill(240, 240, 255);
  circle(310, 290, 7);
  pop();
  
  
  push();          //circle 2 inner
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((mouseX + 125), (mouseX + 125), 255);
  circle(100, 100, 50);
  pop();
  
  let colorBoundLow = 0;
  let colorBoundHigh = 150;
  let colorC = constrain(mouseY, colorBoundLow, colorBoundHigh);
  
  push();              //circle 2 outer
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke(colorC, (mouseY - 275), 255);
  circle(100, 100, 50.9);
  pop();
    
  push();                  //circle 2 light
  colorMode(RGB);
  noStroke();
  fill(240, 240, 255);
  circle(110, 90, 7);
  pop();
  
  push();                      //circle 3 inner
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((mouseX + 125), (mouseX + 125), 255);
  circle(325, 235, (50 * 1.1));
  pop();
  
  let map1 = map(mouseY, 0, height, 75, 230);
  
  push();            //circle 3 outer
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke(map1, 255, 175);
  circle(325, 235, (50.9 * 1.1));
  pop();
  
  push();            //circle 3 light
  colorMode(RGB);
  noStroke();
  fill(240, 240, 255);
  circle(335, 225, (7 * 1.1));
  pop();
  
  push();                      //circle 4 inner
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((mouseX + 125), (mouseX + 125), 255);
  circle(350, 350, (50 / 1.5));
  pop();
  
  push();            //circle 4 outer
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke(100, 255, ((mouseY - 275) + 75));
  circle(350, 350, (50.9 / 1.5));
  pop();
  
  push();            //circle 4 light
  colorMode(RGB);
  noStroke();
  fill(240, 240, 255);
  circle(355, 345, (7 / 1.5));
  pop();
  
  push();          //circle 5 inner
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((mouseX + 125), (mouseX + 125), 255);
  circle(75, 165, (50 * 1.1));
  pop();
  
  push();              //circle 5 outer
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke(255, (mouseY - 275), 150);
  circle(75, 165, (50.9 * 1.1));
  pop();
    
  push();                  //circle 5 light
  colorMode(RGB);
  noStroke();
  fill(240, 240, 255);
  circle(85, 155, (7 * 1.1));
  pop();
  
  push();                      //circle 6 inner
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((mouseX + 125), (mouseX + 125), 255);
  circle(50, 50, (50 / 1.5));
  pop();
  
  let bubbleLoc1 = 75;
  let bubbleLoc2 = 165;
  let x2 = mouseX;
  let y2 = mouseY;
  let distColor = float(dist(bubbleLoc1, bubbleLoc2, x2, y2));
  
  push();            //circle 6 outer
  colorMode(RGB);
  noFill();
  strokeWeight(2);
  stroke((distColor + 50), 150, 255);
  circle(50, 50, (50.9 / 1.5));
  pop();
  
  push();            //circle 6 light
  colorMode(RGB);
  noStroke();
  fill(240, 240, 255);
  circle(55, 45, (7 / 1.5));
  pop();
  
  print('mouseX is' + mouseX);
  print('mouseY is' + mouseY);
  print('Circle 1 color is (' + 230 + ',' + ((mouseY - 275) + 75) + ',' + 255 + ')');
  print('Frames active: ' + frameCount);
}