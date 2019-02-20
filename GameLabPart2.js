function startGame() {
    const playGame = prompt('Do you want to play game? (Y/N)');

    if (playGame === 'Y') {
        const userName = prompt("What is your character's name?");
        startCombat(userName);
    }
}

function startCombat(userName){
    let userHealth = 40;
    let grantHealth = 10;
    let grantDefeats = 0;
    let userWins = 0;
    let round = 1;
    let attackDec = prompt('Do you want to attack or quit?');

    while (grantDefeats < 3 && userHealth > 0) {
        
        if (attackDec === 'attack') {
            userHealth -= getDamage();
            grantHealth -= getDamage();

            console.log(`${userName} has ${userHealth} health left.`);
            console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);

            if (grantHealth <= 0) { 
                grantDefeats++;
                grantHealth = 10;
                userWins++;
                if (round < 3){
                    console.log(`You have beat Grant! You need to win ${3-round} more round(s).`);
                    attackDec = prompt('Do you wnat to attack or quit?');
                }
                round++;
                
            }

        } else break;
        
    }
    if (userHealth > 0 && userWins === 3) {
        console.log(`${userName} is the winner!!`);
    } else
        console.log('Grant the Mighty Chicken is the winner!!');

}

function getDamage() {
    return Math.floor((Math.random() * 5) + 1)
}

startGame();