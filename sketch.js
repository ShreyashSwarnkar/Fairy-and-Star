var bgImg;
var star, starBody,starImg;
var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(150,550);
	fairy.addAnimation("fairyflying",fairyImg);
	fairyVoice.play();
	fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  //console.log(star.y);

 if (star.y > 470 && starBody.position.y > 470 ) {
	 Matter.Body.setStatic(starBody,true);
 }


 
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyDown("Space")) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyDown("left_arrow")){
		fairy.x = fairy.x -6;
		}
	if(keyDown("right_arrow")){
		fairy.x = fairy.x +6;
		}
}
