// Variables
var seatInput = document.getElementById("seatInput");
var signalInput = document.getElementById("signalInput");
var wheelInput = document.getElementById("wheelInput");
var doorInput = document.getElementById("doorInput");
var handbrakeInput = document.getElementById("handbrakeInput");

var correctionSeat = document.getElementById("seatCorrection");
var correctionSignal = document.getElementById("signalCorrection");
var correctionWheel = document.getElementById("wheelCorrection");
var correctionDoor = document.getElementById("doorCorrection");
var correctionHandbrake = document.getElementById("handbrakeCorrection");

var indicatorSeat = document.getElementById("seatIndicator");
var indicatorSignal = document.getElementById("signalIndicator");
var indicatorWheel = document.getElementById("wheelIndicator");
var indicatorDoor = document.getElementById("doorIndicator");
var indicatorHandbrake = document.getElementById("handbrakeIndicator");

var scoreOutput = document.getElementById("scoreOutput");
var percentageOutput = document.getElementById("percentageOutput");
var feedbackOutput = document.getElementById("feedbackOutput");

var markButton = document.getElementById("markButton");

// event listener
markButton.addEventListener("click", mark);

// Functions
function mark() {
  var score = 0;

  // Change input values to lowercase
  seatInput.value = seatInput.value.toLowerCase();
  signalInput.value = signalInput.value.toLowerCase();
  wheelInput.value = wheelInput.value.toLowerCase();
  doorInput.value = doorInput.value.toLowerCase();
  handbrakeInput.value = handbrakeInput.value.toLowerCase();

  // Clear old correction messages
  correctionSeat.innerHTML = "";
  correctionSignal.innerHTML = "";
  correctionWheel.innerHTML = "";
  correctionDoor.innerHTML = "";
  correctionHandbrake.innerHTML = "";

  // Question 1
  if (seatInput.value === "2" || seatInput.value === "two") {
    indicatorSeat.innerHTML = "Correct";
    indicatorSeat.style.color = "green";
    seatInput.style.borderColor = "green";
    score++;
  } else {
    correctionSeat.innerHTML = "The correct answer is 2";
    indicatorSeat.innerHTML = "Incorrect";
    indicatorSeat.style.color = "red";
    seatInput.style.borderColor = "red";
  }

  // Question 2
  if (signalInput.value === "2" || signalInput.value === "two") {
    indicatorSignal.innerHTML = "Correct";
    indicatorSignal.style.color = "green";
    signalInput.style.borderColor = "green";
    score++;
  } else {
    correctionSignal.innerHTML = "The correct answer is 2";
    indicatorSignal.innerHTML = "Incorrect";
    indicatorSignal.style.color = "red";
    signalInput.style.borderColor = "red";
  }

  // Question 3
  if (wheelInput.value === "wheel") {
    indicatorWheel.innerHTML = "Correct";
    indicatorWheel.style.color = "green";
    wheelInput.style.borderColor = "green";
    score++;
  } else {
    correctionWheel.innerHTML = "The correct answer is 'wheel'";
    indicatorWheel.innerHTML = "Incorrect";
    indicatorWheel.style.color = "red";
    wheelInput.style.borderColor = "red";
  }

  // Question 4
  if (doorInput.value === "door") {
    indicatorDoor.innerHTML = "Correct";
    indicatorDoor.style.color = "green";
    doorInput.style.borderColor = "green";
    score++;
  } else {
    correctionDoor.innerHTML = "The correct answer is 'door'";
    indicatorDoor.innerHTML = "Incorrect";
    indicatorDoor.style.color = "red";
    doorInput.style.borderColor = "red";
  }

  // Question 5
  if (handbrakeInput.value === "hand brake") {
    indicatorHandbrake.innerHTML = "Correct";
    indicatorHandbrake.style.color = "green";
    handbrakeInput.style.borderColor = "green";
    score++;
  } else {
    correctionHandbrake.innerHTML = "The correct answer is 'hand brake'";
    indicatorHandbrake.innerHTML = "Incorrect";
    indicatorHandbrake.style.color = "red";
    handbrakeInput.style.borderColor = "red";
  }

  // Display output
  scoreOutput.innerHTML = `${score}/5`;
  percentageOutput.innerHTML = `(${Math.round((score / 5) * 100)}%)`;

  if (score > 3) {
    feedbackOutput.innerHTML = "Great Job!";
  } else {
    feedbackOutput.innerHTML = "Keep learning about cars...";
  }
}
