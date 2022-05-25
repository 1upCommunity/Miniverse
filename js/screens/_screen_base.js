class Screen {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
  }

  changeScreen(name) {
    this.parent.setScreen(name);
  }
}
