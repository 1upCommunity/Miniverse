class Player{
    constructor(name, db){
        this.name = name
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;
        this.terminalVel = windowWidth / 50;
        this.friction = 0.9;
        
        this.db = db
    }

    update(){
        this.syncName()

        // wasd movement
        if(keyIsDown(87)){
            this.velY -= 1;
        }
        if(keyIsDown(83)){
            this.velY += 1;
        }
        if(keyIsDown(65)){
            this.velX -= 1;
        }
        if(keyIsDown(68)){
            this.velX += 1;
        }
         
        // clamp velocity
        this.velX = constrain(this.velX, -this.terminalVel, this.terminalVel);
        this.velY = constrain(this.velY, -this.terminalVel, this.terminalVel);

        // update position
        this.x += this.velX;
        this.y += this.velY;

        // friction
        this.velX *= this.friction;
        this.velY *= this.friction;

        camera.x = this.x;
        camera.y = this.y;
    }

    draw(){
    }

    syncName(name){
        this.db.ref('players/' + this.name).update({"position": [this.x, this.y], "name": this.name});
    }
}