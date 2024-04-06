const starCount = 3000;
let stars = [];

const scrollSensitivity = 0.5;
const topSpeed = 16;
const acceleration = 4;
let warpSpeed = 0;
let targetSpeed = 0;

p5.disableFriendlyErrors = true;


// Called when the program starts
function setup() {
  createCanvas(900, 600);

  for (let i = 0; i < starCount; i++) {
    stars[i] = new Star();
  }
  
  translate(width/2, height/2);
}


// Draws every frame
function draw() {
  background(0);
  translate(abs(mouseX-width), abs(mouseY-height));
  
  warpSpeed = lerp(warpSpeed, targetSpeed,
                   (deltaTime/1000 * acceleration));
  
  for (let i = 0; i < starCount; i++) {
    stars[i].process();
  }
}


// User scrolled the mousewheel
function mouseWheel(event) {
  let scrollFactor = -event.deltaY / 100;
  targetSpeed = constrain(
    targetSpeed += scrollFactor * scrollSensitivity,
    0, topSpeed);
}
