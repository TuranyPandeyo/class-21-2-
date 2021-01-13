var MinecraftSteve, MinecraftZombie, MinecraftHusk;

function setup() {
  createCanvas(1200,800);

  MinecraftSteve = createSprite(904,94,30,80);
  MinecraftSteve.shapeColor = "blue";

  MinecraftZombie = createSprite(94,94,30,80);
  MinecraftZombie.shapeColor = "green";

  MinecraftSteve.velocityX = -5;
  
}

function draw() {
  background(0,0,0);  

  if(isTouching(MinecraftSteve,MinecraftZombie)){

    MinecraftSteve.shapeColor = "green";
    MinecraftSteve.velocityX = 1;
    MinecraftSteve.velocityX = 0;

    fill ("red");
    text ("Now the steve is zombie :( he will infect others",200,200);

  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




