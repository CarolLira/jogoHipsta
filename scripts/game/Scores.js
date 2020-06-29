class Scores {
  constructor() {
    this.points = 0;
  }
  
  display() {
    textFont(font);
    textAlign(RIGHT);
    fill('#e8aeae');
    stroke('black');
    textStyle(BOLD);
    textSize(36);
    text(parseInt(this.points), width - 30, 50);
  }
  
  updateScore() {
    this.points = this.points + 0.2;
  }
}