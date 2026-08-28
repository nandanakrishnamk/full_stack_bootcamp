let greeting="Hello, World!";
let myName='Bob';

let str3=new String("Hello, World!");

let str4='${str3}';//to access as variable

console.log(text.toUpperCase())
console.log(text.toLowerCase())


const subStrResult = text.substring(0, 4);

const sliceResult = text.slice(0, 4);



console.log(text.indexOf("is"));
console.log(text.includes("awesome"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("awesome!"))


const newText = text.replace("awesome", "amazing");



let splitedWords = text.split(" ");
console.log(splitedWords);

const joinedWords = splitedWords.join("-")
console.log(joinedWords)


let spacedText = "     Hello World!       ";
console.log(spacedText)
console.log(spacedText.trim())
console.log(spacedText.trimStart())
console.log(spacedText.trimEnd())




console.log('First line \nsecond line \n3rd line')
console.log("hello my name is \"Bob\" ")






const isEquals1 = "hello" === "hello";
const isEquals2 = "hello" == "hello";

console.log(isEquals1);
console.log(isEquals2);

const isEquals3 = "5" === 5; 
const isEquals4 = "5" == 5; 

console.log(isEquals3);
console.log(isEquals4);

