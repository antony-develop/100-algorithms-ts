function electionsWinners(votes: number[], k: number): number {
    const maxVote = Math.max(...votes);

    if (k === 0) {
        return maxVote;
    }

    let potentialWinners = 0;

    for (let vote of votes) {
        if (vote + k > maxVote) {
            potentialWinners++;
        }
    }

    return potentialWinners;
}

console.log(electionsWinners([2, 3, 5, 2], 3));