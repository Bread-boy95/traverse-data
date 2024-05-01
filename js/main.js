// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let yes = 0;
  let no = 0;
  let maybe = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yes++;
    } else if (surveyData[i] == "No") {
      no++;
    } else {
      maybe++;
    }
    outputEl.innerHTML = `Survey Data <br> Yes: ${yes} <br> No: ${no} <br> Maybe: ${maybe}`;
  }
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let und18 = 0;
  let to35 = 0;
  let to65 = 0;
  let over65 = 0;
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      und18++;
    } else if (ageData[i] > 17 && ageData[i] < 36) {
      to35++;
    } else if (ageData[i] > 35 && ageData[i] < 66) {
      to65++;
    } else if (ageData[i] > 65) {
      over65++;
    }
    outputEl.innerHTML = `Age Data <br> under 18: ${und18} <br> Between ages 18 & 35: ${to35} <br> Between ages 36 & 65: ${to65} <br> Over 65: ${over65}`;
  }
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  let even = 0;
  let odd = 0;
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      even++;
    } else if (numberData[i] % 2 == 1 || numberData[i] % 2 == -1) {
      odd++;
    }
  }

  outputEl.innerHTML = `Number Data <br> Odd numbers: ${odd} <br> Even numbers: ${even}`;
  console.log(numberData);
}
