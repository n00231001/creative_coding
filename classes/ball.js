class Ball{
    constructor(obj){
        this.ballXpos = obj.ballXpos ?? 200;
        this.ballYpos = obj.ballYpos ?? 200;

        this.ballVelX = obj.ballVelX ?? 0;
        this.ballVelY = obj.ballVelY ?? 0;

        this.ballColor = obj.ballColor ?? [255,0,0];
    }

    render(){
        push()
        translate(this.ballXpos, this.ballYpos);
        fill(this.ballColor);
        ellipse(0, 0, 20, 20);
        pop();
    }

    move(){
        this.ballXpos = this.ballXpos + this.ballVelX;
        this.ballYpos = this.ballYpos + this.ballVelY;
    }
}
