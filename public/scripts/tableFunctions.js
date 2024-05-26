var getButtons = () => document.querySelectorAll(".button-filter");
var getButtonBackgrounds = () => document.querySelectorAll(".buttonBackground");
var button = "";
var buttonBackground = "";
var bSelected = "";
var bNotSelected = "";
const gridBlocks = document.getElementById("elements-blocks");
var filtered = false;

function getAllClass() {
  const buttons = getButtons();
  const classNames = [];
  for (var i = 0; i < buttons.length; i++) {
    classNames.push(buttons[i].dataset.classname);
  }

  return classNames;
}

function unselect() {
  filtered = false;
  getButtonBackgrounds().forEach((buttonBackground) => {
    buttonBackground.style.padding = "5px 0 0 0";
  });

  getAllClass().forEach((className) => {
    var elements = document.querySelectorAll("." + className);
    elements.forEach((element) => {
      element.style.filter = "";
      element.style.display = "flex";

      if (window.innerWidth <= 780) {
        gridBlocks.style.gridTemplateColumns = "repeat(118, 80px)";
      } else {
        gridBlocks.style.gridTemplateColumns =
          "repeat(3, 65px) 10px repeat(15, 65px)";
      }
    });
  })
}

function select(buttonSelected, buttonsNotSelected, buttonId) {
  unselect();
  button = document.getElementById(buttonId);
  buttonBackground = button.querySelector(".buttonBackground");
  bSelected = document.querySelectorAll("." + buttonSelected);
  bNotSelected = document.querySelectorAll(
    buttonsNotSelected.map((cls) => "." + cls).join(", ")
  );
  filtered = true;

  /* DESKTOP */
  if (window.innerWidth > 780) {
    bNotSelected.forEach((button) => {
      button.style.filter = "grayscale(90%)";
    });

    bSelected.forEach((button) => {
      button.style.filter = "brightness(110%)";
    });

    buttonBackground.style.padding = "50px 0 0 0";
  }

  /* MOBILE */
  if (window.innerWidth <= 780) {
    bNotSelected.forEach((button) => {
      button.style.display = "none";
    });
    gridBlocks.style.gridTemplateColumns =
      "repeat(" + bSelected.length + ", 80px)";
    buttonBackground.style.padding = "35px 0 0 0";
  }
}

var alternate = true;
window.addEventListener("resize", () => {
  /* DESKTOP */
  if (window.innerWidth > 780 && alternate == true) {
    gridBlocks.style.gridTemplateColumns =
      "repeat(3, 65px) 10px repeat(15, 65px)";
    alternate = false;
    document.querySelectorAll("#elements-blocks li").forEach((element) => {
      element.style.border = "3px solid rgba(0, 0, 0, 0.3)";
    });
    if (filtered == true) {
      unselect();
    }
  }

  /* MOBILE */
  if (window.innerWidth <= 780 && alternate == false) {
    gridBlocks.style.gridTemplateColumns = "repeat(118, 80px)";
    alternate = true;
    if (filtered == true) {
      unselect();
    }
    
  }
});
