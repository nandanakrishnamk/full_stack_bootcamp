let age =20;

if(age>=18){
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

let day="Monday";

switch(day){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

let assignment=age>=18 ? "You are an adult" : "You are not an adult";
console.log(assignment);

for(let i=0;i<5;i++){
    console.log(i);
}

let fruits=["apple","banana","orange"];
for each(fruit in fruits){
    console.log(fruit);
}

for(let fruit of fruits){
    console.log(fruit);
}

while(age<25){
    console.log(age);
    age++;
}

do{
    console.log(age);
    age++;
}while(age<30);