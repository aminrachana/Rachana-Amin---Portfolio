
var menuToggle = document.querySelector(".menu-toggle");
menuToggle.onclick = toggleMenu;

function toggleMenu(){
  var menu = document.querySelector("#header-nav .menu");
  menu.classList.toggle("show-small"); 
}

