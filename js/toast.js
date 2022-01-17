class Toast{
    constructor(text, color, time){
        this.text = text;
        this.color = color;
        this.time = time;

        this.toastdetails = {
            x: windowWidth / 2 - textWidth(this.text) / 2,  
            y: -32,
            opacity: 0
        }
        gsap.to(this.toastdetails, {
            y: 64,
            duration: 1,
        })
        gsap.to(this.toastdetails, {
            y: - 64,
            duration: 1,
            delay: time,
        })
        gsap.to(this.toastdetails, {
            opacity: 255,
            duration: 0.5,
        })
        gsap.to(this.toastdetails, {
            opacity: 0,
            duration: 0.5,
            delay: time,
        })

        setTimeout(() => {
            this.remove()
        }, time * 10 * 1000)
    }

    show(){
        push()
        textSize(32)
        fill(this.color)
        tint(255, 255, 255, this.toastdetails.opacity)
        text(this.text, this.toastdetails.x, this.toastdetails.y);
        pop()
    }

    remove(){
        toastqueue.pop(toastqueue.indexOf(this))
    }
}