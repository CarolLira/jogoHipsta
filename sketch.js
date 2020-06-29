function setup() {
  createCanvas(windowWidth, windowHeight);
  gameSetup = new GameSetup();
  gameSetup.restart();
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  allScenes[currentScene].draw();
}




