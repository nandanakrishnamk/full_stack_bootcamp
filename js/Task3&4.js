let urlString="https://phegon.com/course?id=12332";

let splitResult=urlString.split("id=");

console.log(splitResult[1]);

function isStrongPassword(password){
    const isLong=password.length>6

    const hasLetter=/[a-zA-Z]/.test(password);

    const hasNumber=/[0-9]/.test(password);

    return isLong && hasLetter && hasNumber;
}

const password1="abc123";
console.log(isStrongPassword(password1));