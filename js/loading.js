class LoadingScreen {
  constructor() {}

  draw() {
    background(0);
    push();
    tint(255, 255, 255, abs(sin(frameCount * 0.05)) * 255);
    image(this.img, windowWidth / 2 - 250, windowHeight / 2 - 250, 500, 500);
    fill(255);
    textSize(windowWidth / 50);
    text(
      "loading",
      windowWidth / 2 - textWidth("loading") / 2,
      (windowHeight / 10) * 8 - textWidth("loading") / 2
    );
    pop();
  }

  setup() {}

  preload() {
    this.img = loadImage("assets/INFECTED.png");
  }
}
