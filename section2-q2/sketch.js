function setup() {
  createCanvas(300, 300);
  let size = width / 8;
  noStroke();
  fill(128,128,128)
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(j % 2 == 1 && i % 2 == 0){
   rect(i * size, j * size,size,size);
                                  }
   else if(j % 2 == 0 && i % 2 == 1){
   rect(i * size, j * size, size, size);
                                    }
                              }
                            }
  for(let i = 0; i < 8; i++){
   for(let j = 0; j < 8; j++){
    if(i % 2 == 0){
     if(j == 1){
  fill(255,0,0);
  ellipse(size * 1 / 2 + size * i, size * 1 / 2 + size * j, size * 4 / 5);
               }
    else if(j == 5){
      fill(0)
      ellipse(size * 1 / 2 + size * i, size * 1 / 2 + size * j, size * 4 / 5);
                  }
       else if(j == 7){
      fill(0)
      ellipse(size * 1 / 2 + size * i, size * 1 / 2 + size * j, size * 4 / 5);
                      }
                    }
     else{
       if(j == 0){
  fill(255,0,0);
  ellipse(size * 1 / 2 + size * i, size * 1 / 2 + size * j, size * 4 / 5);
                }
    else if(j == 2){
  fill(255,0,0);
  ellipse(size * 1 / 2 + size * i, size * 1 / 2 + size * j, size * 4 / 5);
                  }
    else if(j == 6){
      fill(0)
      ellipse(size * 1 / 2 + size * i, size * 1 / 2 + size * j, size * 4 / 5);
                      }
     }
                             }
}
}
