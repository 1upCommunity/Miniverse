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
        this.infect_informed = [false, false];
        this.infected_snapshot_time = 0;
        this.body = circle;
        
        this.db = db
        displayToast("Welcome to the game, " + this.name + "!", "white", 2, 0)
        displayToast("Tip: Use WASD to move.", "white", 2, 2)
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

        // friction
        this.velX *= this.friction;
        this.velY *= this.friction;

        Matter.Body.setVelocity(this.body, {x: this.velX, y: this.velY});

        this.x = this.body.position.x;
        this.y = this.body.position.y;

        camera.x = this.x;
        camera.y = this.y;
        
        // get if infected
        this.db.ref('players/').once('value').then(function(snapshot) {
            var players = snapshot.val()
            for(var i in players){
                if(players[i].name != self.name && players[i].infected == true && dist(players[i].position[0], players[i].position[1], camera.x, camera.y) < 25){
                    screens[2].player.infected = true;
                }
            }
        })

        if(this.infect_informed[1] != this.infected){this.infect_informed[0] = false}
        // toast if infected
        if(!this.infect_informed[0] && this.infect_informed[1] != this.infected){
            if(this.infected){
                displayToast("You have been infected!", "red", 2, 0)
                this.infect_informed[0] = true;
                this.infect_informed[1] = true;
                this.db.ref('players/' + this.name).update({"infected": true});
                this.infected_snapshot_time = millis();
            } else {
                displayToast("You have been cured!", "green", 2, 0)
                this.infect_informed[0] = true;
                this.infect_informed[1] = false;
                this.db.ref('players/' + this.name).update({"infected": false});
            }
        }

        if(this.infected && millis() - this.infected_snapshot_time > 10000){
            this.infected = false;
            this.db.ref('players/' + this.name).update({"infected": false});
        }


    }

    draw(){
    }

    syncName(name){
        // get "infected" value
        this.db.ref('players/' + this.name).once('value').then(function(snapshot) {
            var player = snapshot.val()
            this.infected = player.infected
        }.bind(this))
        this.db.ref('players/' + this.name).update({"position": [this.x, this.y], "name": this.name});
    }
}