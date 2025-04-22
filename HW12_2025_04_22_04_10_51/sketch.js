//global
//P5.PLAY LIBRARY
//game control
var stage = 0; // keeps track of which function to run

//player
var p1X = 400; //p1 for player 1
var p1Y = 375; 
var pWidth = 30; 
var pHeight = 70; 

//Boxes (platforms)
var b1X = 200; //b1 for box 1
var b1Y = 300; 
var bWidth = 200; 
var bHeight = 40; 


//gravity
var jump = false; //are we jumping?? 
var direction = 1; //the force of gravity in the y direction
var velocity = 2; //the speed of player 
var jumpPower = 15;//the energy or strength of player 
var fallingSpeed = 2;//equal to velocity 
var minHeight = 375;//height of ground
var maxHeight = 50;//height of sky
var jumpCounter = 0;//keeeps track of how much we are jumping 

//////setup
function setup() {
  createCanvas (800, 500);
  rectMode(CENTER);
textAlign(CENTER); 
  
}////close setup

////draw
function draw() {
//call functions  
  keyPressed();
   keyTyped(); 
  gravity(); 
  
  if(stage==0){
    game();
  }//close = 0 
  
}///close draw


////game
function game(){
  //appearance of game
  background(150, 230, 240); //sky blue
  //grass
  noStroke();
  fill(100, 200, 75);//green
  rect(width/2, 450, width, 100); 
  //window frame
  noFill();
  stroke(0);
  strokeWeight(15);
  rect(width/2, height/2, width, height);
  
//draw box
  stroke(0);
  strokeWeight(5);
  fill(255, 120, 0);//orange
  rect(b1X, b1Y, bWidth, bHeight);

//draw player
  stroke(0);
  fill(150, 0, 170);//purple
  rect(p1X, p1Y, pWidth, pHeight); 
  
  
  //collsions 
  if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y+pHeight >= b1Y-bHeight/2 && p1Y+pHeight <= b1Y+bHeight/2 && jump == false){ 
  p1Y=p1Y;//dont fall
    velocity = 0; // no speed because we arent falling 
    jumpCounter = 0; // allows us to jump again 
  }//if on box
  
}///close game 


///gravity
function gravity(){

if(p1Y >= minHeight) {
  //STOP FALLING ON THE GROUND
  p1Y = p1Y; //dont fall
  jumpCounter = 0 //reset jump counter when landing
}//close on ground
  else{
  p1Y = p1Y + (direction*velocity); //the code that makes gravity work
  }//else fall

  if (jump == true ){
    if (p1Y <= maxHeight || jumpCounter <= jumpPower){
      if(p1Y >=minHeight){
        p1Y = minHeight; 
      }//close at min already
      else{
      velocity =  fallingSpeed;//fall at maximums
      }//close else not at min
    }//close at max
    else{
    velocity = -jumpPower;// jumping
      jumpCounter = jumpCounter+1;//add to jump counter 
    }//close else not a max
  }//close jump
  else{
    velocity = fallingSpeed;
  }// close not jumping 

}///close gravity

function keyPressed() {
  if(keyIsDown('LEFT_ARROW')){
    p1X = p1X-5; //move left
  }//close left
  
  
  if(keyIsDown('RIGHT_ARROW')){
    p1X = p1X+5; //move right
  }//close right
  
  }//closed keypress
  
  
  function keyTyped(){
    if (keyIsDown('a')){
  jump = true; //jump
}//a pressed
    else{
      jump = false; //dont jump
    }//close not a
    
  }//close keyTyped
