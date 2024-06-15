const container = document.querySelector(".container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

const containerScroll = document.querySelector(".container");
let isDown = false;
let startX;
let scrollLeft;

containerScroll.addEventListener("mousedown", (e) => {
  isDown = true;
  containerScroll.classList.add("active");
  startX = e.pageX - containerScroll.offsetLeft;
  scrollLeft = containerScroll.scrollLeft;
});

containerScroll.addEventListener("mouseleave", () => {
  isDown = false;
  containerScroll.classList.remove("active");
});

containerScroll.addEventListener("mouseup", () => {
  isDown = false;
  containerScroll.classList.remove("active");
});

containerScroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - containerScroll.offsetLeft;
  const walk = (x - startX) * 1; // scroll-fast
  containerScroll.scrollLeft = scrollLeft - walk;
});
