function characterParity(symbol: string): string {
   const input = Number(symbol);

   if (isNaN(input)) {
       return 'not a digit';
   }

   return input % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
