var bg;
var player;
var player_sadimg;
var player_happyimg
var c02 = [];
var score = 0;
var life = 10;
var life_level = 10;
var level_status = false;
var o2 = []
var so2 = [];
//var gases = [];
var s2;
var s3;
var mode;
var heart;
var heart_img;
var h1;
var h2;
var h3;
var h4;
var h5;
var bg2

var uv_img;
var uv;



function preload() {
   bg = loadImage("images/bg1.png");
   bg3 = loadImage("images/bg2.png");
   bg1 = loadImage("images/earth.jpg");
   bg2 = loadImage("images/bgm.jpg");
   player_sadimg = loadAnimation("images/e0.png", "images/e1.png", "images/e2.png", "images/e3.png", "images/e4.png");
   player_happyimg = loadAnimation("images/he0.png", "images/he1.png", "images/he2.png");
   s2 = loadSound("images/f4.mp3");
   s3 = loadSound("images/f1.mp3");
   heart_img = loadImage("images/h1.png");


   uv_img = loadImage("images/uv.png");

}


function setup() {
   mode = 0
   canvas = createCanvas(displayWidth - 20, displayHeight - 30);
   player = createSprite(500, 500, 150, 160);
   player.scale = 2
   player.addAnimation("sadimg", player_sadimg);
   player.addAnimation("happyimg", player_happyimg);

   h1 = createSprite(865, 50, 50, 50);
   h1.scale = 0.2
   h1.addImage("he", heart_img);

   h2 = createSprite(950, 50, 50, 50);
   h2.scale = 0.2
   h2.addImage("hea", heart_img);

   h3 = createSprite(1050, 50, 50, 50);
   h3.scale = 0.2
   h3.addImage("h", heart_img);

   h4 = createSprite(1150, 50, 50, 50);
   h4.scale = 0.2
   h4.addImage("he", heart_img);

   uv = createSprite(100,200,50,30);
   uv.scale = 0.3
   uv.addImage("u",uv_img);


   button = createButton('Play');

}

function draw() {
   clear()
   if (mode === 0) {
      uv.visible = true

      background(bg1);
      textSize(40);
      fill("yellow");
      textStyle(BOLDITALIC)
      text("THE SHIELD", 560, 100);

      fill(rgb(41, 241, 195));
      textSize(23);
      text("The SHIELD is a game where you have to protect the ozone",345,200);
      fill("yellow");
      text("layer.As it is the only layer which protects us from the UV",345,220);
      fill(rgb(20,222,33));
      text("rays.The current scenario is that the ozone layer has depleted",345,240);
       fill(rgb(41, 241, 195))
      text("from some parts of the world.There are holes formed there.So in",345,260);
      fill("yellow");
      text("order to overcome these holes there should be more O2 in the ",345,280);
      fill(rgb(20,222,33));
      text("environment and the use of some bad gases like CO2 & SO2 ",345,300);
      fill(rgb(41, 241, 195));
      text("should be reduced by us...",345,320);      
      fill("yellow");
      text("In this game you have to collect good gases like O2,but it is not",345,340);
      fill(rgb(20,222,33));
      text("a piece of cake.There will be some bad gases like CO2 & SO2 which",345,360);
      fill(rgb(41, 241, 195));
      text("will distract you.You have to collect maximun O2 gases.",345,380);
      fill("yellow");
      text("If you touch CO2 or SO2 then ",345,400);


















      textSize(25);
      fill(255);
      text("# Ozone Layer Is Depleting !", 1000, 100)
      text("#Press Enter To Start", 100, 40);

      fill(rgb(250, 0, 0));
      text("# Increase In CO2,SO2 Is The", 1000, 180);

      fill(rgb(250, 0, 0));
      text("major Cause For The Holes ", 1010, 210);

      fill(rgb(250, 0, 0));
      text("in Ozone ..", 1020, 240);

      fill(rgb(250, 0, 0));
      text("#Ozone Layer Is an Umbrella Of", 10, 90);

      fill(rgb(250, 0, 0));
      text("earth,Protecting It From The", 10, 120);

      fill(rgb(250, 0, 0));
      text("Harmfull UV Rays..", 10, 150);

      fill("yellow");
      text("#So Come On Lets Save", 1057, 550);

      fill("yellow");
      text("Our Earth & protect The", 1060, 580);

      fill("yellow");
      text("Ozone Layer ..", 1060, 610);

    
      button.position(displayWidth/2-100,displayHeight/2+250);

   }
   if (mode === 1) {
      uv.visible = false;
      background(bg);
      //player.x =mouseX;
      //player.y = mouseY;

      if (keyWentDown(RIGHT_ARROW)) {
         player.velocityX = 8
      }
      if (keyWentUp(RIGHT_ARROW)) {
         player.velocityX = 0
      }

      if (keyWentDown(LEFT_ARROW)) {
         player.velocityX = -9
      }

      if (keyWentUp(LEFT_ARROW)) {
         player.velocityX = 0
      }

      //so2 is starting ;;
      if (frameCount % 75 === 0) {
         gas = new Gas3(random(width), -10, 90, 100);
         //gases.push(gas)
         so2.push(gas)
      }


      for (var i = 0; i < so2.length; i++) {
         so2[i].display();
         so2[i].moveGas3(0, 10);

         if (so2[i].hit3(player)) {
            // console.log("player")
            so2.splice(i, 1)
            life = life - 1
            s3.play();
         }
      }
      //co2 is starting;;;
      if (frameCount % 85 === 0) {
         gas2 = new Gas2(random(width), -10, 90, 100);
         c02.push(gas2)
      }


      for (var j = 0; j < c02.length; j++) {
         c02[j].display();
         c02[j].moveGas2(0, 10)

         if (c02[j].hit2(player)) {
            // console.log("player")
            c02.splice(j, 1);
            life = life - 1
            s3.play();
         }
      }
      //o2 is starting;;;;
      if (frameCount % 20 === 0) {
         gas3 = new Gas(random(width), -10, 90, 100);
         o2.push(gas3)
      }


      for (var k = 0; k < o2.length; k++) {
         o2[k].display();
         o2[k].moveGas(0, 10)

         if (o2[k].hit(player)) {
            // console.log("player")
            o2.splice(k, 1);
            score = score + 1
            s2.play();
         }
      }
      if (score === 10) {
         player.changeAnimation("happyimg", player_happyimg);
         player.scale = 2
      }

      if (score === 5 || score === 10 || score === 15 || score === 20) {
         player.changeAnimation("playerhappy", player_happyimg)
      }

      if (life === 10 || life === 5) {
         player.changeAnimation("playersad", player_sadimg)
      }


      fill(255);
      textSize(50)
      text("Score : " + score, displayWidth / 2 - 625, displayHeight / 2 - 325);

      fill("yellow");
      textSize(50)
      text("Life : ", displayWidth / 2 + 25, displayHeight / 2 - 325);

      if (life === 8) {
         h1.visible = false
      }

      if (life === 6) {
         h2.visible = false
      }
      if (life === 4) {
         h3.visible = false
      }

      if (life === 2) {
         h4.visible = false
      }

      /*if (life === 0 || mode === 2) {
         level2();
         background(bg3)
      }*/
      /*if (life == 0 || mode == 2) {
         mode = 2;
         level2();
         background(bg3)

      }*/
      drawSprites();
   }
   if (score == 3 || mode == 2) {
      mode = 2;
      life = 10
      level2();
   }

   function level2() {
      background(bg2)
      if (level_status == false) {
         h1.visible = true;
         h2.visible = true;
         h3.visible = true;
         h4.visible = true;
         level_status = true
      }
     

      //  player.addAnimation("sadimg",player_sadimg);
      //player.addAnimation("happyimg",player_happyimg);


      if (keyWentDown(RIGHT_ARROW)) {
         player.velocityX = 5
      }
      if (keyWentUp(RIGHT_ARROW)) {
         player.velocityX = 0
      }

      if (keyWentDown(LEFT_ARROW)) {
         player.velocityX = -6
      }

      if (keyWentUp(LEFT_ARROW)) {
         player.velocityX = 0
      }

      //so2 is starting ;;
      if (frameCount % 50 === 0) {
         gas = new Gas3(random(width), -10, 110, 120);
         //gases.push(gas)
         so2.push(gas)
      }


      for (var i = 0; i < so2.length; i++) {
         so2[i].display();
         so2[i].moveGas3(0, 26);

         if (so2[i].hit3(player)) {
            // console.log("player")
            so2.splice(i, 1)
            life_level = life_level - 1
            s3.play();
         }
      }
      //co2 is starting;;;
      if (frameCount % 40 === 0) {
         gas2 = new Gas2(random(width), -10, 110, 120);
         c02.push(gas2)
      }


      for (var j = 0; j < c02.length; j++) {
         c02[j].display();
         c02[j].moveGas2(0, 25)

         if (c02[j].hit2(player)) {
            // console.log("player")
            c02.splice(j, 1);
            life_level = life_level - 2
            s3.play();
         }
      }
      //o2 is starting;;;;
      if (frameCount % 30 === 0) {
         gas3 = new Gas(random(width), -10, 110, 120);
         o2.push(gas3)
      }


      for (var k = 0; k < o2.length; k++) {
         o2[k].display();
         o2[k].moveGas(0, 27)

         if (o2[k].hit(player)) {
            // console.log("player")
            o2.splice(k, 1);
            score = score + 1
            s2.play();
         }
      }
      if (score === 2) {
         player.changeAnimation("happyimg", player_happyimg);
         player.scale = 2
      }

      fill(0);
      textSize(50)
      text("Score : " + score, displayWidth / 2 - 625, displayHeight / 2 - 325);

      fill(0);
      textSize(50)
      text("Life :", displayWidth / 2 + 25, displayHeight / 2 - 325);

      if (life_level === 8) {
         h4.visible = false
      }

      if (life_level === 6) {
         h3.visible = false
         
      }
      if (life_level === 4) {
         h2.visible = false
         
      }

      if (life_level === 2) {
         h1.visible = false
         
      }
      if (life_level <= 0) {
         mode = 1
         h1.visible = true;
         h2.visible = true;
         h3.visible = true;
         h4.visible = true;
         level_status = false;
         life_level = 10;

      }
      drawSprites()

   }


}
function keyPressed() {
   if (keyCode === ENTER) {
      mode = 1
   }

}

