document.addEventListener("DOMContentLoaded", function () {
  updateTotal();

  // Like button
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.classList.toggle("liked"); // Use CSS to change color when .liked is added
    });
  });

  // Delete button
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.closest(".cart-item");
      item.remove();
      updateTotal();
    });
  });

  // Plus button
  const plusButtons = document.querySelectorAll(".plus-btn");
  plusButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.closest(".cart-item");
      const qty = item.querySelector(".quantity");
      qty.value = parseInt(qty.value) + 1;
      updateTotal();
    });
  });

  // Minus button
  const minusButtons = document.querySelectorAll(".minus-btn");
  minusButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.closest(".cart-item");
      const qty = item.querySelector(".quantity");
      if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
        updateTotal();
      }
    });
  });

  function updateTotal() {
    let total = 0;
    const items = document.querySelectorAll(".cart-item");

    items.forEach((item) => {
      const price = parseFloat(item.querySelector(".item-price").textContent);
      const quantity = parseInt(item.querySelector(".quantity").value);
      total += price * quantity;
    });

    document.getElementById("total-price").textContent = total.toFixed(2);
  }
});
