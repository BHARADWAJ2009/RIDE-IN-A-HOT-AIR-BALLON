var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var balloonPosition = database.ref("ballooon/height");
balloonPosition.on("value",readPosition,showError);
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;



  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
  if(keyDown(LEFT_ARROW)){
    updatePosition(-10,0)
      balloon.x=balloon.x-10
     
    }
   
    if(keyDown(RIGHT_ARROW)){
      updatePosition(+10,0)
      balloon.x=balloon.x+10
     
    }
   
    if(keyDown(UP_ARROW)){
      updatePosition(0,-10)
      balloon.y=balloon.y-10
      balloon.scale=balloon.scale-0.01
    }
   
    if(keyDown(DOWN_ARROW)){
      updatePosition(0,+10)
      balloon.y=balloon.y+10
      balloon.scale=balloon.scale+0.01
    }  

  drawSprites();
  
}

function updateHeight(x,y){
  database .ref("balloon/Height").set({
    "x":height.x+x,
    "y":height.y+y
  })
  }

  function readHeight(data){
    height = data.val();
    balloon.x = height.x;
    balloon.y = height.y;
  
  }

  function showError(){
    console.log("ERROR IN WRITING TO THE DATABASE");
  }