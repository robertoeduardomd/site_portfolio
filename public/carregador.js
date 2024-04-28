document.addEventListener("DOMContentLoaded", function () {
  // Exibir o preloader quando o DOM estiver pronto
  document.querySelector(".preloader").style.display = "flex"; // Selecionando pela classe 'preloader'
});

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 800); // 2000 milissegundos = 2 segundos
});
