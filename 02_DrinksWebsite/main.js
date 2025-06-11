const cards = document.querySelectorAll(".card");
const counter = document.querySelector(".counter");
let current = 0;

function showCard(index) {
  const currentCard = cards[current];
  const nextCard = cards[index];

  if (currentCard === nextCard) return;

  currentCard.classList.remove("active");
  nextCard.classList.add("active");

  current = index;
  counter.textContent = `${index + 1} / ${cards.length}`;
}

document.querySelector(".arrow.left").addEventListener("click", () => {
  const newIndex = (current - 1 + cards.length) % cards.length;
  showCard(newIndex);
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  const newIndex = (current + 1) % cards.length;
  showCard(newIndex);
});