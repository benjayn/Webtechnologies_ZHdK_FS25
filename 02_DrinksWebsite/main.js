const cards = document.querySelectorAll(".card");
const counter = document.querySelector(".counter");
let current = 0;

function showCard(index) {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");
  counter.textContent = `${index + 1} / ${cards.length}`;
}

document.querySelector(".arrow.left").addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});