let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const actuallyValue = document.querySelector("#value");

const countValueDecrement = function () {
    counterValue -= 1;
    actuallyValue.textContent = counterValue;
};

const countValueIncrement = function () {
    counterValue += 1;
    actuallyValue.textContent = counterValue;
};

decrement.addEventListener("click", countValueDecrement);
increment.addEventListener("click", countValueIncrement);