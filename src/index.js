const repeats = 3;

export const brainGamesStart = (brainGame, name) => {
    for (let i = 0; i < repeats; i += 1) {
        if (brainGame(name) === 0) {
            return 0;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

export const brainCalcStart = (brainGameCalc, name) => {
    for (let i = 0; i < repeats; i += 1) {
        if (brainGameCalc(name) === 0) {
            return 0;
        }
    }
    console.log(`Congratulations, ${name}!`);
}