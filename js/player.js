class Player{
    constructor(name){
        this.name = name
        this.x = 0;
        this.y = 0;
        this.velX = 0;
        this.velY = 0;
        this.terminalVel = windowWidth / 50;
        this.friction = 0.9;
        
        this.db = firebase.initializeApp({
            apiKey: "AIzaSyBmciB9i29s9ZBXKo1yWdXMVEmI5jxO-JI",
            authDomain: "infected-bee30.firebaseapp.com",
            databaseURL: "https://infected-bee30-default-rtdb.firebaseio.com",
            projectId: "infected-bee30",
            storageBucket: "infected-bee30.appspot.com",
            messagingSenderId: "266440833007",
            appId: "1:266440833007:web:b18afcc186476009c4e81a",
            measurementId: "G-FD03M248JS"
          }).database();
        this.syncName()
    }

    update(){
        this.syncName()

        camera.x = this.x;
        camera.y = this.y;

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
    }

    draw(){
    }

    syncName(name){
        this.db.ref('players/' + this.name).update({"position": [this.x, this.y]});
    }
}