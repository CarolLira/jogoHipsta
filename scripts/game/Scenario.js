class Scenario {
  constructor(sceneryImage, scenerySpeed) {
    this.sceneryImage = sceneryImage;
    this.scenerySpeed = scenerySpeed;
    this.x1 = 0;
    this.x2 = width;
  }
  
  display() {
    image(this.sceneryImage, this.x1, 0, width, height);
    image(this.sceneryImage, this.x2, 0, width, height);
  }
  
  move() {
    this.x1 = this.x1 - this.scenerySpeed;
    this.x2 = this.x2 - this.scenerySpeed;
    if(this.x1 < -width) {
       this.x1 = width;
    }
    if(this.x2 < -width) {
       this.x2 = width;
    }
  }
}