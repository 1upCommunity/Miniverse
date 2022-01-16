var screens = []
screens[0] = new LoadingScreen();
screens[1] = new MenuScreen();
screens[2] = new PlayScreen();
var game_state = "load"
var playerdrawer = new OtherPlayerDrawer()

function preload() {
    screens[0].preload()
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    game_state = "load"
    for(var i in screens){
        screens[i].preload()
        screens[i].setup()
    }
    screens[0].draw();
    game_state = "menu"
}
  
function draw() {
    background(0);
    if(game_state == "load"){
        screens[0].draw();
    }
    if(game_state == "menu"){
        screens[1].draw();
    }
    if(game_state == "play"){
        screens[2].draw();
    }
    playerdrawer.draw();
    playerdrawer.update();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
