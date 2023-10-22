var elementBlock = document.querySelector("#elements-blocks");
var elements = elementBlock.querySelectorAll("li");

async function getElement(s) {
  const elements = await fetch("./elements.json").then((res) => res.json());
  const target = elements.find((e) => e.symbol === s);
  var nameAtomic = document.getElementById("name-atomic-info");

  var latimNameAtomic = document.getElementById("latim-atomic-info");
  var classAtomic = document.getElementById("class-atomic-info");
  var descriptionAtomic = document.getElementById("description-atomic-info");
  var numberAtomic = document.getElementById("number-atomic-info");
  var symbolAtomic = document.getElementById("symbol-atomic-info");
  var weightAtomic = document.getElementById("weight-atomic-info");
  var groupAtomic = document.getElementById("group-atomic-info");
  var periodAtomic = document.getElementById("period-atomic-info");
  var discoveredFor = document.getElementById("discovered-for-info");
  var discoveredIn = document.getElementById("discovered-in-info");
  var modelAtomic3d = document.getElementById("viewer3d-info");

  nameAtomic.innerHTML = target.name;
  latimNameAtomic.innerHTML = target.latim;
  classAtomic.innerHTML = target.class;
  descriptionAtomic.innerHTML = target.description;
  numberAtomic.innerHTML = target.atomicNumber;
  symbolAtomic.innerHTML = target.symbol;
  weightAtomic.innerHTML =
    Math.ceil(parseFloat(target.atomicWeight) * 1000) / 1000;
  groupAtomic.innerHTML = target.group;
  periodAtomic.innerHTML = target.period;
  discoveredFor.innerHTML = target.discoveredFor;
  discoveredIn.innerHTML = target.discoveredIn;
  modelAtomic3d.src = target.model3d;
}

elements.forEach(function (e) {
  e.addEventListener("click", function () {
    showAside();
    if (window.innerWidth <= 780) {
      elements.forEach(function (s) {
        s.style.border = "3px solid rgba(0, 0, 0, 0.3)";
      });
      e.style.border = "3px solid white";
    }

    getElement(e.id);
  });
});
