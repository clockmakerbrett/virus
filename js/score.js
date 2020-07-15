class Score {
  constructor(game) {
    this.game = game;
    this.now = Date.now();
    this.start = 1584144000000;
    this.ticker = "";
  }
  runTicker() {
    this.start += 9000000;
    const date = new Date(this.start);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.ticker = `${day} / ${month} / ${year}`;
  }
  runLogic() {
    if (this.game.running) {
      this.runTicker();
    }
    if (this.start > this.now) {
      this.game.running = false;
      this.drawWin();
      console.log("if its logging why isnt it drawing?");
    }
  }
  drawLose() {
    this.game.context.save();
    this.game.context.fillStyle = "black";
    this.game.context.font = "32px sans-serif";
    this.game.context.fillText("You lost!", 150, 150);
    this.game.context.restore();
  }
  drawWin() {
    this.game.context.save();
    this.game.context.fillStyle = "black";
    this.game.context.font = "32px sans-serif";
    this.game.context.fillText("You won!", 300, 300);
    this.game.context.restore();
  }
  draw() {
    this.game.context.save();
    this.game.context.fillStyle = "black";
    this.game.context.font = "14px sans-serif";
    this.game.context.fillText(this.ticker, 300, 380);
    this.game.context.restore();
  }
}
