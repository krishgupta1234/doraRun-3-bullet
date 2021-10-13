function spawnCakes(){
    if(frameCount % 240 === 0){
        cakes = createSprite(1400,random(100,300),10,10);
        cakes.addImage(cakesImg)
    cakes.velocityX = -5;
     cakes.scale = 0.1
     cakes.lifetime = 400;
          cakeGroup.add(cakes)
        }
}