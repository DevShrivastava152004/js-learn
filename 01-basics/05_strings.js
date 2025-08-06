const name = "Dev"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc')
console.log(gameName[0]);

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString  = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(anotherString);
console.log(newStringOne.trim());

const url = "https://dev.com/dev%20shrivastava"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))



console.log(gameName.split('-')); 