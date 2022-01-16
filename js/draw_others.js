class OtherPlayerDrawer{
    constructor(){
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
        
        this.all_players = []

        this.db.ref("players").on("value", (snapshot) => {
            this.all_players = []
            snapshot.forEach((child) => {
                this.all_players.push(child.val())
            })
        })
    }

    update(){
        this.db.ref("players").on("value", (snapshot) => {
            this.all_players = []
            snapshot.forEach((child) => {
                this.all_players.push(child.val())
            })
        })
        console.log(this.all_players)
    }

    draw(){
        for(var i in self.all_players){
            fill(255, 0, 0)
            ellipse(self.all_players[i].position[0], self.all_players[i].position[1], 40, 40)
        }
    }
}