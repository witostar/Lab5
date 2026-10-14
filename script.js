let street = document.getElementById("street");
let train = document.getElementById("train");

street.volume = 0.5;
train.volume = 0.5;

function toggleStreet() {
  if (street.paused) {
    street.play();
  } else {
    street.pause();
  }
}

function toggleTrain() {
  if (train.paused) {
    train.play();
  } else {
    train.pause();
  }
}

function playBoth() {
  street.play();
  train.play();
}

function stopBoth() {
  street.pause();
  train.pause();
  street.currentTime = 0;
  train.currentTime = 0;
}

function updateLook() {
  if (street.paused) {
    document.getElementById("streetImg").style.opacity = 0.4;
    document.getElementById("streetImg").style.borderColor = "#1c1c33";
    document.getElementById("streetLabel").innerHTML = "Street Market";
  } else {
    document.getElementById("streetImg").style.opacity = 1;
    document.getElementById("streetImg").style.borderColor = "#ff4fa3";
    document.getElementById("streetLabel").innerHTML = "🔊 Street Market";
  }

  if (train.paused) {
    document.getElementById("trainImg").style.opacity = 0.4;
    document.getElementById("trainImg").style.borderColor = "#1c1c33";
    document.getElementById("trainLabel").innerHTML = "BTS Skytrain";
  } else {
    document.getElementById("trainImg").style.opacity = 1;
    document.getElementById("trainImg").style.borderColor = "#4fd8ff";
    document.getElementById("trainLabel").innerHTML = "🔊 BTS Skytrain";
  }
}

street.addEventListener("play", updateLook);
street.addEventListener("pause", updateLook);
train.addEventListener("play", updateLook);
train.addEventListener("pause", updateLook);

document.addEventListener("mousemove", function (event) {
  let x = event.clientX / window.innerWidth;

  street.volume = 1 - x;
  train.volume = x;

  document.getElementById("streetBox").style.width = (70 - x * 40) + "%";
  document.getElementById("trainBox").style.width = (30 + x * 40) + "%";

  let streetPercent = Math.round((1 - x) * 100);
  let trainPercent = 100 - streetPercent;
  document.getElementById("mix").innerHTML = "Mix: " + streetPercent + "% street / " + trainPercent + "% train";
});
