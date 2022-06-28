var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0

var soma = document.getElementsByName("adicionar")[0];
soma.addEventListener("click", increment);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

var sub = document.getElementsByName("subtrair")[0];
sub.addEventListener("click", decrement);

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}


       


