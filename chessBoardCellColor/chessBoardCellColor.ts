interface Cell {
    x: number,
    y: number
}

function chessBoardCellColor(cellStr1: string, cellStr2: string): boolean {
    const cell1 = parseCell(cellStr1);
    const cell2 = parseCell(cellStr2);

    return (cell1.x + cell1.y) % 2 === (cell2.x + cell2.y) % 2;
}

function parseCell(cellStr: String): Cell {
    cellStr = cellStr.toLowerCase();

    return {
        x: cellStr.charCodeAt(0),
        y: Number(cellStr[1])
    }
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('G7', 'H8'));
