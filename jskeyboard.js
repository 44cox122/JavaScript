document.addEventListener("keydown", onkeydown, false);
"use strict";


var changeX = 0;
var changeY = 0;

function onkeydown(key) {
    switch (key.keyCode) {
        case 37:
            alert("Move Left!");
            changeX -= 50;
            break;
            
        case 38:
            alert("Move Up!");
            changeY -= 50;
            break;
            
        case 39:
            alert("Move Right!");
            changeX += 50;
            break;
            
        case 40:
            alert("Move Down!");
            changeY += 50;
            break;
        
        default:
            break;
    }
    
    draw();
}

function draw() {
    var img = new Image();
    img.src = "car.png";
    var canvas = document.getElementById("pictureCanvas");
    var context = canvas.getContext("2d");
    
    if(changeX < 0){
        alert("Not a valid move!");
        changeX = 0;
    }
    else if(changeX > canvas.width) {
        alert("Not a valid move!");
        changeX = canvas.width - 40;
    }
     else if(changeY < 0) {
        alert("Not a valid move!");
        changeY = 0;
    }
     else if(changeY > canvas.height) {
        alert("Not a valid move!");
        changeY = canvas.height - 30;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, changeX, changeY, 40, 30);
    
    context.moveTo(changeX, changeY);
}

