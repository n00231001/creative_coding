let tables =[];

function setup() {
  createCanvas(1000, 700);

  tables.push(new Table({
    // tableWidth: 800,
    // tableHeight: 400, 
    // tableXpos: 500, 
    // tableYpos: 600
}));

    tables.push(new holes({
        // holeXpos: 200,
        // holeYpos: 200
    }));
}


function draw() {
  background(220);
  
  tables[0].renderTable();
  tables[0].renderBalls();
  tables[0].renderHoles();
  tables[0].moveBalls();
  tables[0].renderQue();
 } 
  //tables[0].checkCollisions();

  function keyPressed() {
    if (key === '1'){
        tables[0].que[0].turnRight();
    }
    if (key === '2'){
      tables[0].que[0].turnLeft();
  }
}