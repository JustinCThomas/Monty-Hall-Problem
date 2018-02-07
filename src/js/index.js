let doors = document.getElementsByClassName('door');

let doorArray = [];

for (let i = 0; i < doors.length; i++) {
  doorArray.push({
    doorNumber: i + 1,
    prize: "N/A"
  });
}

init();

function init() {
  chooseCarDoor();
  addDoorEvents();
}

function chooseCarDoor() {
  let carDoorNumber = Math.floor(Math.random() * doors.length);

  for (let i = 0; i < doors.length; i++) {
    if (carDoorNumber === i) {
      doorArray[i].prize = "Car";
    } else {
      doorArray[i].prize = "Goat";
    }
  }
}

function addDoorEvents()  {
  for (let i = 0; i < doors.length; i++) {
    doors[i].addEventListener('click', function() {
      if (doorArray[i].prize === "Car") {
        console.log("You win a brand new car!");
      } else {
        console.log("So Sad, but you get to take home this goat!");
      }
    });
  }
}
