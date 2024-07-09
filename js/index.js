
let menuIcon = document.querySelectorAll(".menu-btn");
let navDropdown = document.querySelectorAll(".social-medias");
let openIcon = document.querySelectorAll(".open-menu");
let closeIcon = document.querySelectorAll(".close-menu");

menuIcon.forEach((element, i) => {
  element.addEventListener("click", function (){
    navDropdown[i].classList.toggle("navactive")
    if (navDropdown[i].classList.contains("navactive")) {
        openIcon[i].style.display = "none"
        closeIcon[i].style.display = "block"
    }else if(!navDropdown[i].classList.contains("navactive")){
        openIcon[i].style.display = "block"
        closeIcon[i].style.display = "none"
    }
  })
});