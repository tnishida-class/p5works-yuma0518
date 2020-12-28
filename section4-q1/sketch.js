// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size= 50;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if(count <= 50){
    size = size + 1
  }
  else{
    size = size - 1
  }


  ellipse(width / 2, height / 2, size);
}
