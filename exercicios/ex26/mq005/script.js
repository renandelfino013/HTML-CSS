let menu = document.getElementById("menu");

function abrirMenu() {
  if (menu.style.display == "none" || menu.style.display == "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
