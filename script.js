document.addEventListener("DOMContentLoaded", function () {

  const data = [
    { title: "Goblin", img: "images/Goblin.jpg" },
    { title: "True Beauty", img: "images/True Beauty.jpg" },
    { title: "12 Letters", img: "images/12 letters.jpg" },
    { title: "A Journey to You", img: "images/a journey to you.jpg" }
  ];

  const container = document.getElementById("cards");

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    // ✅ IMPORTANT: add data-name
    card.setAttribute("data-name", item.title);

    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="card-content">
        <h3>${item.title}</h3>
      </div>
      <button onclick="addToFav('${item.title}')">+ My List</button>
    `;

    container.appendChild(card);
  });

  // Favorites
  window.addToFav = function(name){
    const fav = document.getElementById('favorites');
    const item = document.createElement('p');
    item.textContent = name;
    fav.appendChild(item);
  };

  // Search
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      let name = card.getAttribute("data-name").toLowerCase();

      if (name.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

});