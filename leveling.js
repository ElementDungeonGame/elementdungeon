var playerLevel = 0;

function levelUp(amount){
    playerLevel += amount;
    document.getElementById("Level").textContent = "Level: " + playerLevel;
}