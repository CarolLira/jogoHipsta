class Life {
  constructor(maxLives, initLives) {
    this.maxLives = maxLives;
    this.initLives = initLives;
    this.lives = this.initLives;
    this.width = 35;
    this.height = 25;
    this.initialX = 20;
    this.y = 20;
    this.lifeCathed = false;
  }
  
  returnLives() {
    return this.lives;
  }
  
  display() {
    for(let i = 0; i < this.lives; i++) {
      const heartMargin = i * 10;
      const heartPosition = this.initialX * (i + 1);
      
      image(heartImage, heartPosition + heartMargin, this.y, this.width, this.height);
    }
  }
  
  catchLife() {
    if (this.lives < this.maxLives) {
      this.lives ++;
    }
  }
  
  lostLife() {
    this.lives--;
  }
}