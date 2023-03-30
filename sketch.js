//understanding the position of the mouse on the canvas
//this can allow to further determine where something is on the canvas.
//then determine where a ball is and get it to light up the variouse boxes as it goes through the boxes space

let s01;
let s02;
let s03;
let s04;
let s05;
let s06;
let s07;
let s08;


//ball object
let ball = {
  x: 100,
  y: 80,
  xSpeed: 2,
  ySpeed: -3,
  r: 40,
};
function preload() {
  s01 = loadSound("key01.mp3");
  s02 = loadSound("key02.mp3");
  s03 = loadSound("key03.mp3");
  s04 = loadSound("key04.mp3");
  s05 = loadSound("key05.mp3");
  s06 = loadSound("key06.mp3");
  s07 = loadSound("key07.mp3");
  s08 = loadSound("key08.mp3");
}

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  s01.play();
  s02.play();
  s03.play();
  s04.play();
  s05.play();
  s06.play();
  s07.play();
  s08.play();
}

function draw() {
  // background(120);

  fill(240);
  rect(0, 0, width, 100);
  rect(0, 50, width, 100);
  rect(0, 100, width, 100);
  rect(0, 150, width, 100);
  rect(0, 200, width, 100);
  rect(0, 250, width, 100);
  rect(0, 300, width, 100);
  rect(0, 350, width, 100);

  if (ball.x >= 0 && ball.x <= 400 && ball.y >= 0 && ball.y <= 50) {
    fill(color(200, 60, 60));
    rect(0, 0, width, 50); //this could be a rect class with collision
    s01.play();
    s01.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y >= 50 && ball.y <= 100) {
    fill(color(60, 200, 60));
    rect(0, 50, width, 50);
    s02.play();
    s02.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y >= 100 && ball.y <= 150) {
    fill(color(60, 60, 200));
    rect(0, 100, width, 50);
    s03.play();
    s03.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y > 150 && ball.y < 200) {
    fill(color(120, 200, 200));
    rect(0, 150, width, 50);
    s04.play();
    s04.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y > 200 && ball.y < 250) {
    fill(color(80, 270, 300));
    rect(0, 200, width, 50);
    s05.play();
    s05.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y > 250 && ball.y < 300) {
    fill(color(280, 350, 150));
    rect(0, 250, width, 50);
    s06.play();
    s06.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y > 300 && ball.y < 350) {
    fill(color(280, 220, 170));
    rect(0, 300, width, 50);
    s07.play();
    s07.stop(0.2);
  } else if (ball.x >= 0 && ball.x <= width && ball.y > 350 && ball.y < 400) {
    fill(color(180, 170, 250));
    rect(0, 350, width, 50);
    s08.play();
    s08.stop(0.2);
  }
  ballBounce();
}
// this could be a class
function ballBounce() {
  fill(120);
  circle(ball.x, ball.y, ball.r);

  if (ball.x > width - ball.r / 2 || ball.x < ball.r / 2) {
    ball.xSpeed = ball.xSpeed * -1;
    fill(random(210), 200, random(200));
  }

  if (ball.y > height - ball.r / 2 || ball.y < ball.r / 2) {
    ball.ySpeed = ball.ySpeed * -1;
    fill(210, random(180), random(120));
  }

  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;
}
