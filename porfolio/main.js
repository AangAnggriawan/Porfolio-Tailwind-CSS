// Humberger
const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");
humberger.addEventListener("click", () => {
  humberger.classList.toggle("humburger_active");
  navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Scroll
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1); // Mengambil id target
    const targetSection = document.getElementById(targetId);

    // Menggunakan smooth scroll untuk animasi
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
