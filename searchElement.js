const buttonSearch = document.getElementById("search-button");
const icon = document.getElementById("search-button-icon");
var rotated = false;

buttonSearch.addEventListener("click", () => {
  const searchBar = document.getElementById("search-bar");

  if (window.innerWidth <= 780) {
    animateRotationButtonResponsive();
    searchBar.addEventListener("input", (e) => {
      unselect()
      filterElements(e, "display: flex;", "display: none;")
      resizeGridSize();
    });
    
  } else {
    animateRotationButtonDefault();
    searchBar.addEventListener("input", (e) => {
      unselect()
      filterElements(e, "filter: ;", "filter: grayscale(90%)")
    });
  }
});

function resizeGridSize() {
  const searchBar = document.getElementById("search-bar");
  let activatedElements = 0;
  
  validElementsByText({
    textValue: searchBar.value,
    cbValid: () => {activatedElements++}
  })
  
  const grid = document.querySelector("#elements-blocks");
  console.log(grid.style.gridTemplateColumns)
  grid.style.gridTemplateColumns = `repeat(${activatedElements}, 80px)`;
}

function filterElements(e, styleActive, styleDesactived) {
  validElementsByText({
    textValue: e.target.value,
    cbValid: (elm) => {elm.style = styleActive}, 
    cbInvalid: (elm) => {elm.style = styleDesactived}
  });
}

function validElementsByText({textValue, cbValid = ()=>{}, cbInvalid = ()=>{}}) {
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
  const searchBar = document.getElementById("search-bar");
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
  const searchBar = document.getElementById("search-bar");

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