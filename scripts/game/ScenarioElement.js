class ScenarioElement {
  constructor(elementImage, xVariation, yVariation, elementWidth, elementHeight, elementSpeed) {
    this.elementImage = elementImage;
    this.xVariation = xVariation;
    this.x = width - xVariation;
    this.yVariation = yVariation;
    this.y = height - elementHeight - yVariation;
    this.elementWidth = elementWidth;
    this.elementHeight = elementHeight;
    this.elementSpeed = elementSpeed;
  }
  
  display() {
    image(this.elementImage, this.x, this.y, this.elementWidth, this.elementHeight);
  }
  
   move() {
    this.x = this.x - this.elementSpeed;
    if(this.x < -this.elementWidth - this.xVariation) {
       this.x = width;
    }
  }
}