let bongo1;
let bongo2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bongo1 = loadSound("/Lyd/bongoL.mp3");
  bongo2 = loadSound("/Lyd/bongoR.mp3");
  hihat = loadSound("/Lyd/hihat.mp3");
  kick = loadSound("/Lyd/kick.mp3");
  snare = loadSound("/Lyd/snare.mp3");
}

const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.random());
}




function draw() {
  background(256);

  fill(255)
  color(0)
  circle(windowWidth/5,windowHeight/2,60)

  let v = -0.2

    for (let i=0; i<300; i++){
      if (randomNumbers[i]<0.5) {
        fill(255,0,0)
        push()
        fill(255)
        color(0)
        //rect(windowWidth+(v)*millis()+100*(i+randomNumbers[i])+25,(windowHeight/2)-25,-50,25);
        pop()
      }
      else {
        fill(0,0,255)
        push()
        fill(255)
        color(0)
        //rect(windowWidth+(v)*millis()+100*(i+randomNumbers[i])+25,(windowHeight/2),-50,25);
        pop()
      }

      circle(windowWidth+(v)*millis()+100*(i+randomNumbers[i]),windowHeight/2,50);
    } 

    //hitRed = collidePointrECT(mouseX, mouseY, 200, 200, 50, 150);

  
  
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    hihat.play()
  }

  if(keyCode == RIGHT_ARROW){
    snare.play() 
  }

  if(keyCode == 74){
    
  }

  if(keyCode == 70){
    
  }

  if(keyCode == 32){
    kick.play()
  }


}