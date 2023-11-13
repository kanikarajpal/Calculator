const items = document.querySelectorAll(".item");
const inputDiv = document.querySelector(".inputDiv");
let inputText = "";

items.forEach((item) => item.addEventListener("click", handleClick));

function handleClick() {
  const clickedItem = this.innerText;
  switch (clickedItem) {
    case "C":
      inputText = "";
      break;
    case "X":
      inputText = inputDiv.value.slice(0, -1);
      break;
    case ".":
      const lastNumIndex = inputText.match(/[\d.]+$/).index;
      const lastNum = inputText.substring(lastNumIndex);
      const dotCount = lastNum.split(".").length - 1;
      inputText += dotCount === 0 ? "." : "";
      break;
    case "=":
      inputText =
        inputText !== "Error" ? evaluateExpression(inputText) : "Error";
      break;
    default:
      inputText += clickedItem;
  }

  if (inputDiv.value !== "Error" || clickedItem === "C")
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
