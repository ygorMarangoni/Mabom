const btnMobile = document.querySelector("#btn-mobile");
function menuOpen() {
  btnMobile.classList.toggle("active");
  const menuMobile = document.querySelector(".menu-mbl");
  menuMobile.classList.toggle("ativo");
}
btnMobile.addEventListener("click", menuOpen);
