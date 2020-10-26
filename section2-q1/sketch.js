function setup() {
  createCanvas(100,100);
  noFill();
  for(let x = 5;x < 55;x = x + 5){
  if(x < 30){
    stroke(0,0,255);
  }
  else{
    stroke(255,0,0);
  }
  ellipse(50,50,x);　
  }
  }
