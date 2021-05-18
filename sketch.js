
var bg 
var cat
var mouse

function preload() {
    //load the images here
   bg = loadImage("images/garden.png")
   catimg1 = loadAnimation("images/cat1.png")
   catimg2 = loadAnimation("images/cat2.png")
   catimg3 = loadAnimation("images/cat3.png")
   catimg4 = loadAnimation("images/cat4.png")
   mouseimg1 = loadAnimation("images/mouse1.png")
   mouseimg2 = loadAnimation("images/mouse2.png")
   mouseimg3 = loadAnimation("images/mouse3.png")
   mouseimg4 = loadAnimation("images/mouse4.png")
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(420,600,100,40)
    cat.addAnimation("catResting",catimg2)
    cat.addAnimation("catResting",catimg1)
    cat.scale=0.2
    
    mouse=createSprite(180,600,100,40)
    mouse.addAnimation("mouseRunning",mouseimg1)
    mouse.scale=0.3
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width/2)){
cat.addAnimation("catHappy",catimg4)
cat.changeAnimation("catHappy")

mouse.addAnimation("mouseHappy",mouseimg4)
mouse.changeAnimation("mouseHappy")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2)
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay = 25;
}

if(keyDown === LEFT_ARROW){
cat.addAnimation("catRunning",catimg3)
cat.changeAnimation("catRunning")
cat.frameDelay=25;
cat.velcoityX=cat.velcoityX-20
}

}
