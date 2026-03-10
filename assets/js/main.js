const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

for (const node of document.querySelectorAll("[data-year]")) {
  node.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 }
);

for (const section of document.querySelectorAll(".reveal")) {
  observer.observe(section);
}
