const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  // 1
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  // 3
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  // 8. Use a palavra-chave new para criar o objeto tower no arquivo sketch.js

  
  

}

function draw() {
  background(189);
  // 2
  image(backgroundImg, 0, 0, width, height);

   Engine.update(engine);
  
// 9. Use a declaração display para exibir a torre.

  
 
}



