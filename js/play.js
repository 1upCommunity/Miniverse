class PlayScreen{
    constructor(){
        this.substate = "name";

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

          this.map = new Map(this.db)
    }

    draw(){
        background(0);
        if(this.substate == "name"){
            fill(255);
            textSize(windowWidth / 50);
            text("And your name is...", windowWidth / 2 - textWidth("And your name is...") / 2, windowHeight / 10 * 3 - textWidth("And your name is...") / 2);
            this.name_button.show();
            this.name_input.show();
        }
        if(this.substate == "play"){
            this.player.update();
            this.player.draw();
            this.map.draw();
        }
    }

    setup(){
        this.player = null
        this.map.generate()
        this.name_input = createInput("");
        this.name_input.position(windowWidth / 2 - this.name_input.width / 2, windowHeight / 10 * 4);
        this.name_button = createButton("Submit");
        this.name_button.position(windowWidth / 2 - textWidth("Submit") / 2, windowHeight / 10 * 5 - textWidth("Submit") / 2);
        this.name_button.mousePressed(() => {
            if(this.name_input.value() != ""){
                this.substate = "play";
                this.name_input.remove();
                this.name_button.remove();
                this.player = new Player(this.name_input.value(), this.db);
            }else{
                alert("Please enter a name!");
            }
        })
        this.name_input.hide()
        this.name_button.hide()
    }

    preload(){
        this.map.preload();
    }
}