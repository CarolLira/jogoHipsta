class ManagerButton {
  constructor(text, x, y, scene) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text).hide();
    this.scene = scene;
  }

  draw() {
    this.button.show();
    this.button.addClass('button-home-screen');
    this.button.mousePressed(() => {
      this._changeScreen(this.scene);
    });
    this.button.position(this.x, this.y);
  }
  
  _changeScreen(scene) {
    this.button.hide();
    if (scene == 'homeScreen') {
      gameSetup.restart();
      currentScene = scene;
    } else {
      currentScene = scene;
    }
    loop();
  }
}