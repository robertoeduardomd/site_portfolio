const toggle = document.querySelector(".toggle-logo");
const background = document.querySelector(".imgfundositeimg");
const imggit = document.querySelector(".iconegithub");
const experiencias = document.querySelector(".experiencias ");
const contcolapsador = document.querySelectorAll(".conteudocolapsador ");
const label = document.querySelectorAll(".label ");
const txtcolap = document.querySelectorAll(".txtcolapsador");
const clconhecer = document.querySelector(".clconhecer");
const girade = document.querySelector(".contem_coisa_gira_de");
const giradd = document.querySelector(".contem_coisa_gira_dd");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    background.style.filter = "invert(100%)";
    imggit.style.filter = "invert(100%)";
    experiencias.style.background = "black";
    clconhecer.style.color = "white";
    girade.style.background =
      "linear-gradient(150deg, transparent, transparent, transparent, transparent, transparent, transparent, rgb(1, 221, 118), rgb(1, 221, 118), rgb(1, 221, 118), rgb(1, 221, 118))";
    giradd.style.background =
      "linear-gradient(210deg, transparent, transparent, transparent, transparent, transparent, transparent, rgb(1, 221, 118), rgb(1, 221, 118), rgb(1, 221, 118), rgb(1, 221, 118))";

    contcolapsador.forEach((ctcolap) => {
      ctcolap.style.background = "black";
      ctcolap.style.border = "1px solid white";
    });

    label.forEach((lb) => {
      lb.style.border = "2px solid white";
    });
    txtcolap.forEach((txtcol) => {
      txtcol.style.color = "white";
    });
  } else {
    background.style.filter = "invert(0%)";
    imggit.style.filter = "invert(0%)";
    experiencias.style.background = "rgb(233, 233, 233)";
    clconhecer.style.color = "blue";
    girade.style.background =
      "linear-gradient(150deg, transparent, transparent, transparent, transparent, transparent, transparent, black, black, black, black)";
    giradd.style.background =
      "linear-gradient(210deg, transparent, transparent, transparent, transparent, transparent, transparent, black, black, black, black)";

    contcolapsador.forEach((ctcolap) => {
      ctcolap.style.background = "white";
      ctcolap.style.border = "none";
    });
    label.forEach((lb) => {
      lb.style.border = "none";
    });
    txtcolap.forEach((txtcol) => {
      txtcol.style.color = "black";
    });
  }
});
