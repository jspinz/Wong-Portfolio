var rectXVel = 10;
var rectYVel = 20;
var circVel = 40;
var circX = 100;
var ballArray = [];
var kick = false;
var snare = false;
var hihat = false;
var crash = false;
var tom = false;
var floorTom = false;
var tom_2 = false;
var ride = false;
var metronome;
var sKick;
var sSnare;
var sHiHat;
var sCrash;
var sTom;
var sFloorTom;
var sTomTwo;
var sRide;

function preload() {
    metronome = loadSound("sounds/metronome.mp3");
    sKick = loadSound("sounds/kick.wav");
    sSnare = loadSound("sounds/snare.wav");
    sHiHat = loadSound("sounds/hihat.wav");
    sCrash = loadSound("sounds/crash.wav");
    sTom = loadSound("sounds/tom.wav");
    sFloorTom = loadSound("sounds/floorTom.wav");
    sTomTwo = loadSound("sounds/tom-2.wav");
    sRide = loadSound("sounds/ride.wav");
}

function setup() {
    createCanvas(1200, 700);



    ballArray[1] = new Ball(width / 4, random(200, height), 10, color(random(0, 255), 0, random(0, 255)));
    ballArray[2] = new Ball(width / 2, random(200, height), 10, color(random(0, 255), 0, random(0, 255)));
    ballArray[3] = new Ball(3 * width / 4, random(200, height), 10, color(random(0, 255), 0, random(0, 255)));
    //    ballArray[4] = new Ball(0, random(200, height), 10, color(random(0, 255), 0, random(0, 255)));
    ballArray[5] = new Ball(width, random(200, height), 10, color(random(0, 255), 0, random(0, 255)));


}

function draw() {

    background(255,110,124);

    textSize(32);
    fill(255);
    text("Press any key in the word 'WERTYUIO' to start", 250, 100);


    noStroke();
    ballArray[1].animateBall();
    ballArray[1].displayBall();
    ballArray[2].animateBall();
    ballArray[2].displayBall();
    ballArray[3].animateBall();
    ballArray[3].displayBall();
    //    ballArray[4].displayBall();
    //    ballArray[4].animateBall();
    ballArray[5].displayBall();
    ballArray[5].animateBall();

    keyIsPressed;
    //o
    if (kick == true) {
        fill(0);
        rect(0, 0, 1200, 700);

    }
    //w
    if (snare == true) {
        stroke(0);
        fill(255);
        ellipse(random(50, 1150), random(50, 700), random(50, 100), random(50, 100));
    }
    //e
    if (hihat == true) {
        stroke(255);
        for (var i = 0; i < 400; i = i + 30) {
            line(width / 3, height / 5 + i, 2 * width / 3, 2 * height / 5 + i);
            println("e");
        }

    }
    //r
    if (crash == true) {
        stroke(255, 125, 0);
        rect(random((width / 3), (2 * width / 3)), random((height / 3), (2 * height / 3)), 100, 100);
    }

    //t
    if (tom == true) {
        noStroke();
        fill(random(0,255),125,125);
        triangle((width / 2) - 50, 400, (width / 2) + 50, 400, width / 2, 700);
        triangle((width / 2) - 50, 400, (width / 2) + 50, 400, width / 2, 100);
        fill(125,random(0,255),125);
        triangle((width / 2) - 250, 300, (width / 2) - 150, 300, width / 2 - 200, 500);
        triangle((width / 2) - 250, 300, (width / 2) - 150, 300, width / 2 - 200, 100);
        fill(125,125,random(0,255));
        triangle((width / 2) + 150, 300, (width / 2) + 250, 300, width / 2 + 200, 400);
        triangle((width / 2) + 150, 300, (width / 2) + 250, 300, width / 2 + 200, 200);

    }

    //u
    if (floorTom == true) {
        translate(width / 2, height / 2);
        fill(random(0, 255));
        noStroke();
        for (var i = 0; i < 10; i++) {

            ellipse(0, 100, 20, 200);
            rotate(PI / 5);
        }
    }

    //y
    if(tom_2==true){
        rect(width/2-50,0,random(30,90),height);
        rect(0,height/2-50,width,random(20,100));
    }
    
    //i
    if(ride==true){
        for (var i = 0; i<width; i=i+30){
            fill(i/2,255-i/4,i/3);
            rect(i,0,15,height);
        }
    }

}

function keyPressed() {
    //o
    if (keyCode == 79) {
        kick = true;
        sKick.play();
    }

    //w
    if (keyCode == 87) {
        fill(255);
        snare = true;
        sSnare.play();
    }

    //e
    if (keyCode == 69) {
        hihat = true;
        sHiHat.play();
    }

    //r
    if (keyCode == 82) {
        crash = true;
        sCrash.play();

    }

    //t
    if (keyCode == 84) {
        tom = true;
        sTom.play();

    }

    //y
    if (keyCode == 89) {
        tom_2 = true;
        sTomTwo.play();



    }

    //u
    if (keyCode == 85) {
        floorTom = true;
        sFloorTom.play();

    }


    //i
    if (keyCode == 73) {
        ride = true;
        sRide.play();

    }
}

function keyReleased() {
    //this is made so that when the key is released, it returns to the background color
    background(255,110,124);

    if (kick == true) {
        kick = false;
    } else if (snare == true) {
        snare = false;
    } else if (hihat == true) {
        hihat = false;
    } else if (crash == true) {
        crash = false;
    } else if (tom == true) {
        tom = false;
    } else if (floorTom == true) {
        floorTom = false;
    } else if (tom_2 ==true){
        tom_2=false;
    } else if (ride == true){
        ride=false;
    }

}

function Ball(_x, _y, _vel, b) {

    this.x = _x;
    this.y = _y;
    this.vel = _vel;

    this.animateBall = function () {
        //animate ball
        this.x += this.vel;
        if (this.x > width || this.x < 0) {
            this.vel = -this.vel;
            metronome.play();
        }
    }

    this.displayBall = function () {
        //draw ball
        fill(b);
        ellipse(this.x, this.y, 30, 30);
    }
};