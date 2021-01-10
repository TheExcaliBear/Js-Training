class Game {
  constructor(
    screenX,
    screenY,
    playerHeight,
    playerWidth,
    bananaHeight,
    bananaWidth,
    trashHeight,
    trashWidth,
    carHeight,
    carWidth,
    spaceshipHeight,
    spaceshipWidth,
    stoneHeight,
    stoneWidth,
    amongHeight,
    amongWidth
  ) {
    this.screenX = screenX;
    this.screenY = screenY;
    this.isPlaying = true;
    this.score = 0;
    this.level = 0;
    this.timer = 150;
    this.eventHandler = new EventHandler();
    this.fpsInterval = 50;
    this.spaceships = [
      new Obstacle(
        "spaceship",
        true,
        screenX,
        screenY,
        0,
        0.1 * screenY,
        spaceshipHeight,
        spaceshipWidth
      ),
      new Obstacle(
        "spaceship",
        true,
        screenX,
        screenY,
        screenX / 4,
        0.1 * screenY,
        spaceshipHeight,
        spaceshipWidth
      ),
      new Obstacle(
        "spaceship",
        true,
        screenX,
        screenY,
        (2 * screenX) / 4,
        0.1 * screenY,
        spaceshipHeight,
        spaceshipWidth
      ),
    ];
    this.cars = [
      new Obstacle(
        "car",
        true,
        screenX,
        screenY,
        0,
        0.2 * screenY,
        carHeight,
        carWidth
      ),
      new Obstacle(
        "car",
        true,
        screenX,
        screenY,
        screenX / 4,
        0.2 * screenY,
        carHeight,
        carWidth
      ),
      new Obstacle(
        "car",
        true,
        screenX,
        screenY,
        (2 * screenX) / 4,
        0.2 * screenY,
        carHeight,
        carWidth
      ),
      new Obstacle(
        "car",
        true,
        screenX,
        screenY,
        (3 * screenX) / 4,
        0.2 * screenY,
        carHeight,
        carWidth
      ),
    ];
    this.amongs = [
      new Obstacle(
        "among",
        true,
        screenX,
        screenY,
        0,
        0.3 * screenY,
        amongHeight,
        amongWidth
      ),
      new Obstacle(
        "among",
        true,
        screenX,
        screenY,
        screenX / 4,
        0.3 * screenY,
        amongHeight,
        amongWidth
      ),
      new Obstacle(
        "among",
        true,
        screenX,
        screenY,
        (2 * screenX) / 4,
        0.3 * screenY,
        amongHeight,
        amongWidth
      ),
      new Obstacle(
        "among",
        true,
        screenX,
        screenY,
        (3 * screenX) / 4,
        0.3 * screenY,
        amongHeight,
        amongWidth
      ),
    ];
    this.stones = [
      new Obstacle(
        "stone",
        false,
        screenX,
        screenY,
        0,
        screenY - 0.5 * screenY,
        stoneHeight,
        stoneWidth
      ),
      new Obstacle(
        "stone",
        false,
        screenX,
        screenY,
        screenX / 5,
        screenY - 0.5 * screenY,
        stoneHeight,
        stoneWidth
      ),
      new Obstacle(
        "stone",
        false,
        screenX,
        screenY,
        (2 * screenX) / 5,
        screenY - 0.5 * screenY,
        stoneHeight,
        stoneWidth
      ),
    ];
    this.bananas = [
      new Obstacle(
        "banana",
        false,
        screenX,
        screenY,
        0,
        screenY - 0.3 * screenY,
        bananaHeight,
        bananaWidth
      ),
      new Obstacle(
        "banana",
        false,
        screenX,
        screenY,
        screenX / 5,
        screenY - 0.3 * screenY,
        bananaHeight,
        bananaWidth
      ),
      new Obstacle(
        "banana",
        false,
        screenX,
        screenY,
        (2 * screenX) / 5,
        screenY - 0.3 * screenY,
        bananaHeight,
        bananaWidth
      ),
      new Obstacle(
        "banana",
        false,
        screenX,
        screenY,
        (3 * screenX) / 5,
        screenY - 0.3 * screenY,
        bananaHeight,
        bananaWidth
      ),
      new Obstacle(
        "banana",
        false,
        screenX,
        screenY,
        (4 * screenX) / 5,
        screenY - 0.3 * screenY,
        bananaHeight,
        bananaWidth
      ),
    ];
    this.trashs = [
      new Obstacle(
        "trash",
        false,
        screenX,
        screenY,
        0,
        screenY - 0.2 * screenY,
        trashHeight,
        trashWidth
      ),
      new Obstacle(
        "trash",
        false,
        screenX,
        screenY,
        screenX / 4,
        screenY - 0.2 * screenY,
        trashHeight,
        trashWidth
      ),
      new Obstacle(
        "trash",
        false,
        screenX,
        screenY,
        (2 * screenX) / 4,
        screenY - 0.2 * screenY,
        trashHeight,
        trashWidth
      ),
      new Obstacle(
        "trash",
        false,
        screenX,
        screenY,
        (3 * screenX) / 4,
        screenY - 0.2 * screenY,
        trashHeight,
        trashWidth
      ),
    ];
    this.player = new Ofeq(
      screenX,
      screenY,
      playerHeight,
      playerWidth,
      5,
      99999,
      300,
      "B",
      "Pluto",
      "Closed"
    );
  }
}