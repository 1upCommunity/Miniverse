class Chunk{
    constructor(x, y, w, h, texture){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.texture = texture;
    }
    draw(){
        push();
        translate(this.x * this.w, this.y * this.h);
        image(this.texture, 0, 0);
        pop();
    }
}