const toggle = document.querySelector(".toggle-logo");
const background = document.querySelector(".imgfundositeimg");
const imggit = document.querySelector(".iconegithub");
const experiencias = document.querySelector(".experiencias ");
const labels = document.querySelectorAll(".conteudocolapsador ");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    background.style.filter = "invert(100%)";
    imggit.style.filter = "invert(100%)";
    experiencias.style.background = "black";
    labels.forEach((label) => {
      label.style.background = "rgb(233, 233, 233)";
    });
  } else {
    background.style.filter = "invert(0%)";
    imggit.style.filter = "invert(0%)";
    experiencias.style.background = "rgb(233, 233, 233)";
    labels.forEach((label) => {
      label.style.background = "rgb(233, 233, 233)";
    });
  }
});
