function addBorder(picture: string[]): string[] {
    const horizontalBorder = '*'.repeat(picture[0].length + 2);

    picture = picture.map(item => {
        return `*${item}*`;
    });

    picture.unshift(horizontalBorder);
    picture.push(horizontalBorder);

    return picture;
}

console.log(addBorder(["abc", "ded"]));