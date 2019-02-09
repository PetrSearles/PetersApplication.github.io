var col = {
  r: 255,
  g: 255,
  b: 255
};

var spot = {
  x: 250,
  y: 250
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(150);                           //background color
  
  strokeWeight(1);                           //line weight
  stroke(0);                                 //line color (black)   
  line(0, 0, 0, width);                      //line position        //left line
  
  strokeWeight(1);                           //line weight
  stroke(0);                                 //line color (black)   
  line(499, 0, 499, height);                 //line position        //right line
  
  strokeWeight(1);                           //line weight
  stroke(0);                                 //line color (black)   
  line(0, 499, width, 499);                  //line position        //bottom line
  
  strokeWeight(1);                           //line weight
  stroke(0);                                 //line color (black)   
  line(0, 0, width, 0);                      //line position        //top line
  
  strokeWeight(1);                           //line weight
  stroke(0);                                 //line color (black)   
  line(250, 0, 250, height);                 //line position        //middle line from bottom to top
  
  strokeWeight(1);                           //line weight
  stroke(0);                                 //line color (black)   
  line(0, 250, width, 250);                  //line position        //middle line from left to right
  
  noStroke();                                //no outline for ellipse
  fill(col.r, col.g, col.b);                 //ellipse color (white rn) (change in var = col (on  line 1))
  ellipse(spot.x, spot.y, 48, 48);           //ellipse size and position
}

function mousePressed() {                    //when mouse is pressed -> color of ellipse changes to a random color
  col.r = random(25, 255);
  col.g = random(25, 255);
  col.b = random(25, 255);
}

function keyPressed() {
  if (key == 'r') {
    //red
    col.r = random(100, 255);
    col.g = random(0, 0);
    col.b = random(0, 0);
  } else if (key == 'g') {
    //green
    col.r = random(0, 0);
    col.g = random(100, 255);
    col.b = random(0, 0);
  } else if (key == 'b') {
    //blue
    col.r = random(0, 0);
    col.g = random(0, 0);
    col.b = random(100, 255);
  } else if (key == 'p') {
    //purple (pink)
    col.r = random(200, 255);
    col.g = random(0, 0);
    col.b = random(200, 255);
  } else if (keyCode === UP_ARROW) {
    spot.x = random(0, width);
    spot.y = random(0, height/2);
  } else if (keyCode === DOWN_ARROW) {
    spot.x = random(0, width);
    spot.y = random(height/2, height);
  } else if (keyCode === LEFT_ARROW) {
    spot.x = random(0,width/2);
    spot.y = random(0, height);
  } else if (keyCode === RIGHT_ARROW) {
    spot.x = random(width/2, width);
    spot.y = random(0, height);
  }
}
