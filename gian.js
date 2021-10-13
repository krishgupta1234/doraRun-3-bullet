function monster(){
    if(frameCount % 360 === 0){
        gian = createSprite(1200,450,10,10)
         var rand = Math.round(random(1,6))
         gian.addImage(gianImg)
         gian.velocityX = -(6+score/50);
         gian.scale=0.8;
          gianGroup.add(gian)
          gian.lifetime = 400;
        }
  
  }