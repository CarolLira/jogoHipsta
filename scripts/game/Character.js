class Character extends Animation {
  constructor(
    matrixWidth, matrixHeight, 
    characterImage, x, yVariation,
    characterWidth, characterHeight, 
    spriteWidth, spriteHeight, whiteImage
  ) {
    super(
      matrixWidth, matrixHeight, 
      characterImage, x, yVariation,
      characterWidth, characterHeight, 
      spriteWidth, spriteHeight, whiteImage
    );
    
    this.yVariation = yVariation;
    this.initialY = height - this.characterHeight - yVariation;
    this.y = this.initialY;
    this.jumpSpeed = 0;
    this.gravity = 6;
    this.jumpHeight = -40;
    this.jumps = 0;
    this.invincible = false;
  }
  
  jump() {
    if (this.jumps < 2) {
        this.jumpSpeed = this.jumpHeight;
        this.jumps++;
    }
  }
  
  applyGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
    
    if (this.y > this.initialY) {
        this.y = this.initialY;
        this.jumps = 0;
    }
  }
  
  isInvincible() {
    this.invincible = true;
    setTimeout(() => {
      this.invincible = false;
    }, 1000);
  }
  
  isColliding(enemy, name) {
    let precision;
    if (this.invincible) {
      return false;
    }
    
    if (name == "dropEnemy") {
      precision = 0.7;
    } else {
      precision = 0.6;
    }
    
    const collision = collideRectRect(
      this.x, this.y, 
      this.characterWidth * precision, 
      this.characterHeight * precision,
      enemy.x, enemy.y, 
      enemy.characterWidth * precision, 
      enemy.characterHeight * precision
    );
        
    return collision;
  }
}