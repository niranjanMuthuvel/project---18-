var path,pathImg
var boy,boyImg
var rboundary,lboundary,edges

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,600);
  //moving path
  path= createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale=1.2
  //boy running
  boy = createSprite(190,550,20,40)
  boy.addAnimation("running",boyImg)
  boy.scale = 0.05
  //create rboundary
rboundary = createSprite(390,0,10,1200)

  //create lboundary
  lboundary = createSprite(0,0,10,1200)
}

function draw() {
  background(0);
    path.velocityY = 4
    
    //move the boy with mouseX
    boy.x= World.mouseX
    //create edges
edges = createEdgeSprites()
boy.collide(edges[3])
boy.collide(rboundary)
boy.collide(lboundary)

if(path.y > 600){
  path.y = height/2
}

  drawSprites();

}
