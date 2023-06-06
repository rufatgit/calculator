
function calculate() {
    const args = document.getElementById("arguments").value.split(" ");
    const operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
      case "sum":
        result = args.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        break;
      case "product":
        result = args.reduce((a, b) => parseInt(a) * parseInt(b), 1);
        break;
      case "maximum":
        result = Math.max(...args.map((a) => parseInt(a)));
        break;
      case "minimum":
        result = Math.min(...args.map((a) => parseInt(a)));
        break;
      default:
        result = "Invalid operation";
        break;
    }

    document.getElementById("result").value = result;
  }

  function generateRandom() {
    const randomNumbers = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10)
    );
    document.getElementById("arguments").value = randomNumbers.join(" ");
  }

  function changeColor(elementId) {
    const color = document.getElementById(elementId).value;
    const textfield = document.getElementsByClassName("textfield");

    for (let i = 0; i < textfield.length; i++) {
      textfield[i].style[
        elementId === "foreground-color" ? "color" : "background-color"
      ] = color;
    }
  }

  function save_doc() {
    var arguments = document.getElementById("arguments").value;
    var operation = document.getElementById("operation").value;
    var result = document.getElementById("result").value;
  
    var filename = prompt("Enter the file name:", "calculator_data.txt");
    if (filename === null || filename === "") {
      return; // User cancelled or didn't provide a filename
    }
  
    var textToSave =
      "Arguments - " +
      arguments +
      "\nOperation - " +
      operation +
      "\nResult - " +
      result;
  
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(textToSave)
    );
    element.setAttribute("download", filename);
  
    element.style.display = "none";
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  