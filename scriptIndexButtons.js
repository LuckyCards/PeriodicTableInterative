const allButtons = document.querySelectorAll(".button-filter");
var allClassButtons = Array.from(allButtons).map(
  (button) => button.dataset.classname
);
selected = "";

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonId = e.target.id;

    if (selected == buttonId) {
      unselect();
      selected = "";
      return;
    }
    const buttonSelected = e.target.dataset.classname;

    var buttonsNotSelected = allClassButtons.filter(
      (button) => button != buttonSelected
    );

    select(buttonSelected, buttonsNotSelected, buttonId);
    selected = buttonId;
  });
});
