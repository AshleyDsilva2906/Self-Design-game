const Engine = Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies
function preload(){
doorimage=loadImage("image/closed door.png")

}
function setup() {
  createCanvas(800,400);
  door1=new Door(100,100)
  door2=new Door(400,100)
  door3=new Door(700,100)
}

function draw() {
  background("green");  
  door1.display()
  door2.display()
  door3.display()
  drawSprites();
}