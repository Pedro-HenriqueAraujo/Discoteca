var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,60,60)  
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("up")){
background(color="blue")  
}
if (keyDown("down")){
  background(color="red")  
  }

  if (keyDown("Left")){
    background(color="yellow")  
    }
    if (keyDown("Right")){
      background(color="green")  
      }
  }





