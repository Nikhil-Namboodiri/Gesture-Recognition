noseX = 0;
noseY = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(590, 150);
    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized.');
}
function draw(){
    background('#969A97');
    document.getElementById('square_side').innerHTML = "Width and Height of the square will be " + difference + " px";
    fill("#F90093");
    stroke("#F90093");
    square(noseX, noseY, difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x: " + noseX + "Nose y: " + noseY);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("Left Wrist x = " + leftwristx + "Right Wrist x = " + rightwristx + "Difference = " + difference);
    }
}