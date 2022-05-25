class ScreenDrawer{
    constructor(){
        this.screens = {
            "Loading": new Loading(this),
            "Home": new Home(this),
            "Login": new Login(this),
        }
        this.currentScreen = "Loading"
    }

    preload(){
        for(let screen in this.screens){
            this.screens[screen].preload()
        }
    }

    setScreen(name){
        this.currentScreen = name
    }

    draw(){
        if(this.currentScreen){
            this.screens[this.currentScreen].draw()
        }
    }
}