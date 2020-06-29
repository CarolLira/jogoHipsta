class GameSetup {
  restart() {
    homeScreen = new HomeScreen();
    homeScreen.setup();
    homeStory = new HomeStory(gameStoryText, 3);
    timer = new Timer(3);
    game = new Game();
    game.setup();
    allScenes = {
      homeScreen, homeStory, timer, game
    };
    frameRate(42);
    soundtrack.setVolume(0.2);
    soundtrack.loop();
  }
}