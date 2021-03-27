var Mouse, MouseNormal, MouseWalk, MouseEnd;
var Cat, CatNormal, CatWalk, CatEnd;
var Trees;
function preload() {
    MouseNormal = loadImage("mouse1.png");
    MouseWalk = loadAnimation("mouse2.png", "mouse3.png");
    MouseEnd = loadImage("mouse4.png");

    CatNormal = loadImage("cat1.png");
    CatWalk = loadAnimation("cat2.png", "cat3.png");
    CatEnd = loadImage("cat4.png");

    Trees = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    Mouse = createSprite(250, 100, 200, 100);
    Mouse.addImage("Normal", MouseNormal);
    Mouse.addAnimation("Walk", MouseWalk);
    Mouse.addImage("End", MouseEnd);

    Cat = createSprite(250, 700, 100, 200);
    Cat.addImage("Normal", CatNormal);
    Cat.addAnimation("Walk", CatWalk);
    Cat.addImage("End", CatEnd); 
}

function draw() {
    background(Trees);
    
    drawSprites();
}


function keyPressed(){
    if(keyCode == LEFT_ARROW){
        Mouse.changeAnimation("Walk", MouseWalk);
        Cat.changeAnimation("Walk", CatWalk);
    }
}
