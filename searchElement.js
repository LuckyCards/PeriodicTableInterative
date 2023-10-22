var buttonSearch = document.getElementById("search-button");
var b = document.getElementById("search-button-icon");
var rotated = false;

buttonSearch.addEventListener("click", () => {
  let title = document.querySelector("h1");
  let searchBar = document.getElementById("search-bar");
  if (window.innerWidth <= 780) {
    if (!rotated) {
      b.style.transform = "rotateZ(180deg)";
      title.style.transform = "translateY(80px)";
      searchBar.style.transform = "translateY(0px)";
      rotated = true;
    } else {
      b.style.transform = "rotateZ(0deg)";
      title.style.transform = "translateY(0px)";
      searchBar.style.transform = "translateY(-80px)";
      searchBar.value = "";
      rotated = false;
    }
    searchBar.addEventListener("input", () => {
      let elements = document.querySelectorAll("#elements-blocks li");
      let searchText = searchBar.value.toLowerCase();

      elements.forEach((e) => {
        let text = e.textContent.toLowerCase();

        if (text.includes(searchText)) {
          e.style.display = "flex";
        } else {
          e.style.display = "none";
        }
      });
    });
  } else {
    if (!rotated) {
      b.style.transform = "rotateZ(180deg)";
      searchBar.style.transform = "scaleX(1)";
      rotated = true;
    } else {
      b.style.transform = "rotateZ(0deg)";
      searchBar.style.transform = "scaleX(0)";
      searchBar.value = "";
      rotated = false;
    }
    searchBar.addEventListener("input", () => {
      let elements = document.querySelectorAll("#elements-blocks li");
      let searchText = searchBar.value.toLowerCase();

      elements.forEach((e) => {
        let text = e.textContent.toLowerCase();

        if (text.includes(searchText)) {
          e.style.filter = "";
        } else {
          e.style.filter = "grayscale(90%)";
        }
      });
    });
  }
});
