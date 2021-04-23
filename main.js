canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;

ArrayImages=["BG_1.jfif" ,"BG_2.jfif" ,"BG_3.jpg" ,"BG_4.jpg"];
random_img= Math.floor(Math.random()*4);

background_image= ArrayImages[random_img];
rover_image="rover.png"

var rover_x=10;
var rover_y=10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadbackground;
    background_imgTag.src= background_image;

   rover_imgTag= new Image();
  rover_imgTag.onload= uploadrover;
   rover_imgTag.src= rover_image;


}

function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){

    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='37'){
        console.log("left");
        left();
       }
       if(keypressed=='38'){
        console.log("up");
        up();
       }
       if(keypressed=='40'){
        console.log("down");
        down();
       }
       if(keypressed=='39'){
        console.log("right");
        right();
       }
    
}

function up(){

    if(rover_y>0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x= " + rover_x + ", y is = " + rover_y);
        uploadbackground();
        uploadrover();

    }

}

function down(){
    if(rover_y<500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x= " + rover_x + ", y is = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x= " + rover_x + ", y is = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x= " + rover_x + ", y is = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

