let history = [];

// Add values to display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Calculate full expression like "5+3"
function calculate() {
    const display = document.getElementById("display");
    const expression = display.value;

    let operator;
    let parts;

    if (expression.includes("+")) {
        operator = "+";
        parts = expression.split("+");
    } else if (expression.includes("-")) {
        operator = "-";
        parts = expression.split("-");
    } else if (expression.includes("*")) {
        operator = "*";
        parts = expression.split("*");
    } else if (expression.includes("/")) {
        operator = "/";
        parts = expression.split("/");
    } else {
        alert("Invalid expression");
        return;
    }

    const num1 = Number(parts[0]);
    const num2 = Number(parts[1]);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }

    display.value = result;

    addToHistory(num1, num2, operator, result);
}

// Store history
function addToHistory(num1, num2, operator, result) {
    const record = {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result
    };

    history.push(record);
    displayHistory();
}

// Show history
function displayHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        const item = history[i];
        const li = document.createElement("li");
        li.textContent = item.num1 + " " + item.operator + " " + item.num2 + " = " + item.result;
        historyList.appendChild(li);
    }
}