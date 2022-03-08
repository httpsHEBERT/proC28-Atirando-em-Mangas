
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine, world;

var ambiente, jogar, bateu;
var cenário, solo, grama, árvore, garoto, pedra, lançar;
var manga1, manga2, manga3, manga4, manga5, manga6, manga7,
    manga8, manga9, manga10, manga11, manga12, manga13, manga14;

function preload(){

  cenário = loadImage("Images/cenário.png");
  garoto = loadImage("Images/garoto.png");
  grama = loadImage("Images/solo.png");

  ambiente = loadSound("Sounds/ambiente.mp3");
  jogar = loadSound("Sounds/jogar.mp3");
}

function setup(){

	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	pedra = new Pedra(windowWidth-windowWidth+354, windowHeight-210, 20);
  solo = new Solo(width/2, height-20, width, 40);
  árvore = new Árvore(width-370, height+20);
	manga1 = new Manga(width/2+130, height/2-5, 25);
  manga2 = new Manga(width/2+150, height/2-80, 25);
	manga3 = new Manga(width/2+230, height/2+30, 25);
	manga4 = new Manga(width/2+280, height/2-30, 25);
	manga5 = new Manga(width/2+210, height/2-40, 25);
	manga6 = new Manga(width/2+370, height/2, 25);
	manga7 = new Manga(width/2+315, height/2-100, 25);
	manga8 = new Manga(width/2+300, height/2-175, 25);
	manga9 = new Manga(width/2+400, height/2-60, 25);
	manga10 = new Manga(width/2+480, height/2-5, 25);
	manga11 = new Manga(width/2+460, height/2-80, 25);
	manga12 = new Manga(width/2+235, height/2-130, 25);
  manga13 = new Manga(width/2+380, height/2-140, 25);
  manga14 = new Manga(width/2+360, height/2-210, 25);

  w = windowWidth-windowWidth+354, h = windowHeight-210;
  lançar = new Lançar(pedra.body, {x: w, y: h});

  ambiente.setVolume(0.2);
  jogar.setVolume(0.1);
  ambiente.loop();

	Engine.run(engine);
}

function draw() {

  background(cenário);

  imagem();
  display();
  colisão();
}

function imagem(){

  imageMode(CENTER);
  image(grama, width/2, height-30, width, 100);
  image(garoto, width-width+300, height-140, 270, 300);
}

function display(){
  
  árvore.display();
  pedra.display();
  manga1.display();
  manga2.display();
  manga3.display();
  manga4.display();
  manga5.display();
  manga6.display();
  manga7.display();
  manga8.display();
  manga9.display();
  manga10.display();
  manga11.display();
  manga12.display();
  manga13.display();
  manga14.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pedra.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  lançar.voar();
  jogar.play();
}

function colisão(){

  detectarColisão(pedra, manga1);
  detectarColisão(pedra, manga2);
  detectarColisão(pedra, manga3);
  detectarColisão(pedra, manga4);
  detectarColisão(pedra, manga5);
  detectarColisão(pedra, manga6);
  detectarColisão(pedra, manga7);
  detectarColisão(pedra, manga8);
  detectarColisão(pedra, manga9);
  detectarColisão(pedra, manga10);
  detectarColisão(pedra, manga11);
  detectarColisão(pedra, manga12);
  detectarColisão(pedra, manga13);
  detectarColisão(pedra, manga14);
}

function detectarColisão(lpedra, lmanga){

  mangaBodyPosition = lmanga.body.position;
  pedraBodyPosition=lpedra.body.position;
  
  var distância = dist(pedraBodyPosition.x, pedraBodyPosition.y, mangaBodyPosition.x, mangaBodyPosition.y);
  
  if(distância <= lmanga.r+lpedra.r){
    Matter.Body.setStatic(lmanga.body, false);
  }
}

function keyPressed(){

  if(keyCode === 32){

    Matter.Body.setPosition(pedra.body, {x: windowWidth-windowWidth+354, y: windowHeight-200});
    lançar.voltar(pedra.body);
  }
}