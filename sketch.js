let j;
function setup() {
  // put setup code here
createCanvas(400,400);
j = 0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(8)
  stroke(0,128,128)
  point(200.100);
  line(0,0,50,100);
  fill(135, 206, 235)
  rect(150,100, 20, 100)

  strokeWeight(0)
  strokeJoin(ROUND)
  fill(255,0,255)
  ellipse(150,100,20,20)

  strokeWeight(3)
  strokeJoin(ROUND)
  fill(128,0,0) 
  triangle(150,100,100,50,100,150)
  arc(70,50, 40, 40, radians(0), radians(180));

  strokeWeight(5)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(400,15)
  vertex(250,150)
  endShape(CLOSE);
  
  for (var i=0; i<=400; i++) {
    x = i
    y = 300 + 20*Math.sin(PI*x/20)
    point(x,y)
  }

  var y= 200 + 20*Math.sin(PI*j/20)
  var r= 50 + 10*Math.sin(PI*j/20)
  j += 1
  fill(240, 192, 25)
  ellipse(300, y , r, r)
}