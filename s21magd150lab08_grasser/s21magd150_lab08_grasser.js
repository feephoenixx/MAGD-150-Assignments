let chrissyImg;
let havaImg;
let blurbs;
let blurbNum;
let BebasNeue;
let Comfortaa;
let pdf;

function preload() {    //loads in both of the images that are being used
  chrissyImg = loadImage('chrissy.png');
  havaImg = loadImage('hava.png');
}

function setup() {
  createCanvas(400, 600);
  blurbs = loadStrings('blurbs.txt');
  blurbNum = int(random(0, 4));  //generates a starting number for the blurb
  BebasNeue = loadFont('BebasNeue-Regular.ttf');  //loads in both fonts that are used
  Comfortaa = loadFont('Comfortaa-Regular.ttf');
  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  background(20);
  textTimer();
  
  push();
  chrissyImg.filter(GRAY);
  image(chrissyImg, 50, 200);
  pop();
  
  push();
  tint(195, 230);
  image(havaImg, 160, 195, 190, 175);
  pop();
  
  push();
  fill(255);
  textAlign(CENTER);
  textFont(BebasNeue);
  textSize(45);
  text('Cat Movie', 200, 100);
  pop();
  
  push();
  fill(255);
  textAlign(CENTER);
  textFont(Comfortaa);
  textSize(30);
  text(blurbs[blurbNum], 200, 475);
  pop();
  
}

function textTimer(){        //cycles through the blurbs at the bottom every 3s
  if (frameCount%180 == 0){
    if (blurbNum < 3){
      blurbNum++;
    }
    else if (blurbNum == 3){
      blurbNum = 0;
    }
  }
}

function mousePressed(){       //allows the user to save the canvas as a pdf
  if (mouseButton === RIGHT){
    pdf.save();
  }
}