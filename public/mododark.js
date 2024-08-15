const toggle = document.querySelector(".toggle-logo");
const background = document.querySelector(".imgfundositeimg");
const imggit = document.querySelector(".iconegithub");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    background.style.filter = "invert(100%)";
    imggit.style.filter = "invert(100%)";
  } else {
    background.style.filter = "invert(0%)";
    imggit.style.filter = "invert(0%)";
  }
});
