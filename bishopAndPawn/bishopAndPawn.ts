function bishopAndPawn(bishopStr: string, pawnStr: string): boolean {
    const bishop = converCell(bishopStr);
    const pawn = converCell(pawnStr);

    // return eatPawn(bishop, pawn);
    // return Math.abs(calculateSlope(bishop, pawn)) == 1;
    return (bishop.x + bishop.y === pawn.x + pawn.y || bishop.x + pawn.y === bishop.y + pawn.x);
}

function eatPawn(bishop, pawn) {
    let i = 1;
    while (i <= 8) {
        if ([bishop.x + i, bishop.y + i].join('') === [pawn.x,pawn.y].join('')) {
            return true;
        }
        if ([bishop.x - i, bishop.y - i].join('') === [pawn.x,pawn.y].join('')) {
            return true;
        }
        if ([bishop.x + i, bishop.y - i].join('') === [pawn.x,pawn.y].join('')) {
            return true;
        }
        if ([bishop.x - i, bishop.y + i].join('') === [pawn.x,pawn.y].join('')) {
            return true;
        }
        i++;
    }
    return false;
}

function converCell(str: string) {
    return {
        x: str[0].toLowerCase().charCodeAt(0) - ('a'.charCodeAt(0) - 1),
        y: Number(str[1])
    }
}

function calculateSlope(cell1, cell2) {
    const diagonalX = cell1.x - cell2.x;
    if (diagonalX == 0) {
        return 0;
    }

    const diagonalY = cell1.y - cell2.y;

    return diagonalY / diagonalX;
}

console.log(bishopAndPawn('c5', 'g1'));