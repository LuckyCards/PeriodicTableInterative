var elementBlock = document.querySelector("#elements-blocks");
var elements = elementBlock.querySelectorAll("li");

async function getElement(s) {
  const elements = await fetch("./elementInfo.json").then((res) => res.json());
  const target = elements.find((e) => e.atomicSymbol === s);
  var info = document.getElementsByClassName("informations");
  info[0].innerHTML = target.elementName;
  info[1].innerHTML = target.elementClass;
  info[2].src = target.model3d;
  info[3].innerHTML = target.description;
  info[4].innerHTML = target.discoveredFor;
  info[5].innerHTML = target.discoveredIn;
  info[6].innerHTML = target.elementName;
  info[7].innerHTML = target.elementNameLatim;
  info[8].innerHTML = target.atomicNumber;
  info[9].innerHTML = target.atomicSymbol;
  info[10].innerHTML = target.averageAtomicMass;
  info[11].innerHTML = target.isRadioactive;
  info[12].innerHTML = target.electronConfiguration;
  info[13].innerHTML = target.group;
  info[14].innerHTML = target.period;
  info[15].src = target.locations2d;
  info[16].innerHTML = target.stateOfMatter;
  info[17].innerHTML = target.meltingPoint;
  info[18].innerHTML = target.boilingPoint;
  info[19].innerHTML = target.density;
  info[20].innerHTML = target.electronegativity;
  info[21].innerHTML = target.atomicRadius;
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
