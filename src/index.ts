export {};

// Property 'flatMap', 'flat' does not exist on type in TS

// 👇️ using Array.flatMap
const arr = ['one two', 'three four'];

const result = arr.flatMap((str) => str.split(' '));

// 👇️ ['one', 'two', 'three', 'four']
console.log(result);
