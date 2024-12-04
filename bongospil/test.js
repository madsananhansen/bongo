let notes = [];
let notesBottom = [];
let song;
let hitZoneX;
let score = 0;
let score2 = 0;
let bongo1;
let bongo2;

const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.random()*10);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  hitZoneX = 100; // The "drum" area where we want to hit notes
  textSize(32);
  
  // Initialize some notes (1 for red drum, 2 for blue drum)
  for (let i = 0; i < 100; i++) {
    let noteType = random() > 0.5 ? 1 : 2; // Randomly choose red or blue notes
    notes.push(new Note(noteType, width + (i+randomNumbers[i]) * 100)); // Space out the notes
    notesBottom.push(new Note(noteType, width + (i+randomNumbers[i]) * 100)); // Space out the notes
  }

  bongo1 = loadSound("/Lyd/bongoL.mp3");
  bongo2 = loadSound("/Lyd/bongoR.mp3");
}

function draw() {
  background(255);
  
  // Draw the hit zone
  fill(200);
  rect(hitZoneX - 50, height * (1/3) - 50, 100, 100);
  rect(hitZoneX - 50, height * (2/3) - 50, 100, 100);
  fill(0);
  textAlign(CENTER);

  // Draw and move notes
  for (let i = notes.length - 1; i >= 0; i--) {
    notes[i].move();
    notes[i].display();
    
    
    
    // Check if notes go out of bounds
    if (notes[i].x < 0) {
      notes.splice(i, 1); // Remove missed note
    }
    
  }

  for (let i = notesBottom.length - 1; i >= 0; i--) {
    notesBottom[i].display();
    notesBottom[i].move();
    if (notesBottom[i].x < 0) {
      notesBottom.splice(i, 1); // Remove missed note
    }
  }

  // Show the score
  fill(0);
  text("Score: " + score, width / 2, 50);
}

// Handle key press for hitting the drum
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    checkHit(1); // Red note
    bongo1.play();
  } else if (keyCode == RIGHT_ARROW) {
    checkHit(2); // Blue note
    bongo2.play();
  }
}

function keyPressed() {
  if (keyCode == TOP_ARROW) {
    checkHitBottom(1); // Red note
    bongo1.play();
  } else if (keyCode == BOTTOM_ARROW) {
    checkHitBottom(2); // Blue note
    bongo2.play();
  }
}

// Check if a hit is within range and correct
function checkHit(noteType) {
  for (let i = notes.length - 1; i >= 0; i--) {
    if (abs(notes[i].x - hitZoneX) < 50 && notes[i].type === noteType) {
      score2 += 100; // Correct hit
      notes.splice(i, 1); // Remove hit note
      break;
    }
  }
}

function checkHitBottom(noteType) {
  for (let i = notesBottom.length - 1; i >= 0; i--) {
    if (abs(notesBottom[i].x - hitZoneX) < 50 && notesBottom[i].type === noteType) {
      score += 100; // Correct hit
      notesBottom.splice(i, 1); // Remove hit note
      break;
    }
  }
}

// Note class
class Note {
  constructor(type, x) {
    this.type = type; // 1 = red, 2 = blue
    this.x = x; // X position of the note
  }

  move() {
    this.x -= 5; // Move the note leftward
  }

  display() {
    if (this.type === 1) {
      fill(255, 0, 0); // Red note
    } else {
      fill(0, 0, 255); // Blue note
    }
    ellipse(this.x, height * (1/3), 50, 50);
    ellipse(this.x, height * (2/3), 50, 50);
  }
}
