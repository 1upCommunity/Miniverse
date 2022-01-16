class PlayScreen{
    constructor(){
        this.substate = "name";
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
            this.player.draw()
            this.playerdrawer.draw()
            this.playerdrawer.update()
        }
    }

    setup(){
        this.player = null
        this.name_input = createInput("");
        this.name_input.position(windowWidth / 2 - this.name_input.width / 2, windowHeight / 10 * 4);
        this.name_button = createButton("Submit");
        this.name_button.position(windowWidth / 2 - textWidth("Submit") / 2, windowHeight / 10 * 5 - textWidth("Submit") / 2);
        this.name_button.mousePressed(() => {
            this.substate = "play";
            this.name_input.remove();
            this.name_button.remove();
            this.player = new Player(this.name_input.value());
        })
        this.name_input.hide()
        this.name_button.hide()
    }

    preload(){
    }
}