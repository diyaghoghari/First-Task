// --- grid-3/4/list ---

let card4 = document.querySelector(".grid-4");
let card3 = document.querySelector(".grid-3");
let card1 = document.querySelector(".grid-list");
let productRow = document.querySelector(".all-product-card");

card4.addEventListener("click", () => {
  productRow.classList.remove("row-cols-xxl-1");
  productRow.classList.add("row-cols-xxl-4");
});

card3.addEventListener("click", () => {
  productRow.classList.remove("row-cols-xxl-1");
  productRow.classList.remove("row-cols-xxl-4");
});

card1.addEventListener("click", () => {
  productRow.classList.add("row-cols-xxl-1");
  productRow.classList.remove("row-cols-xxl-4");
});