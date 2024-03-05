var playerLevel = 0;

function levelUp(amount){
    playerLevel += amount;
    document.getElementById("Level").textContent = "Level: " + playerLevel;
    console.log(playerLevel)
    if (playerLevel >= 10){
        var woodcuttingElements = document.getElementsByClassName("Woodcutting");
        for(var i = 0; i < woodcuttingElements.length; i++){
            woodcuttingElements[i].style.display = "block";
        }
    }
}