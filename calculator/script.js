let inputBox = document.querySelector(".inputbox");
let buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.textContent;

        if (value === "AC") {
            expression = "";
            inputBox.value = "";
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        } else if (value === "=") {
            try {
                let result = eval(expression);
                inputBox.value = result;
                expression = result.toString();
            } catch {
                inputBox.value = "Error";
                expression = "";
            }
        } else {
            expression += value;
            inputBox.value = expression;
        }
    });
});
