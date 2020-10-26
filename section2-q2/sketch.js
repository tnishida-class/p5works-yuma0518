function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  fill(128,128,128)
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(j % 2 >= 0.5 && i % 2 == 0){
   rect(i * 20, j * 20, 20, 20);
 }
   else if(j % 2 == 0 && i % 2 >= 0.5){
   rect(i * 20, j * 20, 20, 20);
                                      }
                              }
                            }
 for(let x = 0; x < 8; x++){
   for(let y = 0; y < 8; y++){
    if(x % 2 == 0 && y % 2 == 1){
      if(y >= 0 && y < 3){
       fill(255, 0, 0);
       ellipse(10 + 20 * x,10+ 20 * y,16);
                         }
       else if(y >= 5 && y < 8){
         fill(0);
       ellipse(10 + 20 * x,10+ 20 * y,16);
                               }
    }

      if(x % 2 == 1 && y % 2 == 0){
        if(y >= 0 && y < 3){
        fill(255, 0, 0);
       ellipse(10 + 20 * x,10+ 20 * y,16);
                           }
        else if(y >= 5 && y < 8){
         fill(0);
       ellipse(10 + 20 * x,10+ 20 * y,16);
                                }
                                  }
                             }
                    }
          }
