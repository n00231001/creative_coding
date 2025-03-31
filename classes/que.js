class Que{
    constructor(obj){
        this.queWidth = obj.queWidth ?? 10;
        this.queHeight = obj.queHeight ?? 200;
        this.queangle = obj.queangle ?? 0;
    }

    render(){
        push()
        translate(500, 600);
        fill(0);
        rect(0, 0, this.queWidth, this.queHeight);
        pop();
    }

    turnRight(){
        this.queangle += 5;
    }
    turnLeft(){
        this.queangle -= 5;
    }
}