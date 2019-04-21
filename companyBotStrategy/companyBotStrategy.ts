function companyBotStrategy(trainingData: number[][]): number {
    let totalTime = 0;
    let correctAnswers = 0;
    for (let trainerData of trainingData) {
        const trainerAnswerTime = trainerData[0];
        const trainerAnswer = trainerData[1];

        if (trainerAnswer === 1) {
            totalTime += trainerAnswerTime;
            correctAnswers++;
        }
    }

    return correctAnswers ? totalTime / correctAnswers : 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
