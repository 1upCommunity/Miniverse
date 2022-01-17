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
            push()
            translate(-camera.x + windowWidth / 2, -camera.y + windowHeight / 2)
            fill(255, 0, 0)
            try{
                ellipse(this.all_players[i].position[0], this.all_players[i].position[1], 40, 40)
            }catch(e){}
            pop()
        }
    }
}