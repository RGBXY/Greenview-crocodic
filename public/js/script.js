document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const links = document.querySelectorAll(".heh");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      navbar.classList.add("bg-[#20323b]");
      navbar.classList.add("border-b-[3px]");
      navbar.classList.add("border-green-500");
      links.forEach((link) => {});
    } else if (window.scrollY <= 50) {
      navbar.classList.remove("bg-[#20323b]");
      navbar.classList.remove("border-b-[3px]");
      navbar.classList.remove("border-green-500");
      links.forEach((link) => {
        link.classList.add("text-white");
      });
    }
  });
});
