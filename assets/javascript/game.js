$(document).ready(function(){

//create variables
//will create boxes
let charBox = $(".box");
//characters object
let characterObjArray = [
    {
        name: "snake",
        offense: 110,
        defense: 90,
        picSrc: ".../images/youngSnake.jpg"
    },

    {
        name: "ray",
        offense: 90,
        defense: 100,
        picSrc: "../images/MGRay.jpeg"
    },

    {
        name: "otacon",
        offense: 120,
        defense: 105,
        picSrc: "../images/Otacon.webp"
    },

    {
        name: "solidus",
        offense: 140,
        defense: 80,
        picSrc: "../images/solidusSnake"
    }
];

//loop through array and create boxes
//drinkList
let charRow = $(".character-row");

for (i = 0; i < characterObjArray.length; i++){
    let charBox = $("<figure>");
    charBox.addClass("box box-color");
    charBox.attr({"data-name":characterObjArray[i].name,"data-offense":characterObjArray[i].offense, "data-health":characterObjArray[i].defense });
    //will see ifother attributes can be added
    charBox.text(characterObjArray[i].name);
    console.log(characterObjArray[i].name + " has " + characterObjArray[i].defense + " health points");
    charRow.append(charBox);

};
//logic
//once character chosen, 
//character stays in chosen area,
//characters not chosen go to enemy select area
//once enemy is selected,
//and moved to selected enemy area,
//the enemy select area is locked,
//the battle can begin!

//the character you choose has health, and attack strength
//the enemy has health and "counter" attack strength
//when you attack, your attack power amount is the number subtracted from your opponents health,
//after each attack, the enemy counters with their attack to player's health
// CHALLENGE: Will try to use recursion to automate battles

//Whichever gets to 0 health first, loses

//background colors of each character will change depending on their location as default, player choice, and enemy

}); //end of document

