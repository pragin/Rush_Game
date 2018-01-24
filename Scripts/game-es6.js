// logic for the Count Game

class Game {
  constructor() {
    console.log(`Welcome to the game, Version ${this.version()} `);

    this.loadSound();

    this.canvas = document.getElementById("game-canvas");
    this.stage = new createjs.Stage(this.canvas);

    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;


    //enable mouseover
    this.stage.enableMouseOver();

    //enable tap on touch device
    createjs.Touch.enable(this.stage);

    //enable retina screen
    this.retinalize();

    window.debugStage = this.stage;

    createjs.Ticker.setFPS(60);

      //Keep redrawing the Stage
    createjs.Ticker.on("tick", this.stage);

    this.restartGame();
  }

  version() {
    return '1.0.0';
  }

  loadSound(){
  }

  restartGame() {

  }

  retinalize() {
    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    let ratio = window.devicePixelRatio;
    if(ratio == undefined) {
      return;
    }

    this.canvas.setAttribute('width', Math.round(this.stage.width * ratio ));
    this.canvas.setAttribute('height', Math.round(this.stage.height * ratio ));

    this.stage.scaleX = this.stage.scaleY = ratio;

    //set CSS styles
    this.canvas.style.width = this.stage.width + 'px';
    this.canvas.style.height = this.stage.height + 'px';
  }
}

var game = new Game();