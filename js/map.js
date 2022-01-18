class Map{
    constructor(db){
        this.db = db;
        this.chunks = {};
        this.textures = {};
    }

    preload(){
        // roads
        this.textures.road_side = loadImage("assets/road_side.png");
        this.textures.road_up = loadImage("assets/road_up.png");
        this.textures.road_turn_down_left = loadImage("assets/road_turn_down_left.png");
        this.textures.road_turn_down_right = loadImage("assets/road_turn_down_right.png");
        this.textures.road_turn_left_up = loadImage("assets/road_turn_left_up.png");
        this.textures.road_turn_right_up = loadImage("assets/road_turn_right_up.png");
        this.textures.crossroad = loadImage("assets/crossroad.png");
        this.textures.road_3side_up = loadImage("assets/3side_road_up.png");
        this.textures.road_3side_down = loadImage("assets/3side_road_down.png");
        this.textures.road_3side_left = loadImage("assets/3side_road_left.png");
        this.textures.road_3side_right = loadImage("assets/3side_road_right.png");
    }

    generate(){
        this.chunks = [];

        // Hand-made map
        this.chunks._0x0 = new Chunk(0, 0, 500, 500, this.textures.crossroad);
        this.chunks._1x0 = new Chunk(1, 0, 500, 500, this.textures.road_side);
        this.chunks._2x0 = new Chunk(2, 0, 500, 500, this.textures.road_side);
        this.chunks._3x0 = new Chunk(3, 0, 500, 500, this.textures.road_turn_left_up);
        this.chunks._3x_1 = new Chunk(3, -1, 500, 500, this.textures.road_up);
        this.chunks._3x_2 = new Chunk(3, -2, 500, 500, this.textures.road_3side_left);
        this.chunks._2x_2 = new Chunk(2, -2, 500, 500, this.textures.road_side);
        this.chunks._1x_2 = new Chunk(1, -2, 500, 500, this.textures.road_side);
        this.chunks._0x_2 = new Chunk(0, -2, 500, 500, this.textures.road_turn_down_right);
        this.chunks._0x_1 = new Chunk(0, -1, 500, 500, this.textures.road_up);
        this.chunks._3x_3 = new Chunk(3, -3, 500, 500, this.textures.road_up);
    }

    draw(){
        push();
        translate(-camera.x, -camera.y);
        for(var i in this.chunks){
            if(dist(this.chunks[i].x * this.chunks[i].w, this.chunks[i].y  * this.chunks[i].h, camera.x, camera.y) < windowHeight * 2){
                this.chunks[i].draw();
            }
        }
        pop();
    }
}