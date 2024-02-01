const repeats = 3;

export const brainGamesStart = (gameName, name) => {
    for (let i = 0; i < repeats; i += 1) {
        if (gameName(name) === 0) {
            return 0;
    }
    console.log(`Congratulations, ${name}!`);
    }
}