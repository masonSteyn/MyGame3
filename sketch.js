pcInAir = "false"
a = 0
function preload() {
  bg = loadImage("sprite_0.png")
  groundIMG = loadImage("ground0.png")
  standingNinja = loadAnimation("standing0.png", "standing1.png")
  runningNinja = loadAnimation("running0.png", "running1.png", "running2.png")
  jumpingNinja = loadAnimation("jump0.png", "jump1.png")
}

function setup() {
  
  createCanvas(500, 500,windowWidth/2,windowHeight/2)

  platformGroup = new Group()

  //playing char
  pc = createSprite(400, height - 120)
  pc.addAnimation("standing", standingNinja)
  pc.addAnimation("running", runningNinja)
  pc.addAnimation("jumping", jumpingNinja)
  pc.changeAnimation("standing")
  pc.scale = 0.7


  //ground & platforms
  ground = createSprite(width / 2, height - 31, width * 15, 20)
  ground.visible = false
  createPlatforms()



}

function draw() {
  
  //bg
  background("white")

  console.log(pc.velocityY)
  camera.position.x = pc.position.x;
  
  createImages()
  

  //draw sprites
  drawSprites()
  pc.changeAnimation("standing")

  //pc controls
  if (keyDown(RIGHT_ARROW)) {
    pc.x += 20
    tempX = pc.x
    pc.changeAnimation("running")

  }
  if (keyDown(LEFT_ARROW)) {

    if (tempX === pc.x)
      pc.x += -4

  }

  if (keyDown("space")) {
    if (pc.collide(ground) || pc.collide(platformGroup))
      pc.velocityY = -20
    pcInAir = "true"


  }
  //else(pcInAir === "true")
    pc.velocityY += 1
  

  //gravity
  //pc.velocityY += 1


  //platform & ground collision
 if(pc.isTouching(ground)||pc.collide(ground)) {
  pc.velocityY = 0
  pc.position.y = height - 80
  pcInAir = "false"
 }
 if (pcInAir === "true"){
  pc.changeAnimation("jumping")
 }
  for (var i = 0; i < platformGroup.length; i++)
    collideWithPlatforms(pc, platformGroup[i])
 

}

function createPlatforms() {

  var platform1 = createSprite(400, height - 100, 100, 20)
  platformGroup.add(platform1)


  var platform2 = createSprite(800, height - 80, 100, 20)
  platformGroup.add(platform2)


  var platform3 = createSprite(1200, height - 200, 100, 20)
  platformGroup.add(platform3)

}


function collideWithPlatforms(collider, collided) {
  if (collider.isTouching(collided)) {
    collider.collide(collided)
  }

}

function createImages() {
 /* for (var i = 0; i < 20; i++) {
    image(bg, 0, 0, width, height)
    a += 500
  }*/
  image(bg,0,0,width,height)
  image(bg,500,0,width,height)
  image(bg,1000,0,width,height)
  image(bg,1500,0,width,height)
  image(bg,2000,0,width,height)
  image(bg,2500,0,width,height)
  image(bg,3000,0,width,height)
  image(bg,3500,0,width,height)
  image(bg,4000,0,width,height)
  image(bg,4500,0,width,height)


  image(groundIMG,0, height - 35, 435,32)
  image(groundIMG,435, height - 35, 435,32)
  image(groundIMG,435*2, height - 35, 435,32)
  image(groundIMG,435*3, height - 35, 435,32 )
  image(groundIMG,435*4, height - 35, 435,32)
  image(groundIMG,435*5, height - 35, 435,32)
  image(groundIMG,435*6, height - 35, 435,32)
  image(groundIMG,435*7, height - 35, 435,32)
  image(groundIMG,435*8, height - 35, 435,32)
  image(groundIMG,435*9, height - 35, 435,32)
  image(groundIMG,435*10, height - 35, 435,32)
  image(groundIMG,435*11, height - 35, 435,32)
}