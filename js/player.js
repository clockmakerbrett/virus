class Player extends Character {
  constructor(game, position, dimensions, direction, infected) {
    super(game, position, dimensions, direction, infected);
    this.setEventListeners();
    this.setInitialPosition();
  }
  setEventListeners() {
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
      const key = event.key;
      switch (key) {
        case "ArrowLeft":
          this.direction = "left";
          this.validateMove();
          break;
        case "ArrowRight":
          this.direction = "right";
          this.validateMove();
          break;
        case "ArrowUp":
          this.direction = "up";
          this.validateMove();
          break;
        case "ArrowDown":
          this.direction = "down";
          this.validateMove();
      }
    });
  }
  setInitialPosition() {
    this.position[0] = 310;
    this.position[1] = 180;
  }
  isTouchingInfected(enemy) {
    if (enemy.infected) {
      this.game.lose();
    }
  }
  runLogic() {
    this.isTouchingBoundary();
    for (let enemy of this.game.enemies) {
      this.isTouchingOther(enemy);
    }
  }
  draw() {
    this.game.context.save();
    this.game.context.fillStyle = "blue";
    this.game.context.fillRect(
      this.position[0],
      this.position[1],
      this.dimensions[0],
      this.dimensions[1]
    );
    this.game.context.restore();
  }
}
