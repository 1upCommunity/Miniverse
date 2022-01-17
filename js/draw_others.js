class OtherPlayerDrawer{
    constructor(db){
        this.db = db
        
        this.all_players = []

        this.db.ref("players").on("value", (snapshot) => {
            this.all_players = snapshot.val()
        })
        
    }

    update(){
        let temp = this.all_players
        this.db.ref("players").on("value", (snapshot) => {
            temp =  snapshot.val()
        })
        return temp;
    }

    draw(){
        this.all_players = this.update()
        for(var i in this.all_players){
            // if the player is close enough to draw
            if(screens[2].substate == "play" && dist(this.all_players[i].position[0], this.all_players[i].position[1], camera.x, camera.y) < 500 + windowHeight / 2){
                push()
                translate(-camera.x + windowWidth / 2, -camera.y + windowHeight / 2)
                if (this.all_players[i].infected == true){
                    fill(255, 0, 0)
                }
                else{
                    fill(0, 255, 0)
                }
                try{
                    // nametag
                    textSize(16)
                    text(this.all_players[i].name, this.all_players[i].position[0] - textWidth(this.all_players[i].name) / 2, this.all_players[i].position[1] - 25)
                    ellipse(this.all_players[i].position[0], this.all_players[i].position[1], 40, 40)
                }catch(e){}
                pop()
            }
        }
    }
}