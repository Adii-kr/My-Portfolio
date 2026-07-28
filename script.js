document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------------------------------------- */
  /* BACK-TO-TOP BUTTON */

  const backToTopBtn = document.querySelector(".back-to-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /* ------------------------------------------------------------------------------- */
  /* FOR MOBILE */

  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const allNavLinks = document.querySelectorAll(".nav-links a");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});
