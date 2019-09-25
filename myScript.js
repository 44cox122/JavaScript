function draw() {
    var canvas = document.getElementById('pictureCanvas');
    var draw = canvas.getContext('2d');
    var xPos = canvas.width/2;
    var yPos = canvas.width/2;
    
    draw.fillStyle = 'red';
    
    // start drawing main arc
    draw.beginPath();
    draw.arc(75, 75, 50, 0, Math.PI * 2, true);
    draw.closePath();
    draw.fill();
    
    // move then draw mouth  
    draw.moveTo(110, 75);
    draw.beginPath();
    draw.arc(75, 75, 35, 0, Math.PI, false); 
    draw.stroke();
    
    //eyes
    draw.moveTo(65, 65);
    draw.beginPath();
    draw.arc(61, 65, 4, 0, Math.PI * 2, true);
    draw.fillStyle = "black";
    draw.fill();
    
    draw.moveTo(120, 65);
    draw.beginPath();
    draw.arc(96, 65, 4, 0, Math.PI * 2, true);
    draw.fillStyle = "black";
    draw.fill();
}

function onClick() {
    document.getElementById('change-js').innerHTML="now I am sad";
    document.getElementById('pictureCanvas');
    var canvas = document.getElementById('pictureCanvas');
    var draw = canvas.getContext('2d');
    var xPos = canvas.width/2;
    var yPos = canvas.width/2;
    
    draw.fillStyle = 'yellow';
    
    // start drawing main arc
    draw.beginPath();
    draw.arc(75, 75, 50, 0, Math.PI * 2, true);
    draw.closePath();
    draw.fill();
    
    // move then draw mouth  
    draw.moveTo(110, 75);
    draw.beginPath();
    draw.arc(75, 115, 35, 1.2 * Math.PI, 1.8 * Math.PI);
    draw.stroke();
    
    //eyes
    draw.moveTo(65, 65);
    draw.beginPath();
    draw.arc(61, 65, 4, 0, Math.PI * 2, true);
    draw.fillStyle = "black";
    draw.fill();
    
    draw.moveTo(120, 65);
    draw.beginPath();
    draw.arc(96, 65, 4, 0, Math.PI * 2, true);
    draw.fillStyle = "black";
    draw.fill();
   
}
