document.addEventListener("DOMContentLoaded", function () {
  const plusBtns = document.querySelectorAll(".fa-plus-circle");
  const minusBtns = document.querySelectorAll(".fa-minus-circle");
  const trashBtns = document.querySelectorAll(".fa-trash-alt");
  const totalDisplay = document.querySelector(".total");
  const heartBtns = document.querySelectorAll(".fa-heart");

  // fUnction to recalculate the total price
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const price =
        parseFloat(card.querySelector(".unit-price").textContent) || 0;
      const quantity =
        parseInt(card.querySelector(".quantity").textContent) || 0;
      total += price * quantity;
    });

    totalDisplay.textContent = `${total.toLocaleString()}`;
  }

  // Increase quantity
  plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      const quantityEl = card.querySelector(".quantity");
      let quantity = parseInt(quantityEl.textContent) || 0;
      quantity++;
      quantityEl.textContent = quantity;
      updateTotal();
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      const quantityEl = card.querySelector(".quantity");
      let quantity = parseInt(quantityEl.textContent) || 0;
      if (quantity > 0) {
        quantity--;
        quantityEl.textContent = quantity;
        updateTotal();
      }
    });
  });

  trashBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      card.remove();
      updateTotal();
    });
  });

  updateTotal();

  heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    btn.style.color = btn.classList.contains("liked") ? "red" : "black";
  });
});
});


