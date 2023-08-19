function calculateTriangleArea() {
  const triangleBaseField = document.getElementById("triangle-base");
  const triangleBaseFieldValueString = triangleBaseField.value;
  const baseFieldValue = parseFloat(triangleBaseFieldValueString);

  const triangleHeightField = document.getElementById("triangle-height");
  const triangleHeightFieldString = triangleHeightField.value;
  const triangleHeightFieldValue = parseFloat(triangleHeightFieldString);

  const area = 0.5 * baseFieldValue * triangleHeightFieldValue;
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;
  addToCalculationEntry("triangle", area);
}

// rectangle function
function calculateRectangleArea() {
  const rectangleWidthField = document.getElementById("rectangle-width");
  const rectangleWidthString = rectangleWidthField.value;
  const rectangleWidth = parseFloat(rectangleWidthString);

  const rectangleLengthField = document.getElementById("rectangle-length");
  const rectangleLengthString = rectangleLengthField.value;
  const rectangleLength = parseFloat(rectangleLengthString);

  const area = rectangleWidth * rectangleLength;
  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = area;
  addToCalculationEntry("rectangle", area);
}

function calculateParallelogramArea() {
  const base = inputField("parallelogram-base");
  const height = inputField("parallelogram-height");

  if (isNaN(base) || isNaN(height)) {
    alert("You'r not not allowed to use something without number");
    return;
  }

  const area = base * height;
  setElementInnerText("parallelogram-area", area);

  addToCalculationEntry("parallelogram", area);
}

function calculateEllipseArea() {
  const major = inputField("ellipse-major-length");
  const minor = inputField("ellipse-minor-length");
  if (isNaN(major) || isNaN(minor)) {
    alert("You'r not not allowed to use something without number");
    return;
  }
  const area = 3.1416 * major * minor;
  const areaFixed = area.toFixed(2);
  const areaFixedNumber = parseFloat(areaFixed);
  setElementInnerText("ellipse-area", areaFixedNumber);

  addToCalculationEntry("ellipse", areaFixedNumber);
}

// get element by using function
function inputField(inputId) {
  const inputFieldValue = document.getElementById(inputId);
  const inputFieldString = inputFieldValue.value;
  const inputField = parseFloat(inputFieldString);
  return inputField;
}

// set element by using function
function setElementInnerText(elementId, areaValue) {
  const element = document.getElementById(elementId);
  element.innerText = areaValue;
}

// add to calculation entry
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount;
  const p = document.createElement("p");
  calculationEntry.append(p);
  p.classList.add("my-4");
  p.innerHTML = `${
    count + 1
  }. ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-primary btn-sm">Count</button>`;
}
