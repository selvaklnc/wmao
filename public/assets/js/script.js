document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const headerMenu = document.querySelector(".header");
  
    window.addEventListener("scroll", function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
  
      if (st > lastScrollTop) {
        headerMenu.style.transition = "opacity 0.3s ease";
        headerMenu.style.opacity = "0";
        headerMenu.style.pointerEvents = "none";
      } else {
        headerMenu.style.transition = "opacity 0.3s ease";
        headerMenu.style.opacity = "1";
        headerMenu.style.pointerEvents = "auto";
      }
      lastScrollTop = st <= 0 ? 0 : st; 
    });
  
    document.querySelectorAll("[data-link],[data-url]").forEach(function (el) {
      el.addEventListener("click", function () {
        let url = el.getAttribute("data-link") || el.getAttribute("data-url");
        if (url) {
          window.open(url, "_blank");
        }
      });
    });
  });
  


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
}

function closePopup() {
  document.getElementById("emailPopup").style.display = "none";
  setCookie("emailPopupClosed", "yes", 7);
}

document.addEventListener("DOMContentLoaded", function () {
  if (!getCookie("emailPopupClosed")) {
    setTimeout(function () {
      document.getElementById("emailPopup").style.display = "block";
    }, 4000);
  }
});

/*Open canvas*/
const openBtns = document.querySelectorAll(".open-canvas");
  const closeBtns = document.querySelectorAll(".close-canvas");
  const canvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");

  function openCanvas() {
    canvas.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  }

  function closeCanvas() {
    canvas.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }

  openBtns.forEach(btn => btn.addEventListener("click", openCanvas));
  closeBtns.forEach(btn => btn.addEventListener("click", closeCanvas));
  overlay.addEventListener("click", closeCanvas);

  /*data link*/
  document.querySelectorAll('[data-link],[data-url]').forEach(el => {
    el.addEventListener('click', () => {
      const url = el.dataset.link || el.dataset.url;
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
  