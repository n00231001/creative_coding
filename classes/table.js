class Table {
    constructor(obj){
        this.tableWidth = obj.tableWidth ?? 800;
        this.tableHeight = obj.tableHeight ?? 400;

        this.tableXpos = obj.tableXpos ?? 100;
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
        fill(173, 130, 61)
        rect(this.tableXpos -30, this.tableYpos -30, this.tableWidth + 60, this.tableHeight + 60);
        fill(10, 56, 10);
        rect(this.tableXpos, this.tableYpos, this.tableWidth, this.tableHeight);
        pop();
    }

    renderBalls(){
        push()
        translate(this.tableXpos,this.tableYpos);

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
        //removes ball if it hits a hole
        this.holes.forEach(hole => {
            let d = dist(ball.ballXpos, ball.ballYpos, hole.x, hole.y); //calculates distance between ball and hole
            if (d < 25) {
                this.balls.splice(this.balls.indexOf(ball), 1);//splice is used to remove the ball from the array, the index of the ball is found using the indexOf method
            }
        });
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
        this.holes.push({ x: this.tableWidth / 2, y: 0});
        // Middle of bottom side
        this.holes.push({ x: this.tableWidth / 2, y: this.tableHeight });
        // bottom of left side
        this.holes.push({ x: 0, y: this.tableHeight});
        //top right side
        this.holes.push({ x: this.tableWidth, y: 0});
        //top left side
        this.holes.push({ x: 0, y: 0});
        //bottom right side
        this.holes.push({ x: this.tableWidth, y: this.tableHeight});
        
    }

    renderQue(){
       push();
         translate(mouseX, mouseY);
            rotate(radians(this.que[0].queangle));
            fill(64, 32, 13);
            rect(0, 0, this.que[0].queWidth, this.que[0].queHeight);
        pop();
    }

    generateQue(){
        this.que.push(new Que({
            queWidth: 10,
            queHeight: 200,
            queangle:0
        }));
    }
    
    queCollision(){
    }

    turnRight(){
        this.que[0].queangle += 5;
    }
    turnLeft(){
        this.que[0].queangle -= 5;
    }
}
