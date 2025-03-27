class Que{
    constructor(){
        this.queWidth = 10;
        this.queHeight = 200;
    }

    renderQue(){
        push()
        translate(500, 600);
        fill(0);
        rect(0, 0, this.queWidth, this.queHeight);
        pop();
    }

    followMouse(){
        this.queWidth = mouseX;
        this.queHeight = mouseY;
    }
}