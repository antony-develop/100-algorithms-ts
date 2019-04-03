function avoidObstacles(inputArray: number[]): number {
    const obstacles = inputArray.sort((a,b) => a - b);
    const maxObstacle = obstacles[obstacles.length - 1];

    for (let i = 1; i <= maxObstacle + 1; i++) {
        let isObstacle = false;
        obstacles.forEach(elem => {
            if (elem % i == 0) {
                isObstacle = true;
            }
        });

        if (!isObstacle) {
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9, 12]));
console.log(avoidObstacles([1, 1, 1, 1, 1]));
console.log(avoidObstacles([5, 4, 3, 6, 8, 7, 9]));