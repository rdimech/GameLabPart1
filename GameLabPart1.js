const playGame = prompt('Do you want to play game? (Y/N)');

if (playGame === 'Y') {
    const userName = prompt('What is your name?');
    let userHealth = 40;
    let grantHealth = 10;
    let grantDefeats = 0;
    let userWins = 0;

    while (grantDefeats < 3 && userHealth > 0) {
        userHealth -= Math.floor((Math.random() * 2) + 1);
        grantHealth -= Math.floor((Math.random() * 2) + 1);

        console.log(`${userName} has ${userHealth} health left.`);
        console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);

        if (grantHealth <= 0) { 
            grantDefeats++;
            grantHealth = 10;
            userWins++;
        }

    }
    if (userHealth > 0) {
        console.log(`${userName} is the winner!!`);
    } else
        console.log('Grant the Mighty Chicken is the winner!!');


}