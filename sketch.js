var screens = []
screens[0] = new LoadingScreen();
screens[1] = new MenuScreen();
screens[2] = new PlayScreen();
var game_state = "load"
var playerdrawer = new OtherPlayerDrawer(screens[2].db)
var toastqueue = []
let debug = false;
let engine = Matter.Engine.create();
let world = engine.world;
let circle;

function preload() {
    screens[0].preload()
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    game_state = "load"
    for(var i in screens){
        screens[i].preload()
        screens[i].setup()
    }
    screens[2].preload()
    screens[0].draw();
    game_state = "menu"
    displayToast("Welcome to the game!", "white", 2, 0)

    // create a Matter.js engine
    engine = Matter.Engine.create();
    world = engine.world;

    // add a circle to the world
    circle = Matter.Bodies.circle(windowWidth / 2, windowHeight / 2, 50, {
        restitution: 0.9,
        friction: 0.5,
        density: 0.01,
    });
    Matter.World.add(world, circle);
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
        playerdrawer.draw();
    }

    for(var i in toastqueue){
        toastqueue[i].show();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function displayToast(text, color, time, delay){
    setTimeout(() => {
        _displayToast(text, color, time)
    }, delay * 1000)
}


function _displayToast(text, color, time){
    let t = new Toast(text, color, time)
    toastqueue.push(t)
    t.show()
}
