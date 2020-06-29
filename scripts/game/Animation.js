class Animation {
  constructor(
    matrixWidth, matrixHeight, 
    characterImage, x, yVariation, 
    characterWidth, characterHeight, 
    spriteWidth, spriteHeight, whiteImage
  ) {
      
    this.matrixWidth = matrixWidth;
    this.matrixHeight = matrixHeight;
    this.characterImage = characterImage;
    this.characterWidth = characterWidth;
    this.characterHeight = characterHeight;
    this.x = x;
    this.yVariation = yVariation;
    this.y = height - this.characterHeight - yVariation;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.whiteImage = whiteImage;
    
    this.matrix = [];
    this.spritePosition = [];
    
    for(var i = 0; i <= this.matrixHeight; i = i + this.spriteHeight){
        for(var j = 0; j <= this.matrixWidth; j = j + this.spriteWidth){
          this.spritePosition.push(j,i);
          this.matrix.push(this.spritePosition);
          this.spritePosition = [];
      }
    }
    this.currentFrame = 0;
}
  
  display() {
    image(this.characterImage, this.x, this.y, this.characterWidth, this.characterHeight, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight);
    
    this.animate();
  }
  
   animate() {
    this.currentFrame++;
     
    if (this.whiteImage != 0) {
      if(this.currentFrame == this.matrix.length - this.whiteImage) {
        this.currentFrame = 0;
      }
    } else {
      if(this.currentFrame == this.matrix.length) {
        this.currentFrame = 0;
      }
    }
  }
  
}