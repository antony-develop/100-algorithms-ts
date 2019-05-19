function fancyRide(l: number, fares: number[]): string {
    const rideNames = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

    for (let i = 0; i < fares.length; i++) {
        const price = l * fares[i];
        if (price > 20) {
            return rideNames[i-1];
        }
    }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));