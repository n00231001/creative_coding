class holes {
    constructor(obj) {
        this.holeXpos = obj.holeXpos;
        this.holeYpos = obj.holeYpos;
    }
    render() {
        push()
        translate(this.holeXpos, this.holeYpos);
        fill(0);
        ellipse(0, 0, 50, 50);
        pop();
    }
}