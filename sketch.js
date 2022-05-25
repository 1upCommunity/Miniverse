screen_drawer = new ScreenDrawer();

function preload() {
  screen_drawer.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  screen_drawer.draw();
}

function draw() {
  // align everything to the center of the screen
  if (screen_drawer.currentScreen == "Loading" && frameCount % 30 == 0) {
    screen_drawer.setScreen("Home");
  }
  background(255);
  screen_drawer.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
