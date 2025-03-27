class holes {
    constructor(obj) {
        this.holeXpos = obj.holeXpos ?? 200;
        this.holeYpos = obj.holeYpos ?? 200;
    }
    renderHoles() {
        push()
        translate(this.holeXpos, this.holeYpos);
        fill(0);
        ellipse(0, 0, 50, 50);
        pop();
    }
}