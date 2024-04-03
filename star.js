// Star Class
const maxSize = 4;


class Star {  
  constructor() {
    this.pos = this.randomVector();
    this.depth = random(warpSpeed, width/2);
  }
  
  
  // Returns a random 2D vector within the canvas
  randomVector() {    
    return createVector(
      random(-width/2, width/2),
      random(-height/2, height/2));
  }
    
    
  // Returns the screen position of the star
  getScreenPosition() {
    return createVector(
      map(this.pos.x / this.depth,
          -1, 1, -width/2, width/2),
      map(this.pos.y / this.depth,
          -1, 1, -height/2, height/2));
  }
  
  
  // Render the Star object for a frame
  process() {
    let prevScreenPos = this.getScreenPosition();
    
    this.depth -= warpSpeed;
    if (this.depth <= 0) {
      this.pos = this.randomVector();
      this.depth = width/2;
    }
    
    let screenPos = this.getScreenPosition();
    
    stroke(255);
    strokeWeight(map(this.depth, width/2, 0, 0, maxSize));
    line(
      screenPos.x, screenPos.y,
      prevScreenPos.x, prevScreenPos.y);
  }
}