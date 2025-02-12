function setup() {
  createCanvas(1400, 600);
  background(0);
}

const points = {
  x: 0,
  y: 0,
  r: 0,
};

function draw() {
  points.x = floor(random(0, width));
  points.y = floor(random(0, height));
  points.r = floor(random(0, 100));

  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  circle(points.x, points.y, points.r);
}
