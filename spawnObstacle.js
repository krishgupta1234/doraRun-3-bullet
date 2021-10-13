function spawnobstacles(){
    if(frameCount % 240 === 0){
    obstacle = createSprite(1200,470,30,60)
      obstacle.velocityX = -(6+score/50)
     var rand = Math.round(random(1,6))
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.3;
      obstacle.lifetime = 400;
      obstacleGroup.add(obstacle)
obstacle.debug = true
obstacle.setCollider("rectangle",0,0,150,250)
    }
  }
