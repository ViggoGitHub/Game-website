document.addEventListener("DOMContentLoaded", function (){


    let playerX = 0;
    let playerY = 0;
    let playerDirection = "right";

    function updatePlayer() {
        player.style.left = playerX + "px";
        player.style.top = playerY + "px";
    } 

    function movePlayer() {
        switch(playerDirection){
            case "right":
                playerX += 5;
                break;
            case "left":
                playerX -= 5;
                break;
        }

        updatePlayer();
    }

    function pressedKey(event){
        switch(event.key){
            case "ArrorRight":
                playerDirection = "right";
                break;
            case "ArrorLeft":
                playerDirection = "left";
                break;
        }
    }

    // Event listener for keyboard input
    document.addEventListener("keydown", pressedKey);


})



