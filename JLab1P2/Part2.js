"use strict";

let userName = undefined
let userHp = 40
let grantHp = 10
let wins = 0


function startGame() {
let game = prompt ("Dare to challenge the Almighty Grant?");
if (game === "yes" || game === "Yes") {
    userName = prompt ("What's your name, human?");
}
startCombat();
}
function startCombat() {
    while (true) {
        console.log(`${userName} health: ${userHp -= getDamage() }`);
        console.log(`Almighty Grant's health: ${grantHp -= getDamage () }`);
        if (wins >= 2 && grantHp <= 0) {
            console.log(`"Winner winner ${userName}! Grant for dinner!"`);
            break;
        } else if (userHp <= 0) {
            console.log("Better luck next time.. the Almighty Grant wins!");
            break;
        } else if (grantHp <= 0) {
            wins++;
            console.log(`${userName} wins: ${wins}`);
            grantHp = 10;
        } 
    }
}
function getDamage() {
    return Math.floor((Math.random()* 5) + 1)
}
startGame();

