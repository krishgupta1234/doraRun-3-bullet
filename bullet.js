function spawnbullet(){
bullet=createSprite(doraRun.x+20,doraRun.y+20,10,10)
bullet.addImage(bulletImg)
bullet.velocityX= 10;
bulletGroup.add(bullet)
bullet.scale = 0.3
}