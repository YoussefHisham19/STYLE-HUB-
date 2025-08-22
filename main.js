const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





const filterBtns = document.querySelectorAll("button[data-filter]");
const products = document.querySelectorAll(".product");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    products.forEach(product => {
      if (product.getAttribute("data-category") === filter || filter === "all") {
        product.style.display = "block"; // يظهر
      } else {
        product.style.display = "none";  // يختفي
      }
    });
  });
});


