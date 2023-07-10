var prevScrollPos = window.scrollY;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if(window.scrollY < 636) {
    document.getElementById("header-hover").style.transform = "translateY(-100%)";  
  }  
  if(prevScrollPos > currentScrollPos) {
    document.getElementById("main-header").style.opacity = "1";
    if(prevScrollPos > 636) {
      document.getElementById("header-hover").style.transform = "translateY(0)"
    }
  } else {
    if(prevScrollPos > 636) {
      document.getElementById("header-hover").style.transform = "translateY(-100%)"
    }
    document.getElementById("main-header").style.opacity = "0"
  }
  prevScrollPos = currentScrollPos;
}

var hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
  document.querySelectorAll("header, footer, main > *").forEach(element => {element.classList.toggle("dark-overlay")})
  document.querySelector(".hamburger-menu").classList.toggle("show")
  })
