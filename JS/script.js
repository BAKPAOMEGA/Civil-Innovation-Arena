// Toggle class active
const menu = document.querySelector(".menu");
// Ketika menu di klik
document.querySelector("#list").onclick = (e) => {
  e.preventDefault(); // Mencegah href
  menu.classList.toggle("active");
};

// tutup menu ketika klik diluar menu
document.addEventListener("click", function (e) {
  if (
    !menu.contains(e.target) &&
    !document.querySelector("#list").contains(e.target)
  ) {
    menu.classList.remove("active");
  }
});
