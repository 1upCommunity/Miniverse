class Player{
    constructor(name, db){
        this.name = name
        this.x = 0
        this.y = 0
        this.velX = 0;
        this.velY = 0;
        this.terminalVel = windowWidth / 50;
        this.friction = 0.9;
        this.infected = false;
        
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
        
        let inf = this.infected;
        // get if infected
        this.db.ref('players/').once('value').then(function(snapshot) {
            var players = snapshot.val()
            for(var i in players){
                if(players[i].name != self.name && players[i].infected == true && dist(players[i].position[0], players[i].position[1], camera.x, camera.y) < 25){
                    inf = true;
                }
            }
        })
        this.infected = inf;
    }

    draw(){
    }

    syncName(name){
        this.db.ref('players/' + this.name).update({"position": [this.x, this.y], "name": this.name, "infected": this.infected});
    }
}