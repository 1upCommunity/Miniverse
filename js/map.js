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
        this.textures.road_end_up = loadImage("assets/road_end_up.png");
        this.textures.road_end_down = loadImage("assets/road_end_down.png");
        this.textures.road_end_left = loadImage("assets/road_end_left.png");
        this.textures.road_end_right = loadImage("assets/road_end_right.png");

        // buildings
        this.textures.building_1 = loadImage("assets/building_1.png");
        this.textures.building_2 = loadImage("assets/building_2.png");
        this.textures.hospital = loadImage("assets/hospital.png");
    }

    generate(){
        this.chunks = [];

        // Hand-made map

        // roads
        this.chunks._0x0 = new Chunk(0, 0, 500, 500, this.textures.crossroad);
        this.chunks._1x0 = new Chunk(1, 0, 500, 500, this.textures.road_side);
        this.chunks._2x0 = new Chunk(2, 0, 500, 500, this.textures.road_side);
        this.chunks._3x0 = new Chunk(3, 0, 500, 500, this.textures.road_turn_left_up);
        this.chunks._3x_1 = new Chunk(3, -1, 500, 500, this.textures.road_up);
        this.chunks._3x_2 = new Chunk(3, -2, 500, 500, this.textures.road_3side_left);
        this.chunks._2x_2 = new Chunk(2, -2, 500, 500, this.textures.road_side);
        this.chunks._1x_2 = new Chunk(1, -2, 500, 500, this.textures.road_side);
        this.chunks._0x_2 = new Chunk(0, -2, 500, 500, this.textures.crossroad);
        this.chunks._0x_1 = new Chunk(0, -1, 500, 500, this.textures.road_up);
        this.chunks._3x_3 = new Chunk(3, -3, 500, 500, this.textures.road_up);
        this.chunks.__1x0 = new Chunk(-1, 0, 500, 500, this.textures.road_side);
        this.chunks.__2x0 = new Chunk(-2, 0, 500, 500, this.textures.road_side);
        this.chunks.__3x0 = new Chunk(-3, 0, 500, 500, this.textures.road_turn_right_up);
        this.chunks.__3x_1 = new Chunk(-3, -1, 500, 500, this.textures.road_up);
        this.chunks.__3x_2 = new Chunk(-3, -2, 500, 500, this.textures.road_3side_right);
        this.chunks.__2x_2 = new Chunk(-2, -2, 500, 500, this.textures.road_side);
        this.chunks.__1x_2 = new Chunk(-1, -2, 500, 500, this.textures.road_side);
        this.chunks.__0x_2 = new Chunk(-0, -2, 500, 500, this.textures.crossroad);
        this.chunks._3x_3 = new Chunk(3, -3, 500, 500, this.textures.road_up);
        this.chunks.__3x_3 = new Chunk(-3, -3, 500, 500, this.textures.road_up);
        this.chunks.__3x_4 = new Chunk(-3, -4, 500, 500, this.textures.road_up);
        this.chunks.__3x_5 = new Chunk(-3, -5, 500, 500, this.textures.road_up);
        this.chunks.__3x_6 = new Chunk(-3, -6, 500, 500, this.textures.road_3side_right);
        this.chunks.__3x_7 = new Chunk(-3, -7, 500, 500, this.textures.road_up);
        this.chunks.__3x_8 = new Chunk(-3, -8, 500, 500, this.textures.road_up);
        this.chunks.__3x_9 = new Chunk(-3, -9, 500, 500, this.textures.road_turn_down_right);
        this.chunks.__2x_9 = new Chunk(-2, -9, 500, 500, this.textures.road_side);
        this.chunks.__1x_9 = new Chunk(-1, -9, 500, 500, this.textures.road_side);
        this.chunks.__0x_9 = new Chunk(0, -9, 500, 500, this.textures.road_turn_down_left);
        this.chunks.__0x_8 = new Chunk(0, -8, 500, 500, this.textures.road_up);
        this.chunks.__0x_7 = new Chunk(0, -7, 500, 500, this.textures.road_up);
        this.chunks.__0x_6 = new Chunk(0, -6, 500, 500, this.textures.crossroad);
        this.chunks.__0x_5 = new Chunk(0, -5, 500, 500, this.textures.road_up);
        this.chunks.__0x_4 = new Chunk(0, -4, 500, 500, this.textures.road_up);
        this.chunks.__0x_3 = new Chunk(0, -3, 500, 500, this.textures.road_up);
        this.chunks.__1x_6 = new Chunk(-1, -6, 500, 500, this.textures.road_side);
        this.chunks.__2x_6 = new Chunk(-2, -6, 500, 500, this.textures.road_side);
        this.chunks._1x_6 = new Chunk(1, -6, 500, 500, this.textures.road_side);
        this.chunks._2x_6 = new Chunk(2, -6, 500, 500, this.textures.road_side);
        this.chunks._3x_6 = new Chunk(3, -6, 500, 500, this.textures.road_turn_down_left);
        this.chunks._3x_5 = new Chunk(3, -5, 500, 500, this.textures.road_up);
        this.chunks._3x_4 = new Chunk(3, -4, 500, 500, this.textures.road_up);
        this.chunks._0x1 = new Chunk(0, 1, 500, 500, this.textures.road_end_down);

        // buildings
        this.chunks.__1x_1 = new Chunk(-1, -1, 500, 500, this.textures.building_1);
        this.chunks.__2x_1 = new Chunk(-2, -1, 500, 500, this.textures.building_2);
        this.chunks._1x_1 = new Chunk(1, -1, 500, 500, this.textures.hospital);
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

        // current chunk text
        if(debug){
            let currentChunk = [round(camera.x / 500), round(camera.y / 500)];
            push();
            fill(255);
            textSize(windowWidth / 50);
            text("current chunk: " + currentChunk[0] + "x" + currentChunk[1], windowWidth / 2 - textWidth("current chunk: " + currentChunk[0] + "x" + currentChunk[1]) / 2, windowHeight / 10 * 8 - textWidth("current chunk: " + currentChunk[0] + "x" + currentChunk[1]) / 2);
            pop();
        }
    }
}