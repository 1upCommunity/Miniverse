class Play extends Screen {
  constructor(parent) {
    super("Play", parent);

    this.init = false;
  }

  preload() {
    this.image = loadImage("assets/Miniverse.png");
  }

  draw() {
    if (!this.init) {
      this.user_ref = firebase
        .firestore()
        .collection("Users")
        .doc(localStorage.getItem("name"));
      this.user_ref.set({
        available: true,
        pet: null,
        player_render_details: {
          x: 0,
          y: 0,
        },
        server: false,
      });

      // when the window closes, delete the user
      window.addEventListener("beforeunload", () => {
        this.user_ref.delete();
      });

      this.init = true;
    }
    background(0);
  }
}
