
function setup(){
  createCanvas(400, 400);
  background(16, 16, 32);
  ellipse(200, 200, 400);
  network(200, 200, 200);
                }

function draw(){
  noStroke();
    push();
  fill(223, 228, 235);
  ellipse(200, 200, 312);
  strokeWeight(1 / 2);
  stroke(255);
  let lines = [57, 170, 343, 260, 141, 47, 353];
  line(lines[0], lines[3], lines[2], lines[3]);
  line(lines[1], lines[5], lines[1], lines[6]);
  line(lines[0], lines[3], lines[1], lines[6]);
  line(lines[2], lines[3], lines[1], lines[6]);
  line(lines[0], lines[3], lines[0], lines[4]);
  line(lines[2], lines[3], lines[2], lines[4]);
  noStroke();
  fill(196, 132, 132);
  ellipse(200,200,175);
  fill(223, 224, 197)
  beginShape();
  vertex(200, 50);
  bezierVertex(250 ,180, 250, 220, 200, 350);
  for(let i = 0; i < 100; i++){
    const theta = - PI * i / 100 + HALF_PI;
    const x = 200 + 150 * cos(theta);
    const y = 200 + 150 * sin(theta);
    vertex(x, y);
  }
  endShape();
  pop();
}


function network(cx,cy,r){
beginShape();
  for(let i = 0; i <14; i ++){
   for(let j = 0; j < 14; j++){
    const theta = TWO_PI * j * 3 / 14 - HALF_PI - TWO_PI * i / 15;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
  }
}
