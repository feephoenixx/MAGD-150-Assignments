let flowers = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i  < 5; i++){
    flowers.push(new Flower());
  }
}

function draw() {
  push();
  colorMode(RGB);
  background(35, 100, 30);
  pop();
  
  //draws each of the flowers pushed into the array from the loop above

  for (let i = 0; i < flowers.length; i++){
    flowers[i].draw();
  }
  
  
  
}

//allows the user to add more flowers if they want c:
//as well as remove them in case there are too many

function mousePressed(){
  
  if (mouseButton === LEFT){
    flowers.push(new Flower());
  }
  
  if (mouseButton === RIGHT){
    flowers.pop();
  }
}