screen_drawer = new ScreenDrawer();
toast = new ToastManager();

function preload() {
  screen_drawer.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  screen_drawer.draw();
  toast.addToast("Welcome to miniverse!", "normal", 3);
}

function draw() {
  // align everything to the center of the screen
  if (screen_drawer.currentScreen == "Loading" && frameCount % 30 == 0) {
    screen_drawer.setScreen("Home");
  }
  screen_drawer.draw();
  toast.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
