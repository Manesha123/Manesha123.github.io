var message = "tickle",
  bounds, // holds x, y, w, h of the text's bounding box
  x, y, posx, posy; // x and y coordinates of the text
 var n = 0;
function preload() {
  character = loadImage('creature.png');
}

function setup() {
  createCanvas(600, 600);
	image(character, 200, 350, 200, 200);

  // get the width and height of the text so we can center it initially
  // bounds = font.textBounds(message, 0, 0, fontsize);
   x = width / 2 - 100 / 2;
   y = height / 2 - 100 / 2;
}
 posx = 200;
    posy = 275;
function draw() {
	
	background(255, 255, 255);
  
  textAlign(CENTER);
  textSize(100);
  textLeading(85);
  textFont('Impact');
    fill(255, 222, 173);
	text("MY LITTLE MONSTER",150,50, 300, 300);
   image(character, posx, posy, 200, 200);
    fill(169, 169, 169);
  textAlign(CENTER);
  textSize(25);
  textLeading(85);
  textFont('Impact');
  text("MAKE ME LAUGH",150,525, 300, 300);
  // loadImage('test.jpg', function(character) {
   
  // write the text in black and get its bounding box
  // fill(0);
  // text(message, x, y);
  // bounds = font.textBounds(message,x,y,fontsize);

  // // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= posx && mouseX <= posx + 200 &&
     mouseY >= posy && mouseY <= posy + 200) {
  	if (n!=250){
    posx += random(-5, 5);
    posy += random(-5, 5);
     n +=1;
     console.log(n);
 }
 if (n==250){
 	window.location.href = 'video.html';
 }
  }

}


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}