const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var playerbase,playerbaseImg;
var compbase,compbaseImg;
var player,playerImg,comp;
var arrow,arrowImg;
var playerArcher,playerArcherImg;
var compArcher,compArcherImg;

function preload()
  {
    playerbaseImg = loadImage('assets/base1.png')
    compbaseImg = loadImage('assets/base2.png')
    playerImg= loadImage('assets/player.png');
    arrowImg =loadImage('assets/arrow.png');
    playerArcherImg = loadImage('assets/playerArcher.png')
    compArcherImg= loadImage("assets/computerArcher.png");
  }

function setup() {
 createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  myEngine = Engine.create();
  myWorld = myEngine.world;
	
   //Create Player Base and Computer Base Object
  playerbase = new Playerbase(300,height/2,180,150);
  compbase = new ComputerBase(width-200,height/2,180,150);

  //player and computer
  player = new Player(300,height/2-130,50,150);
  comp= new Player(width-200,height/2-130,50,150);
  
  arrow = new ComputerArrow(310,height/2-130,50,10)

  playerArcher = new playerBow(300,300,1,1,0.2);
  compArcher = new compBow(600,600,1,1,0.2)
 }

function draw() {

  background(180);

  Engine.update(myEngine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerbase.display();
  compbase.display();

   //display Player and computerplayer
  player.display();
  comp.display();

  arrow.display();
  playerArcher.display();
  compArcher.display();

}
function keyReleased()
{
    if(keyCode === DOWN_ARROW)
    {
        arrow.shoot();
    }
}
