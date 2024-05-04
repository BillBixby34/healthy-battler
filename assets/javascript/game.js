
$(document).ready(function(){

//create variables
//will create boxes
let charBox = $(".box");
//characters object
let characterObjArray = [
    {
        name: "snake",
        offense: 110,
        defense: 90
    },

    {
        name: "ray",
        offense: 90,
        defense: 100
    },

    {
        name: "otacon",
        offense: 120,
        defense: 105
    },

    {
        name: "raiden",
        offense: 140,
        defense: 80
    }
];

//logic
//once character chosen, 
//character stays in chosen area,
//characters not chosen go to enemy select area
//enemy is selected,
//and moves to selected enemy area

//the character you choose has health, and attack strength
//the enemy has health and "counter" attack strength
//when you attack, your attack power amount is the number subtracted from your opponents health,
//after each attack, the enemy counters with their attack to player's health
// CHALLENGE: Will try to use recursion to automate battles

//Whichever gets to 0 health first, loses

//background colors of each character will change depending on their location as default, player choice, and enemy

}); //end of document

