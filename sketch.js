function setup() {
  createCanvas(800,600);
  background(255,228,196);
}

function draw() {
//antenna
stroke(79,79,79);
strokeWeight(4);
line(500,16,500,100)
//pallina
fill(178,178,178);
noStroke();
ellipse(500,16,15,15)

//collo
fill(128,128,128);
noStroke();
rect(485,150,30,25,5);
rect(485,178,30,10,5);
rect(485,191,30,10,5);
rect(490,204,30,10,5);
rect(490,217,30,10,5);
rect(490,230,30,10,5);
rect(485,243,30,10,5);
rect(480,256,30,10,5);
rect(480,269,30,10,5);
rect(480,282,30,10,5);

//testa
fill(79,79,79);
noStroke();
ellipse(500,105,130,130);

//occhiSOTTO
fill(178,178,178);
noStroke();
ellipse(485,90,40,40);
//occhiSOTTO
fill(178,178,178);
noStroke();
ellipse(515,90,50,50);
//occhioBIANCO
fill(247,247,247);
noStroke();
ellipse(485,90,30,30);
//pupilla1
fill(79,79,79);
noStroke();
ellipse(485,90,10,10);
//occhioBIANCO
fill(247,247,247);
noStroke();
ellipse(515,90,40,40);
//pupilla2
fill(79,79,79);
noStroke();
ellipse(515,90,10,10);

//ruote
fill(128,128,128);
noStroke();
rect(450,460,50,90,5);
rect(504,460,50,90,5);

//segniruotaSX
stroke(178,178,178);
strokeWeight(2)
line(460,470,470,480);
line(460,490,470,500);
line(460,510,470,520);
line(460,530,470,540);

line(490,470,480,480);
line(490,490,480,500);
line(490,510,480,520);
line(490,530,480,540);

//segniruotaDX
stroke(178,178,178);
strokeWeight(2)
line(515,470,525,480);
line(515,490,525,500);
line(515,510,525,520);
line(515,530,525,540);

line(545,470,535,480);
line(545,490,535,500);
line(545,510,535,520);
line(545,530,535,540);

//corpo
fill(79,79,79);
noStroke();
rect(400,285,200,180,10);

fill(178,178,178);
noStroke();
rect(430,310,140,120,10);

fill(247,247,247);
noStroke();
rect(440,320,120,30,10);

fill(79,79,79);
noStroke();
ellipse(470,370,15,15);
ellipse(500,370,15,15);
ellipse(530,370,15,15);

//braccioDX
fill(128,128,128);
noStroke();
rect(600,315,10,45,5);
rect(613,315,10,45,5);
rect(626,310,10,45,5);
rect(639,308,10,45,5);

fill(178,178,178);
noStroke();
rect(652,314,20,30,5);
arc(690, 314, 50, 50, 0, PI+HALF_PI, PIE);

//braccioSX
fill(128,128,128);
noStroke();
rect(390,315,10,45,5);
rect(377,315,10,45,5);
rect(364,310,10,45,5);
rect(351,308,10,45,5);

fill(178,178,178);
noStroke();
rect(318,314,30,30,5);

stroke(178,178,178);
strokeWeight(9)
line(312,295,322,315);
line(296,328,320,328);
line(312,363,322,343);


//antenneR1
stroke(128,128,128);
strokeWeight(2);
line(120,190.5,155,246.5);
line(164,246.5,198,121.5);
line(162,241.5,245,256.5)
//colloR1
stroke(128,128,128);
line(150,241.5,150,364.5);
line(161,241.5,161,364.5);
line(173,241.5,173,364.5);
//testaR1
fill(79,79,79);
noStroke();
ellipse(162,241.5,108,108);
//corpoR1
fill(178,178,178);
noStroke();
ellipse(150,506.5,83,83);
fill(79,79,79);
noStroke();
rect(96,364.5,108,145);
fill(178,178,178);
rect(96,386.5,108,8);
//occhiR1
fill(247,247,247);
ellipse(173,234.5,35,35);
fill(79,79,79);
ellipse(173,234.5,7,7);
fill(178,178,178);
ellipse(184,210.5,9,9);
ellipse(143,231.5,12,12);
ellipse(197,248.5,7,7);
}