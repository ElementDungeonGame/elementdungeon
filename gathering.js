//count increases the amount of materials gathered + amount gathered
//skill increases the chance to get a bulk drop for materials while gathering aside from gems

//arron is white
//arron is white 2

// ========== VARIABLES ==========

var crops = 0;
var farmingSkill = 0;
var hoeCount = 40;

var wood = 0;
var lumberSkill = 40;
var axeCount = 40;

var stone = 0;
var metal = 0;
var gems = 0;
var miningSkill = 40;
var pickaxeCount = 40;

var currentState = 0;
var currentKey = "";

var woodenHoe = false;
var woodenAxe = false;
var woodenPickaxe = false;

var stoneHoe = false;
var stoneAxe = false;
var stonePickaxe = false;

var metalHoe = false;
var metalAxe = false;
var metalPickaxe = false;

var randomCropMax = 100;
var randomWoodMax = 100;
var randomStoneMax = 100;
var randomMetalMax = 100;

var randomCropUpgrade = false;
var randomWoodUpgrade = false;
var randomStoneUpgrade = false;
var randomMetalUpgrade = false;

// ========== END OF VARIABLES ==========


// ========== GATHERING ==========

document.getElementById("CropCount").textContent = "Crops: " + crops; 

//these will be hidden until the player unlocks them
document.getElementById("WoodCount").textContent = "Wood: " + wood;


document.getElementById("StoneCount").textContent = "Stone: " + stone;


document.getElementById("MetalCount").textContent = "Metal: " + metal;


document.getElementById("GemCount").textContent = "Gems: " + gems;



document.addEventListener("keypress",function(event) {
    var key = event.key;
    if(key == 'f' || key == 'l' || key == 'm') {
        if(currentKey == key) {
            currentState+=1;
        }
        else {
            currentState = 0;
        }
        currentKey = key;
        if (currentKey == 'f' && (currentState % hoeCount == 0)){
            farm();
        }
        else if (currentKey == 'l' && (currentState % axeCount == 0)){
            lumber();
        }
        else if (currentKey == 'm' && (currentState % pickaxeCount == 0)){
            mine();
        }

    }

})

function getRandom(max){
    return Math.floor(Math.random() * max); //will return max-1

}

function farm(){
    crops += 1 + farmingSkill;
    document.getElementById("CropCount").textContent = "Crops: " + crops;
    if (randomCropUpgrade){
        rollRandomCrop();
    }
    levelUp(1); //TEMP VALUE
    
}

function lumber(){
    wood += 1 + lumberSkill;
    document.getElementById("WoodCount").textContent = "Wood: " + wood;
    if (randomWoodUpgrade){
        rollRandomWood();
    }
    levelUp(1); //TEMP VALUE

}

function mine(){
    var mineChance = getRandom(11);
    if (mineChance <= 6){
        stone += 1 + miningSkill;
        levelUp(1); //TEMP VALUE
        if (randomStoneUpgrade){
            rollRandomStone();
        }
        
    }
    else if (mineChance <= 9){
        metal += 1 + miningSkill;
        levelUp(1); //TEMP VALUE
        if (randomMetalUpgrade){
            rollRandomMetal();
        }
        
    }
    else if (mineChance == 10){
        gems += 1 + miningSkill;
        levelUp(1); // TEMP VALUE
    }

    document.getElementById("StoneCount").textContent = "Stone: " + stone;
    document.getElementById("MetalCount").textContent = "Metal: " + metal;
    document.getElementById("GemCount").textContent = "Gems: " + gems;
}

// ========== END OF GATHERING ==========

// ========== CRAFTING ==========

function craftWoodenHoe(){
    if (wood >= 40 && woodenHoe == false){
        hoeCount=30;
        farmingSkill++;
        document.getElementById("WoodenHoeCount").textContent = "Wooden Hoe: Yes";
    }
    else if (wood < 40){
        alert("Not enough resources (required: 40 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftWoodenAxe(){
    if (wood >= 40 && woodenAxe == false){
        axeCount=30;
        lumberSkill++;
        document.getElementById("WoodenAxeCount").textContent = "Wooden Axe: Yes";
    }
    else if (wood < 40){
        alert("Not enough resources (required: 40 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftWoodenPickaxe(){
    if (wood >= 40 && woodenPickaxe == false){
        pickaxeCount=30;
        miningSkill++;
        document.getElementById("WoodenPickaxeCount").textContent = "Wooden Pickaxe: Yes";
    }
    else if (wood < 40){
        alert("Not enough resources (required: 40 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftStoneHoe(){
    if (stone >= 50 && wood >= 10 && stoneHoe == false){
        hoeCount=20;
        farmingSkill += 2;
        document.getElementById("StoneHoeCount").textContent = "Stone Hoe: Yes";
    }
    else if (stone < 50 || wood < 10){
        alert("Not enough resources (required: 50 stone, 10 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftStoneAxe(){
    if (stone >= 50 && wood >= 10 && stoneAxe == false){
        axeCount=20;
        lumberSkill += 2;
        document.getElementById("StoneAxeCount").textContent = "Stone Axe: Yes";
    }
    else if (stone < 50 || wood < 10){
        alert("Not enough resources (required: 50 stone, 10 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftStonePickaxe(){
    if (stone >= 50 && wood >= 10 && stonePickaxe == false){
        pickaxeCount=20;
        miningSkill += 2;
        document.getElementById("StonePickaxeCount").textContent = "Stone Pickaxe: Yes";
    }
    else if (stone < 50 || wood < 10){
        alert("Not enough resources (required: 50 stone, 10 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftMetalHoe(){
    if (metal >= 75 && wood >= 25 && metalHoe == false){
        hoeCount=30;
        farmingSkill += 3;
        document.getElementById("MetalHoeCount").textContent = "Metal Hoe: Yes";
    }
    else if (metal < 75 || wood < 25){
        alert("Not enough resources (required: 75 metal, 25 wood)")
    }
    else{
        alert("You already have one of these!")
    }
    
}

function craftMetalAxe(){
    if (metal >= 75 && wood >= 25 && metalAxe == false){
        axeCount=30;
        lumberSkill += 3;
        document.getElementById("MetalAxeCount").textContent = "Metal Axe: Yes";
    }
    else if (metal < 75 || wood < 25){
        alert("Not enough resources (required: 75 metal, 25 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

function craftMetalPickaxe(){
    if (metal >= 75 && wood >= 25 && metalPickaxe == false){
        pickaxeCount=30;
        miningSkill += 3;
        document.getElementById("MetalPickaxeCount").textContent = "Metal Pickaxe: Yes";
    }
    else if (metal < 75 || wood < 25){
        alert("Not enough resources (required: 75 metal, 25 wood)")
    }
    else{
        alert("You already have one of these!")
    }
}

// ========== END OF CRAFTING ==========

// ========== FUNCTIONS FOR UPGRADES ==========

function rollRandomCrop(){
    var r = getRandom(101);
    if (r == 100){
        crops += randomCropMax;
    }
}

function rollRandomWood(){
    var r = getRandom(101);
    if (r == 100){
        wood += randomWoodMax;
    }
}

function rollRandomStone(){
    var r = getRandom(101);
    if (r == 100){
        stone += randomStoneMax;
    }
}

function rollRandomMetal(){
    var r = getRandom(101);
    if (r == 100){
        metal += randomMetalMax;
    }
}

// ========== END OF FUNCTIONS FOR UPGRADES ==========

// ========== BUYING UPGRADES ==========

function buyRandomCropUpgrade(){
    if (crops >= 1000){
        randomCropUpgrade = true;
    }
    else if (crops < 1000){
        alert("Not enough materials (required: 1000 crops)")
    }
    else{
        alert("You already have this upgrade.")
    }
}

function buyRandomWoodUpgrade(){
    if (wood >= 1500){
        randomWoodUpgrade = true;
    }
    else if (wood < 1500){
        alert("Not enough materials (required: 1500 wood)")
    }
    else{
        alert("You already have this upgrade.")
    }
}

function buyRandomStoneUpgrade(){
    if (stone >= 2000){
        randomStoneUpgrade = true;
    }
    else if (stone < 2000){
        alert("Not enough materials (required: 2000 wood)")
    }
    else{
        
        alert("You already have this upgrade.")
    }
}

function buyRandomMetalUpgrade(){
    if (metal >= 2500){
        randomMetalUpgrade = true;
    }
    else if (metal < 2500){
        alert("Not enough materials (required: 2500 wood)")
    }
    else{
        alert("You already have this upgrade.")
    }
}

// ========== END OF BUYING UPGRADES ==========
