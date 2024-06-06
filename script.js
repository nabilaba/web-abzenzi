document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const navbarBackground = document.querySelector(".navbar-background");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbarBackground.classList.add("navbar-background-scroll");
      scrollToTopBtn.classList.add("fab-show");
    } else {
      navbarBackground.classList.remove("navbar-background-scroll");
      scrollToTopBtn.classList.remove("fab-show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var targetID = this.getAttribute("href").replace("#", "");
      document.getElementById(targetID).scrollIntoView({ behavior: "smooth" });
    });
  });
});
