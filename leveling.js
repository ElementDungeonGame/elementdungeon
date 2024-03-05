var playerLevel = 0;

function levelUp(amount){
    playerLevel += amount;
    document.getElementById("Level").textContent = "Level: " + playerLevel;

    if (playerLevel == 10){ //unlock lumber
        var woodcuttingElements = document.getElementsByClassName("Woodcutting");
        for(var i = 0; i < woodcuttingElements.length; i++){
            woodcuttingElements[i].style.display = "block";
            alert("You unlocked woodcutting!")
        }
    }

    if (playerLevel == 15){ //unlocks wood tools
        var woodToolCrafting = document.getElementsByClassName("WoodCrafting");
        for(var i = 0; i < woodToolCrafting.length; i++){
            woodToolCrafting[i].style.display = "block";
            alert("You unlocked crafting wooden tools!")
        }
    }

    if (playerLevel == 20){ //unlock mining
        var miningElements = document.getElementsByClassName("Mining");
        for(var i = 0; i < miningElements.length; i++){
            miningElements[i].style.display = "block";
            alert("You unlocked mining!")
        }
    }

    if (playerLevel == 25){
        var stoneToolCrafting = document.getElementsByClassName("StoneCrafting");
        for(var i = 0; i < stoneToolCrafting.length; i++){
            stoneToolCrafting[i].style.display = "block";
            alert("You unlocked crafting stone tools!")
        }
    }

    if (playerLevel == 30){
        var metalToolCrafting = document.getElementsByClassName("MetalCrafting");
        for (var i = 0; i < metalToolCrafting.length; i++){
            stoneToolCrafting[i].style.display = "block";
            alert("You unlocked crafting metal tools!")
        }
    }


}

// unlocks:

// farming - lvl 0
// lumber - lvl 10
// wood tools - lvl 15
// mining - lvl 20
// stone tools - lvl 25
// metal tools - lvl 30
// upgrades - lvl 50