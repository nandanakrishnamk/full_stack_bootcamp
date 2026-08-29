document.getElementById("main-heading").textContent="Welcome to My Website";    

const firstPara=document.querySelector(".text-paragraph");
firstPara.computedStyleMap.color="red"
firstPara.style.fontSize="20px"
firstPara.textContent="This is the first paragraph of the website. It contains some introductory text about the website and its purpose."

const allParas=document.querySelectorAll("p");
allParas.forEach(para=>{
    para.style.background="lightblue";
    para.style.padding="10px";
})

const newPara=document.createElement("p");
newPara.textContent="This is a new paragraph added to the website using JavaScript.";
document.body.appendChild(newPara);

