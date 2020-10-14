function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220);
  cursor(CROSS);
  rect(10, 10, 50, 50);
  //rect(mouseX, mouseY, 50, 50);
  //rect(10, 10, mouseX, mouseY);
  print(mouseX, mouseY);
}

function mouseMoved(){
  // print(mouseX, mouseY);
}

function mouseClicked(){
  // background(0, 255, 0);
  print("Click");
  // print(mouseX, mouseY);
}

function doubleClicked(){
  // background(0, 0, 255);
  print("double Click");
}

function mousePressed(){
  // background(0, 0, 0);
  print("Press");
  // print(mouseX, mouseY);
  // rect(mouseX, mouseY, 50, 50);
}

function mouseReleased(){
  // background(255, 0, 0);
  print("Release");
  // print(mouseX, mouseY);
}

function mouseDragged(){
print("Drag");
  // rect(mouseX, mouseY, 50, 50);
}

function mouseWheel(){
 print("wheel");
}