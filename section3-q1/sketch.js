// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",0, 0, 0, 0, 0);
}

function balloon(t, a, b, c, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke();
  fill(a, b, c);
  rect(x, y, w + p * 2, h + p * 2);
  beginShape();
   vertex(x + w + p * 2, h / 2 + p + y);
   vertex(x + w + p * 2 + 25, 3 * h / 4 + 3 * p / 2 + y);
   vertex(x + w + p * 2, y + h + p * 2);

  endShape();
  fill(255);
  text(t, x + p, y + h + p);
}
