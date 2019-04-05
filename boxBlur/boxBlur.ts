function boxBlur(image: number[][]): number[][] {
    const neighbour = 1;
    const result = [];
    for (let y = 1; y < image.length - neighbour; y++) {
        let line = [];
        for (let x = 1; x < image[y].length - neighbour; x++) {
            line.push(pixelAvarage(image, x, y, neighbour));
        }
        result.push(line);
    }

    return result;
}

function pixelAvarage(image, pixelX, pixelY, neighbour) {
    let sum = 0;
    let count = 0;

    for (let y = pixelY - neighbour; y <= pixelY + neighbour; y++) {
        for (let x = pixelX - neighbour; x <= pixelX + neighbour; x++) {
            sum += image[y][x];
            count++;
        }
    }

    return Math.floor(sum / count);
}

function boxBlur2(image: number[][]): number[][] {
    const res = [];

    for (let y = 0; y < image.length - 2; y++) {
        const line = [];
        
        for (let x = 0; x < image[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for (let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }

            line.push(Math.floor(sum/count));
        }

        res.push(line);
    }

    return res;
}

console.log(boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
]));

console.log(boxBlur([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0,90,90,90,90,90, 0, 0],
    [0, 0, 0,90, 0,90,90,90, 0, 0],
    [0, 0, 0,90,90,90,90,90, 0, 0],
    [0, 0, 0,90,90,90,90,90, 0, 0],
    [0, 0, 0,90,90,90,90,90, 0, 0],
    [0,90, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]));