function setup() {
  createCanvas(windowWidth,windowHeight);
  background(247,237,226)
  rectMode(CENTER)
  noFill()
  stroke(217,205,191)
  strokeWeight(2)
  for(var j=-1;j<int(height/33.3);j++)
  {
  for(var i=0;i<int(width/33.3);i++)
  {
  ellipse((25+i*50),25+(j*50),50)
  rect(25+(i*50),25+(j*50),50)
  ellipse(50+(i*50),50+(j*50),20)
  }
  }
}

function draw() {
  noFill()
  stroke(132+frameCount/15,165+frameCount/15,157+frameCount/15)  
  strokeWeight(1.5)
  ellipse(mouseX,mouseY,50,(frameCount*20)%50)
  ellipse(mouseX,mouseY,(frameCount*20)%50,50) 
}
