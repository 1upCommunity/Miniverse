class MenuScreen {
  constructor() {}

  draw() {
    background(0);
    push();
    image(
      this.img,
      windowWidth / 2 - 250,
      (windowHeight / 10) * 3 - 250,
      500,
      500
    );
    pop();
  }

  setup() {
    this.buttons = [];
  }

  preload() {
    this.img = loadImage("assets/INFECTED.png");

    this.button = createButton("Play");
    this.button.position(
      windowWidth / 2 - textWidth("Play") / 2,
      (windowHeight / 10) * 6 - textWidth("Play") / 2
    );
    this.button.mousePressed(() => {
      game_state = "play";
      this.button.remove();
    });
  }
}
