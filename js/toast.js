class Toast {
  constructor(text, color, time) {
    this.text = text;
    this.color = color;
    this.time = time;

    this.toastdetails = {
      x: window.innerWidth / 2 - textWidth(this.text) / 2,
      y: -32,
    };
    this.animation_init = false;
  }

  show() {
    push();
    textSize(32);
    fill(this.color);
    text(this.text, this.toastdetails.x, this.toastdetails.y);
    pop();

    if (!this.animation_init) {
      gsap.to(this.toastdetails, {
        y: 32,
        duration: 1,
      });
      gsap.to(this.toastdetails, {
        y: -64,
        duration: 1,
        delay: this.time,
      });
      this.animation_init = true;
    }
  }
}

class ToastManager {
  constructor() {
    this.toasts = [];
  }

  addToast(text, color = "normal", duration = 1) {
    this.toasts.push(new Toast(text, color, duration));

    setTimeout(() => {
      this.toasts.shift();
    }, duration * 10000);
  }

  remove(toast) {
    this.displayed_toasts.splice(this.displayed_toasts.indexOf(toast), 1);
  }

  draw() {
    for (let i = 0; i < this.toasts.length; i++) {
      this.toasts[i].show();
    }
  }
}
