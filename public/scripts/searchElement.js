const buttonSearch = document.getElementById("search-button");
const icon = document.getElementById("search-button-icon");
const searchBar = document.getElementById("search-bar");
var rotated = false;

buttonSearch.addEventListener("click", () => {
  if (window.innerWidth <= 780) {
    animateRotationButtonResponsive();
    unselect();
    searchBar.addEventListener("input", (e) => {
      unselect();
      filterElements(e, "display: flex;", "display: none;");
      resizeGridSize();
    });
  } else {
    animateRotationButtonDefault();
    unselect();
    searchBar.addEventListener("input", (e) => {
      unselect();
      filterElements(e, "filter: ;", "filter: grayscale(95%)");
    });
  }
});

function resizeGridSize() {
  let activatedElements = 0;

  validElementsByText({
    textValue: searchBar.value,
    cbValid: () => {
      activatedElements++;
    },
  });

  const grid = document.querySelector("#elements-blocks");

  grid.style.gridTemplateColumns = `repeat(${activatedElements}, 80px)`;
}

function filterElements(e, styleActive, styleDesactived) {
  validElementsByText({
    textValue: e.target.value,
    cbValid: (elm) => {
      elm.style = styleActive;
    },
    cbInvalid: (elm) => {
      elm.style = styleDesactived;
    },
  });
}

function validElementsByText({
  textValue,
  cbValid = () => {},
  cbInvalid = () => {},
}) {
  const searchText = textValue.toLowerCase();
  const elements = document.querySelectorAll("#elements-blocks li");
  elements.forEach((element) => {
    const text = element.textContent.toLowerCase();

    if (text.includes(searchText)) {
      cbValid(element);
    } else {
      cbInvalid(element);
    }
  });
}

function animateRotationButtonResponsive() {
  const title = document.querySelector("h1");

  if (!rotated) {
    icon.style.transform = "rotateZ(180deg)";
    title.style.transform = "translateY(80px)";
    searchBar.style.transform = "translateY(0px)";
    rotated = true;
  } else {
    icon.style.transform = "rotateZ(0deg)";
    title.style.transform = "translateY(0px)";
    searchBar.style.transform = "translateY(-80px)";
    searchBar.value = "";
    rotated = false;
  }
}

function animateRotationButtonDefault() {
  if (!rotated) {
    icon.style.transform = "rotateZ(180deg)";
    searchBar.style.transform = "scaleX(1)";
    rotated = true;
  } else {
    icon.style.transform = "rotateZ(0deg)";
    searchBar.style.transform = "scaleX(0)";
    searchBar.value = "";
    rotated = false;
  }
}
