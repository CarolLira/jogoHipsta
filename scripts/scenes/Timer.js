class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }
  
   _backgroundImage() {
    image(homeScreenImage, 0, 0, width, height);
  }
  
  _display() {
    textFont(font);
    fill('#e8aeae');
    stroke('black');
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    textSize(80);
    text(this.seconds, width/2, height/2);
    
    if (frameCount % 60 == 0 && this.seconds > 0) {
      this.seconds --;
    }
    if (this.seconds == 0) {
      currentScene = 'game';
    }
  }
  
  draw() {
    this._backgroundImage();
    this._display();
  }
}