function preload () {
}

function setup() {
    let can = createCanvas(100,100);
    var style=can.style;
    style = "position: absolute; top: 10px; left: 10px; bottom: 0px; right: 0px; margin:auto;";  
    
    

}

function cdraw() {
    fill(colorname);
    stroke(colorname);
    circle(X, Y, Width)
}

function rdraw() {
    fill(colorname);
    stroke(colorname);
    Reflect(X, Y, Width, Height)
}