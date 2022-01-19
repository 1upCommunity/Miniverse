class Chunk {
  constructor(x, y, w, h, texture, collides = false) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texture = texture;

    this.collides = collides;
    if (this.collides) {
      this.body = Matter.Bodies.rectangle(
        this.x * this.w,
        this.y * this.h,
        this.w,
        this.h,
        { isStatic: true }
      );
      screens[2].map.bodies.push(this.body);
    }
  }

  draw() {
    image(this.texture, this.x * this.w, this.y * this.h);
  }
}
