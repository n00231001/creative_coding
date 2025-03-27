class Table {
    constructor(obj){
        this.tableWidth = obj.tableWidth ?? 800;
        this.tableHeight = obj.tableHeight ?? 800;

        this.tableXpos = obj.tableXpos ?? 200;
        this.tableYpos = obj.tableYpos ?? 200;

        this.balls = [];
        this.numBalls = obj.numBalls ?? 5;
        this.generateBalls();

        this.holes = [];
        this.numHoles = obj.numHoles ?? 6;  
        this.generateHoles();

        this.que = [];
        this.generateQue();
    }

    renderTable(){
        push()
        translate(this.tableXballXpos,this.tableYpos);
        fill(255);
        rect(0, 0, this.tableWidth, this.tableHeight);
        pop();
    }

    renderBalls(){
        push()
        translate(this.tableXballXpos,this.tableYpos);

        this.balls.forEach((ball)=>{
            ball.render();
        });
        pop();
    }

    generateBalls(){
        for(let i = 0; i < this.numBalls; i++){
            this.balls.push(new Ball({
                ballXpos: random(0, this.tableWidth),
                ballYpos: random(0, this.tableHeight),
                ballVelX: random(-5,5),
                ballVelY: random(-5,5),
                ballColor: [random(0,255),random(0,255),random(0,255)]
            }));
        }
    }

    moveBalls(){
        this.balls.forEach((ball) => {
            ball.move();
            this.checkPos(ball);
          });
    }

    checkPos(ball) {    
    

        // if plane goes off right edge
        if (ball.ballXpos > this.tableWidth) {
          ball.ballVelX = -ball.ballVelX;
          ball.ballVelY = -ball.ballVelY;
        }
        // if plane goes off left edge
        else if (ball.ballXpos < 0) {
            ball.ballVelX = -ball.ballVelX;
            ball.ballVelY = -ball.ballVelY;
        }
    
        //if plane goes off bottom edge
        if (ball.ballYpos > this.tableHeight) {
            ball.ballVelX = -ball.ballVelX;
            ball.ballVelY = -ball.ballVelY;
    
          // if plane goes off top
        } else if (ball.ballYpos < 0) {
            ball.ballVelX = -ball.ballVelX;
            ball.ballVelY = -ball.ballVelY;
        }
        
    }

    
    renderHoles() {
        push();
        translate(this.tableXpos, this.tableYpos);
        fill(0);
        this.holes.forEach(hole => {
            ellipse(hole.x, hole.y, 50, 50);
        });
        pop();
    }

    generateHoles(){
        // Middle of top side
        this.holes.push({ x: this.tableWidth / 2, y: 0 });
        // Middle of right side
        this.holes.push({ x: this.tableWidth, y: this.tableHeight / 2 });
        // Middle of bottom side
        this.holes.push({ x: this.tableWidth / 2, y: this.tableHeight });
        // Middle of left side
        this.holes.push({ x: 0, y: this.tableHeight / 2 });
        
        // Optional: Keep the corner holes too (total 6 holes)
        if (this.numHoles === 6) {
            this.holes.push({ x: 0, y: 0 }); // Top-left corner
            this.holes.push({ x: this.tableWidth, y: this.tableHeight }); // Bottom-right corner
        }
    }

    
}
