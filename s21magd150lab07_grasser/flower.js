let petalCount = [5, 6, 8];

class Flower{
  
  
  constructor(){
  var centerX, centerY, offset, petals, petalChoice, petalChoice2, diceRoll, petalColor;
    
    this.centerX = random(45, width - 50);
    this.centerY = random(45, height - 50);
    this.offset = -25;
    this.petals = random(petalCount);
    
    //these colors are chosen like this so as not to make the petals the same color
    //as the center
    
    this.petalChoice = int(random(0, 51));
    this.petalChoice2 = int(random(71, 345));
    
    this.diceRoll = int(random(0, 5));
    
    //kind of a coinFlip but its not 50/50, so its more of a diceroll
    /*determines the color of the flower petals, more likely to roll colors that aren't       reds/oranges*/
    
    if (this.diceRoll == 0){
      this.petalColor = this.petalChoice;
    }
    else {
      this.petalColor = this.petalChoice2;
    }
    
  }
  
  draw(){
    push();
    noStroke();
    colorMode(HSB);
    angleMode(DEGREES);
    translate(this.centerX, this.centerY);
    
    
    //these 3 if/else statements set up the petals so they are symmetrical around
    //the center of the flower

    if (this.petals == 5){
      for (let i = 0; i < 360; i+=72){
        rotate(i);
        fill(this.petalColor, 100, 100);
        circle(0, this.offset, 30);
        rotate(-i);
      }
    }
    
    if (this.petals == 6){
      for (let i = 0; i < 360; i+=60){
        rotate(i);
        fill(this.petalColor, 100, 100);
        circle(0, this.offset, 30);
        rotate(-i);
      }
    }
    
    if (this.petals == 8){
      for (let i = 0; i < 360; i+=45){
        rotate(i);
        fill(this.petalColor, 100, 100);
        circle(0, this.offset, 30);
        rotate(-i);
      }
    }
    
    colorMode(RGB);
    fill(255, 255, 0);
    circle(0, 0, 50);
    
    pop();
  }
  
}