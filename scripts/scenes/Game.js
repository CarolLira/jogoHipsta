class Game {
  constructor() {
    this.currentIndex = 0;
    this.currentPokemon = 0;
    this.initGameMap = tapeMap.gameMap;
  }
  
  setup() {
    scenario = new Scenario(sceneryImage, 6);
    createNewElement = new CreateNewElement();
    scores = new Scores();
    life = new Life(tapeMap.settings.maxLives, tapeMap.settings.initLives);

    restartButton = new ManagerButton('Reiniciar', width/2 - 92.415, height/1.2, 'homeScreen');
    const bulbasaur = new ScenarioElement(
      bulbasaurImage, 
      parseInt(random(10, width)), height/3, 
      35, 35, 6
    );
    const pikachu = new ScenarioElement(
      pikachuImage, 
      parseInt(random(10, width)), height/2.8, 
      35, 35, 6
    );
    const umbreon = new ScenarioElement(
      umbreonImage, 
      parseInt(random(10, width)), height/3.5, 
      50, 50, 6
    );
    const charmander = new ScenarioElement(
      charmanderImage, 
      parseInt(random(10, width)), height/3.8, 
      35, 35, 6
    );
    const squirtle = new ScenarioElement(
      squirtleImage, 
      parseInt(random(10, width)), height/3.8, 
      35, 35, 6
    );
    mainCharacter = new Character(
      660, 810, mainCharacterImage, 
      100, height/4, 110, 135, 220, 270, 0
    );
    const dropEnemy = new Enemy(
      "dropEnemy",
      312, 626, dropEnemyImage, 
      width - 52, height/4, 52, 52, 104, 104, 
      0, 10, true
    );
    const flyingDropEnemy = new Enemy(
      "flyingDropEnemy",
      400, 750, flyingDropEnemyImage, 
      width - 70, parseInt(random(height/2, height/3)), 
      52, 52, 200, 150, 2, 12, false
    );
    const trollEnemy = new Enemy(
      "trollEnemy",
      1600, 2000, trollEnemyImage, 
      width, height/5, 150, 150, 
      400, 400, 2, 10, true
    );

    createNewElement.addNewEnemy(enemiesArray, dropEnemy);
    createNewElement.addNewEnemy(enemiesArray, flyingDropEnemy);
    createNewElement.addNewEnemy(enemiesArray, trollEnemy);
    
    createNewElement.addNewEnemy(pokemonArray, bulbasaur);
    createNewElement.addNewEnemy(pokemonArray, pikachu);
    createNewElement.addNewEnemy(pokemonArray, umbreon);
    createNewElement.addNewEnemy(pokemonArray, charmander);
    createNewElement.addNewEnemy(pokemonArray, squirtle);
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      mainCharacter.jump();
      jumpSound.play();
      jumpSound.setVolume(3);
    }
  }
  
  draw() {
    scenario.display();
    scenario.move();

    life.display();
    
    scores.display();
    scores.updateScore();

    pokemonArray.forEach((pokemon)=>{
      pokemon.display();
      pokemon.move();
    });
    
    mainCharacter.display();
    mainCharacter.applyGravity();

    const currentLine = this.initGameMap[this.currentIndex];
    const enemy = enemiesArray[currentLine.enemy];
    const visibleEnemy = enemy.x < -enemy.characterWidth;
    
    enemy.speed = currentLine.speed;
    enemy.display();
    enemy.move();

    if(visibleEnemy) {
      this.currentIndex++;
      enemy.showUp();
        if (this.currentIndex >= this.initGameMap.length) {
          this.currentIndex = 0;
        }
    }

    if (mainCharacter.isColliding(enemy, enemy.name)) {
      life.lostLife();
      mainCharacter.isInvincible();
      if (life.returnLives() < 0) {
        image(gameOverImage, width/2 - 206, height/8);    
        restartButton.draw();
        soundtrack.stop();
        noLoop();
      }
    }
  }
}