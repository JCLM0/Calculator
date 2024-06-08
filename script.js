// Funcionamiento de la calculadora

// Variables
const operationDisplay = document.querySelector(".info-numbers");
const actualNumber = document.querySelector(".info-actual-number");
const operator = document.querySelector(".info-operator")

const btnCE = document.querySelector("#btn-CE");
const btnC = document.querySelector("#btn-C");
const btnSup = document.querySelector("#btn-Sup");

const btnDivide = document.querySelector("#btn-divide");
const btnMultiply = document.querySelector("#btn-multiply");
const btnMinus = document.querySelector("#btn-minus");
const btnPlus = document.querySelector("#btn-plus");
const btnEquals = document.querySelector("#btn-equals");
const btnPoint = document.querySelector("#btn-point");

const btnN1 = document.querySelector("#btn-n1");
const btnN2 = document.querySelector("#btn-n2");
const btnN3 = document.querySelector("#btn-n3");
const btnN4 = document.querySelector("#btn-n4");
const btnN5 = document.querySelector("#btn-n5");
const btnN6 = document.querySelector("#btn-n6");
const btnN7 = document.querySelector("#btn-n7");
const btnN8 = document.querySelector("#btn-n8");
const btnN9 = document.querySelector("#btn-n9");
const btnN0 = document.querySelector("#btn-n0");



// Funcion agregar numero
function addNumber(number) {
    if (actualNumber.textContent.length < 9) {
        if (actualNumber.textContent == "0" && actualNumber.textContent.length == 1) {
            actualNumber.textContent = number;
            return;
        }

        actualNumber.textContent += number;
    };

};

// Funcion quitar un numero
function removeNumber() {
    actualNumber.textContent = actualNumber.textContent.slice(0, -1);
    if (actualNumber.textContent == "") {
        actualNumber.textContent = "0";
    };
}

// Funcion quitar todos los numeros
function removeAll() {
    actualNumber.textContent = "0";
};

// Funcion quitar todos los numeros
function removeAllNumbers() {
    operationDisplay.textContent = "";
    operator.textContent = "";
    actualNumber.textContent = "0";
};

// Funcion poner coma
function addPoint() {
    if (!actualNumber.textContent.includes(",")){
        actualNumber.textContent += ",";
    }
};

// Funcion agrregar operador
function addOperator(element) {
    operator.textContent = element;

    operationDisplay.textContent = actualNumber.textContent;
    actualNumber.textContent = "0";
}

// Hacer operaciones
function doOperations() {
    let numero1 = a(operationDisplay.textContent);
    let numero2 = a(actualNumber.textContent);

    switch(operator.textContent) {
        case "/":
            operationDisplay.textContent = "";
            operator.textContent = "";
            actualNumber.textContent = numero1 / numero2;
            break;

        case "x":
            operationDisplay.textContent = "";
            operator.textContent = "";
            actualNumber.textContent = numero1 * numero2;
            break;

        case "-":
            operationDisplay.textContent = "";
            operator.textContent = "";
            actualNumber.textContent = numero1 - numero2;
            break;

        case "+":
            operationDisplay.textContent = "";
            operator.textContent = "";
            actualNumber.textContent = numero1 + numero2;
            break;
    }

    if (actualNumber.textContent == "22722" && operationDisplay.textContent == "" && operator.textContent == "") {
        alert("Codigo secreto activo")
    }
}




btnN1.addEventListener("click", () => addNumber(1));
btnN2.addEventListener("click", () => addNumber(2));
btnN3.addEventListener("click", () => addNumber(3));
btnN4.addEventListener("click", () => addNumber(4));
btnN5.addEventListener("click", () => addNumber(5));
btnN6.addEventListener("click", () => addNumber(6));
btnN7.addEventListener("click", () => addNumber(7));
btnN8.addEventListener("click", () => addNumber(8));
btnN9.addEventListener("click", () => addNumber(9));
btnN0.addEventListener("click", () => addNumber(0));

btnSup.addEventListener("click", () => removeNumber());
btnC.addEventListener("click", () => removeAll());
btnCE.addEventListener("click", () => removeAllNumbers());

btnPoint.addEventListener("click", () => addPoint())

btnDivide.addEventListener("click", () => addOperator("/"));
btnMultiply.addEventListener("click", () => addOperator("x"));
btnMinus.addEventListener("click", () => addOperator("-"));
btnPlus.addEventListener("click", () => addOperator("+"));

btnEquals.addEventListener("click", () => doOperations())

/* // Codigo chatgpt

const display = document.querySelector(".info-numbers");
const actual = document.querySelector(".info-actual-number");

const buttons = document.querySelectorAll("button"); // Asumiendo que todos los botones son de tipo <button>

// Función para agregar número
const addNumber = (num) => {
    if (actual.textContent.length < 9) {
        actual.textContent += num;
    }
};

// Asignar event listeners a todos los botones de números
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;

        if (buttonId.startsWith("btn-n")) {
            const number = buttonId.split("-")[2];
            addNumber(number);
        }
    });
}); */