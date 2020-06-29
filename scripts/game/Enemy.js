class Enemy extends Animation {
  constructor(
    name, matrixWidth, matrixHeight, 
    characterImage, x, yVariation,
    characterWidth, characterHeight, 
    spriteWidth, spriteHeight, whiteImage,
    speed, fixedHeight
  ) {
    super(
      matrixWidth, matrixHeight, 
      characterImage, x, yVariation, 
      characterWidth, characterHeight, 
      spriteWidth, spriteHeight, whiteImage
    );
    
    this.name = name;
    this.fixedHeight = fixedHeight;
    this.speed = speed;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.speed;
  }
  
  showUp() {
    this.x = width;
    if (!this.fixedHeight) {
      this.y = height - this.characterHeight - parseInt(random(height/2, height/3));
    }
  }
}