const items = document.querySelectorAll(".item");
const inputDiv = document.querySelector(".inputDiv");
let inputText = "";

items.forEach((item) => item.addEventListener("click", handleClick));

function handleClick() {
  const clickedItem = this.innerText;
  switch (clickedItem) {
    case "AC":
      inputText = "";
      break;
    case "X":
      inputText = inputDiv.value.slice(0, -1);
      break;
    case "=":
      inputText =
        inputText !== "Error" ? evaluateExpression(inputText) : "Error";
      break;
    default:
      inputText += clickedItem;
  }
  inputDiv.value = inputText;
}

function evaluateExpression(expression) {
  let result;
  try {
    result = eval(expression);

    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }
  } catch (error) {
    result = "Error";
  }
  return result;
}
