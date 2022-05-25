let parent_, self;

class Home extends Screen {
  constructor(parent) {
    super("Home", parent);
    this.parent = parent;
    parent_ = parent;
    self = this;

    this.animations_loaded = false;
  }

  preload() {
    this.image = loadImage("assets/Miniverse.png");

    this.play_button = new Clickable();
    this.play_button.text = "Play";
    this.play_button.color = "#00ffff";
    this.play_button.width = windowWidth / 4;
    this.play_button.onPress = function () {
      parent_.setScreen("Play");
      self.textInput.hide();
      localStorage.setItem("name", self.textInput.value());
    };
    this.play_button.onHover = function () {
      this.stroke = "#00ffff";
    };
    this.play_button.onOutside = function () {
      this.stroke = "#00ffff";
    };
  }

  draw() {
    background(0);
    if (!this.animations_loaded) {
      this.textInput = createInput();
      this.textInput.position(
        windowWidth / 2 - windowWidth / 8,
        windowHeight / 2
      );
      this.textInput.size(windowWidth / 4, 30);
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
    this.play_button.locate(
      windowWidth / 2 - windowWidth / 8,
      this.image.height +
        200 +
        ((this.animation_props.y - (this.image.height / 8) * 3) / 8) * 6
    );
    this.play_button.width = windowWidth / 4;
    this.play_button.draw();

    fill(255);
    textSize(18);
    text(
      "And your name is...",
      windowWidth / 2 - windowWidth / 8,
      this.image.height +
        100 +
        ((this.animation_props.y - (this.image.height / 8) * 3) / 8) * 6
    );
    this.textInput.position(
      windowWidth / 2 - windowWidth / 8,
      this.image.height +
        120 +
        ((this.animation_props.y - (this.image.height / 8) * 3) / 8) * 6
    );
    this.textInput.size(windowWidth / 4, 30);
  }

  windowResized() {
    gsap.to(this.animation_props, {
      duration: 1,
      y: (windowHeight / 8) * 3 - this.image.height / 2 - 100,
      ease: "power4.out",
    });
  }
}
