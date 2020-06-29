class HomeStory {
  constructor(gameStory, timer) {
    this.gameStory = gameStory;
    this.timer = timer;
    this.nextButton = new ManagerButton('>', width/6 * 5 + 10, height/6 * 5, 'timer');
  }
  
  _historyBackground() {
    image(homeScreenImage, 0, 0, width, height);
  }
  
  _showStory() {
    stroke('black');
    fill(174, 253, 142, 240);
    rect(width/2 - 230, height/2 - 180, 460, 360, 15, 15, 15);
    textFont(font8bit);
    textSize(24);
    noStroke();
    textStyle(BOLD);
    fill('black');
    text(this.gameStory, width/2 - 200, height/2 - 160, 400, 320);
  }
  
  _nextButton() {
    this.nextButton.draw();
  }
  
  draw() {
    this._historyBackground();
    this._showStory();
    this._nextButton();
  }
}