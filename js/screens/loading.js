class Loading extends Screen {
  constructor(parent) {
    super("Loading", parent);

    this.current = 0;
    this.prefixes = ["Loading", "Loading .", "Loading ..", "Loading ..."];
  }

  preload() {
    this.image = loadImage("assets/Miniverse.png");
  }

  draw() {
    background(0);
    image(
      this.image,
      window.innerWidth / 2 - this.image.width / 2,
      window.innerHeight / 2 - this.image.height / 2
    );

    fill(255);
    textSize(18);
    text(
      this.prefixes[this.current],
      windowWidth / 2 - textWidth(this.prefixes[this.current]) / 2,
      windowHeight / 2 + this.image.height / 2 + 50
    );

    if (frameCount % 20 == 0) {
      this.current++;
      if (this.current > 3) {
        this.current = 0;
      }
    }
  }
}
