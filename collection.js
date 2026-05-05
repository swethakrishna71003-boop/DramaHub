const dramas = [
  {
    title: "Goblin",
    genre: "Fantasy",
    story: "An immortal goblin seeks a bride.",
    img: "images/Goblin.jpg",
  },
  {
    title: "True Beauty",
    genre: "Romance",
    story: "A girl hides insecurities.",
    img: "images/True Beauty.jpg",
  },
  {
    title: "12 Letters",
    genre: "Time Travel",
    story: "A letter time travels between 1991 to 2026",
    img: "images/12 letters.jpg",
  },
  {
    title: "A Journey To You",
    genre: "Historical love",
    story: "A cold hearted female assassin how she fell in love with rebllious leader",
    img: "images/a journey to you.jpg",
  },
  {
    title: "Generation To Generation",
    genre: "Mystery love",
    story: "Love between a warrior and the demon son",
    img: "images/GENERATION TO GENERATION.jpg",
  },
  {
    title: "GenZ",
    genre: "Romance",
    story: "Love between a orphan girl and a great acupuncture legend's son ",
    img: "images/genZ.jpg",
  },
  {
    title: "It's Okay To Not Be Okay",
    genre: "Psychological and Romance",
    story: "A selfish girl fell in love a introvet boy",
    img: "images/Its Okay To Not Be Okay.jpg",
  },
  {
    title: "Love Between Fairy And Demon",
    genre: "Fantasy",
    story: "A fairy fell in love with a demon",
    img: "images/Love Between Fairy and Devil.jpg",
  },
  {
    title: "Love Game in Eastern Fantasy",
    genre: "Fantasy",
    story: "A boy fell in love with a girl who is a fairy",
    img: "images/Love Game in Eastern Fantasy Poster.jpg",
  },
  {
    title: "Our Generation",
    genre: "Romance",
    story: "A cute girl fell in love with her childhood introvet best friend",
    img: "images/our generation.jpg",
  },
  {
    title: "Pursuit of Jade",
    genre: "Historical Romance",
    story: "A normal girl fell in love with a great warrior general ",
    img: "images/Pursuit of Jade.jpg",
  },
  {
    title: "Speed and Love",
    genre: "Action Romance",
    story: "A racer loves his  cute step sister ",
    img: "images/speed and love.jpg",
  },
  {
    title: "The Last Immortal",
    genre: "Fantacy Romance",
    story: "A god fell in love with a Feenix Queen",
    img: "images/The Last Immortal.jpg",
  },
  {
    title: "Sword and Fairy 4",
    genre: "Romance",
    story: "A boy fell in love with a killer girl",
    img: "images/sword and fairy4.jpg",
  },
  {
    title: "When I Fly Towards You",
    genre: "school Romance",
    story: "A boy fell in love with a cute talkative girl",
    img: "images/when i fly towards you.jpg",
  },
  {
    title: "You Are My Desire",
    genre: "Romance",
    story: "A boy fell in love with a slient girl",
    img: "images/you are my desire.jpg",
  }
];

function getFav() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function isFav(t) {
  return getFav().some(d => d.title === t);
}

function toggleFavorite(d, el, e) {
  let fav = getFav();

  if (isFav(d.title)) {
    fav = fav.filter(x => x.title !== d.title);
  } else {
    fav.push(d);
  }

  localStorage.setItem("favorites", JSON.stringify(fav));

  el.classList.add("pop");
  setTimeout(() => el.classList.remove("pop"), 300);

  createHearts(e.clientX, e.clientY);

  load();
}

function createHearts(x, y) {
  for (let i = 0; i < 20; i++) {
    const h = document.createElement("span");
    h.innerText = "❤️";
    h.className = "floating-heart";
    h.style.left = x + "px";
    h.style.top = y + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1000);
  }
}

function load() {
  const c = document.getElementById("collectionContainer");
  const f = document.getElementById("favoritesContainer");

  c.innerHTML = "";
  f.innerHTML = "";

  const favs = getFav();

  dramas.forEach(d => {
    c.innerHTML += `
    <div class="card">
      <div class="card-img">
        <img src="${d.img}">
        <span class="heart"
          onclick='toggleFavorite(${JSON.stringify(d)}, this, event)'>
          ${isFav(d.title) ? "❤️" : "🤍"}
        </span>
      </div>
      <div class="card-content">
        <h3>${d.title}</h3>
        <p>${d.genre}</p>
        <small>${d.story}</small>
      </div>
    </div>`;
  });

  favs.forEach(d => {
    f.innerHTML += `
    <div class="card">
      <img src="${d.img}">
      <div class="card-content">
        <h3>${d.title}</h3>
      </div>
    </div>`;
  });
}

load();