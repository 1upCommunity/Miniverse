class Login extends Screen {
  constructor(parent) {
    super("Home", parent);

    this.animations_loaded = false;
  }

  preload() {
    this.image = loadImage("assets/Miniverse.png");
  }

  draw() {
    background(0);
    if (!this.animations_loaded) {
      this.animation_props = {
        y: windowHeight / 2 - this.image.height / 2,
      };

      gsap.to(this.animation_props, {
        duration: 1,
        y: (windowHeight / 8) * 3 - this.image.height / 2 - 100,
        ease: "power4.out",
      });

      // bind this.windowResized
      this.windowResized = this.windowResized.bind(this);
      window.addEventListener("resize", this.windowResized);

      this.animations_loaded = true;
    }
    image(
      this.image,
      window.innerWidth / 2 - this.image.width / 2,
      this.animation_props.y
    );

    fill(255);
    textSize(18);
    text(
      "Coming soon!",
      windowWidth / 2 - windowWidth / 8,
      this.image.height +
        100 +
        ((this.animation_props.y - (this.image.height / 8) * 3) / 8) * 6
    );
  }

  windowResized() {
    gsap.to(this.animation_props, {
      duration: 1,
      y: (windowHeight / 8) * 3 - this.image.height / 2 - 100,
      ease: "power4.out",
    });
  }
}
