var x = 0;
var y = 0;
var canvas; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke(); 
  frameRate (50);
}

function draw() {
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(random(100,200));
  background (map(mouseX,0, windowWidth, 0,200),230, 150);
  text("🪩",x,y);
  colorMode(HSB, 360, 100, 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}