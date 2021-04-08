const inputMultiply = document.querySelectorAll(".multiply");
const outputMultiply = document.querySelector(".multiplyOutput");
const inputDevided = document.querySelectorAll(".devided");
const calculateButton = document.querySelector(".button");
let multiplyOutput = 0;

calculateButton.addEventListener("click", function(){
    multiplyOutput = inputMultiply[0] * inputMultiply[1]
    outputMultiply.outerHTML = multiplyOutput;
}
)