song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
song_status1="";
song_status2="";

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
    
}


function  draw() {
    image(video,0,0,600,500);
song_status1='Song 1 is Playing';
    fill("#FF0000");
    stroke("#FF0000");
if (scoreLeftWrist > 0.5) {
    circle(leftWristX,leftWristY,20);
    song2.stop();
    if (song_status1=song1) {
        song1.play();
        document.getElementById("h3_song").innerHTML = "Song = Playing Jadi";
    }
    song_status2='Song 2 is Playing';
}
if (scoreRightWrist >0.5) {
circle(rightWristX,rightWristY,20);
song1.stop();
if (song_status2=song2) {
    song2.play();
    document.getElementById("h3_song").innerHTML = " Song = Playing Song2";
}
}
    
}

function preload() {
    song1.loop = false;
    song2.loop = false;
    song1=loadSound("Proper Patola Xt aki taki.mp3");
    song2=loadSound("Kosandra.mp3");
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist= "+scoreLeftWrist);
scoreRightWrist=results[0].pose.keypoints[10].score;
console.log("scoreRightWrist= "+scoreRightWrist);

    leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= "+leftWristX+"leftWristY= "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= "+rightWristX+"rightWristY= "+rightWristY);
    }
}