function load_images(){
    //images for player,virus,gem..
    enemy_image = new Image;
    enemy_image.src = "/v1.png";
    
    //player Image
    player_img = new Image;
    player_img.src = "/superhero.png";
    
    //gem image
    gem_image = new Image;
    gem_image.src = "/gemm.png";
}

function init(){
    //defines the object that we will have in the game
    canvas = document.getElementById("mycanvas");
    console.log(canvas);
    W = canvas.width = 700;
    H= canvas.height = 400;
    
    // to draw on canvas
    pen = canvas.getContext("2d");
    console.log(pen);
    game_over = false;
    
    e1 = {
        x : 150,
        y : 50,
        w : 60,
        h : 60,
        speed:20,
        
    };
    e2 = {
        x : 300,
        y : 150,
        w : 60,
        h : 60,
        speed:30,
        
    };
    e3 = {
        x : 450,
        y : 20,
        w : 60,
        h : 60,
        speed:40,
        
    };
    enemy = [e1,e2,e3];
    
    player = {
        x : 20,
        y : H/2,
        w : 50,
        h : 50,
        speed : 20,
        moving : false,
        health : 100,
    };
    
    gem = {
        x : W-70,
        y : H/2,
        w : 60,
        h : 60,
    };

    //When we click the mouse (listen to events on the canvas)
    
     canvas.addEventListener('mousedown',function(){
        console.log("Mouse pressed");
        player.moving = true;
    });

    //when we release our click from the mouse (listen to events on the canvas)

    canvas.addEventListener('mouseup',function(){
        console.log("Mouse released");
        player.moving = false;
    });
}

function isOverlap(rect1,rect2){
    if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // Collision detected!
    return true
  }
    return false;
}


function draw(){
    
    //to erase the previous frame (clear the canvas area for the old frame)
    pen.clearRect(0,0,W,H);

          
    // to display all enemies
    for(var i=0;i<enemy.length;i++){
        pen.drawImage(enemy_image,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);
    }


    //draw the player
    pen.drawImage(player_img,player.x,player.y,player.w,player.h);


    //draw the gem
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h); 


    pen.fillStyle = "white";
    pen.font = "30px sans-serif";
    pen.fillText("Score "+player.health,20,20);
    
}

function update(){
    
    //if the player is moving
    if(player.moving == true){
        player.x +=player.speed;
        player.health += 20;
    }
    
    //check if player collides with enemy
    for(let i = 0;i<enemy.length;i++){
        if(isOverlap(enemy[i],player)){
        player.health -= 50;
            if(player.health < 0){
             console.log(player.health);
                game_over = true;
                alert("Game over!!!" + player.health);
            }
        }
    }
    
    //overlap
    if(isOverlap(player,gem)){
        console.log("You won");
         alert("You won!!"+player.health);
        game_over = true;
        return;
    }
    
    //move the box downward
    //update each enemy by same logic

    for(var i=0;i<enemy.length;i++){
        enemy[i].y += enemy[i].speed;
        if((enemy[i].y>=(H-enemy[i].h)) || (enemy[i].y <0)){
            enemy[i].speed *= -1;
        }
    }
    
}
function gameloop(){
    if(game_over==true){
        clearInterval(f);
    }
    draw();
    update();
    console.log("In gameloop");

}

load_images();
init();
var f = setInterval(gameloop,100);