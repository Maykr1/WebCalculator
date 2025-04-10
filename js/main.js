import {add, subtract, multiply, divide} from "./operations.js";
import reset from "./reset.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton");
const multiplyButton = document.getElementById("mulButton");
const divideButton = document.getElementById("divButton");
const resetButton = document.getElementById("resButton");

const output = document.getElementById("output");

addButton.addEventListener("click", () => {
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please enter a number!");
    }
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    output.innerHTML = `${add(num1, num2)}`;
});

subButton.addEventListener("click", () => {
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please enter a number!");
    }
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    output.innerHTML = subtract(num1, num2);
});

multiplyButton.addEventListener("click", () => {
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please enter a number!");
    }
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    output.innerHTML = multiply(num1, num2);
});

divideButton.addEventListener("click", () => {
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please enter a number!");
    }
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    output.innerHTML = divide(num1, num2);
});

resetButton.addEventListener("click", () => {
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please enter a number!");
    }
    reset(num1Input, num2Input, output);
    alert("Calculator Reset!");
});