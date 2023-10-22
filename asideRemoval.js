const aside = document.querySelector("aside");
const main = document.querySelector("main");

function hideAside() {
  aside.classList.add("rmAside");
  main.classList.add("rmAside");
}

function showAside() {
  aside.classList.remove("rmAside");
  main.classList.remove("rmAside");
}