AOS.init({
  once: true,
  duration: 800,
});

// Medium Feed
const mediumUsername = "mahbubfaisalrachamn";
const feedURL = `https://medium.com/feed/@${mediumUsername}`;
const apiURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  feedURL
)}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("articles-list");
    const articles = data.items.slice(0, 3);
    articles.forEach((article) => {
      const col = document.createElement("div");
      col.className = "col-md-6 mb-6";
      col.innerHTML = `
          <div class="card h-100 shadow-sm p-3 text-start">
            <h5 class="fw-bold text-center">${article.title}</h5>
            <p class="small text-center">${article.pubDate.split(" ")[0]}</p>
            <p>${article.description.slice(0, 422)}...</p>
          </div>`;
      container.appendChild(col);
    });
  })
  .catch((err) => {
    console.error("Failed to load Medium feed:", err);
    document.getElementById("articles-list").innerHTML =
      "<p>Gagal memuat artikel. Silakan cek kembali.</p>";
  });

// Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 80,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
  },
});
