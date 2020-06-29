class HomeScreen {
  setup() {
    homeWitch = new Character(
      1920, 1440, homeWitchImage, 
      width/2 - 120, height/2 - 190, 280, 280, 480, 480, 3
    );
    
    managerButton = new ManagerButton('Iniciar', width/2 - 74.07, height/2, 'homeStory');
}
  
  draw() {
    this._backgroundImage();
    this._title();
    this._button(managerButton);
    homeWitch.display();
  }
  
  _backgroundImage() {
    image(homeScreenImage, 0, 0, width, height);
  }
  
  _title() {
    textFont(font);
    fill('#e8aeae');
    stroke('black');
    strokeWeight(4);
    textStyle(BOLD);
    textSize(120);
    textAlign(CENTER);
    text('Hipsta', width/2, height/5);
    textSize(62);
    text('em busca de Chronus', width/2, height/3.2);
  }
  
  _button(managerButton) {
    managerButton.y = height/6 * 5;
    managerButton.draw();
  }
}