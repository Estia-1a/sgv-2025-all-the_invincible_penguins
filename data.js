/**
 * @typedef {{ id: number, titre: string, annee: number, genres: string[], synopsis: string, prix: number, support: string, badge: string, gratuit: boolean, image: string, lecture: boolean }} Film
 */

const films = [
  {
    id: 1,
    titre: "Avatar",
    annee: 2009,
    genres: ["Sci-Fi"],
    synopsis:
      "Sur la lointaine planète de Pandora, Jake Sully, un ancien marine, infiltre le peuple Na'vi.",
    prix: 19.99,
    support: "BR",
    badge: "4K Ultra",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    lecture: true,
  },
  {
    id: 2,
    titre: "Titanic",
    annee: 1997,
    genres: ["Romance"],
    synopsis:
      "Une histoire d'amour naît entre Jack et Rose sur le paquebot maudit.",
    prix: 14.99,
    support: "DVD",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    lecture: true,
  },
  {
    id: 3,
    titre: "Le Roi Lion",
    annee: 1994,
    genres: ["Animation"],
    synopsis:
      "Le lionceau Simba doit reprendre son trône face à son oncle Scar.",
    prix: 10.0,
    support: "DVD",
    badge: "Gratuit",
    gratuit: true,
    image: "https://image.tmdb.org/t/p/w500/b0MxU37dNmMwKtoPVYPMPZwt586.jpg",
    lecture: true,
  },
  {
    id: 4,
    titre: "Avengers: Endgame",
    annee: 2019,
    genres: ["Action"],
    synopsis: "Le combat final contre Thanos.",
    prix: 25.0,
    support: "BR",
    badge: "4K",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    lecture: true,
  },
  {
    id: 5,
    titre: "Joker",
    annee: 2019,
    genres: ["Drame"],
    synopsis: "La descente aux enfers d'Arthur Fleck.",
    prix: 15.0,
    support: "BR",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    lecture: true,
  },
  {
    id: 6,
    titre: "Spider-Man",
    annee: 2002,
    genres: ["Action"],
    synopsis: "Peter Parker découvre ses pouvoirs.",
    prix: 12.0,
    support: "DVD",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/1qLJIQ729s0e8s3c3C6mH8v1F1p.jpg",
    lecture: true,
  },
  {
    id: 7,
    titre: "Reine des Neiges",
    annee: 2013,
    genres: ["Animation"],
    synopsis: "Libérée, délivrée...",
    prix: 12.0,
    support: "DVD",
    badge: "Gratuit",
    gratuit: true,
    image: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhJy13pXvQlfFAPn.jpg",
    lecture: true,
  },
  {
    id: 8,
    titre: "Inception",
    annee: 2010,
    genres: ["Sci-Fi"],
    synopsis: "Un vol dans les rêves.",
    prix: 15.0,
    support: "BR",
    badge: "4K",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    lecture: true,
  },
  {
    id: 9,
    titre: "Matrix",
    annee: 1999,
    genres: ["Sci-Fi"],
    synopsis: "La pilule rouge ou la bleue ?",
    prix: 10.0,
    support: "DVD",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    lecture: true,
  },
  {
    id: 10,
    titre: "Harry Potter",
    annee: 2001,
    genres: ["Fantastique"],
    synopsis: "L'école des sorciers.",
    prix: 18.0,
    support: "BR",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    lecture: true,
  },
  {
    id: 11,
    titre: "Gladiator",
    annee: 2000,
    genres: ["Péplum"],
    synopsis: "Force et honneur.",
    prix: 15.0,
    support: "BR",
    badge: "4K",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    lecture: true,
  },
  {
    id: 12,
    titre: "Shrek",
    annee: 2001,
    genres: ["Animation"],
    synopsis: "L'ogre et l'âne.",
    prix: 10.0,
    support: "DVD",
    badge: "Gratuit",
    gratuit: true,
    image: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqmWdQD.jpg",
    lecture: true,
  },
  {
    id: 13,
    titre: "Forrest Gump",
    annee: 1994,
    genres: ["Drame"],
    synopsis: "Cours Forrest !",
    prix: 12.0,
    support: "DVD",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    lecture: true,
  },
  {
    id: 14,
    titre: "Star Wars IV",
    annee: 1977,
    genres: ["Sci-Fi"],
    synopsis: "Que la force soit avec toi.",
    prix: 20.0,
    support: "BR",
    badge: "4K",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    lecture: true,
  },
  {
    id: 15,
    titre: "Toy Story",
    annee: 1995,
    genres: ["Animation"],
    synopsis: "Vers l'infini et au-delà.",
    prix: 12.0,
    support: "DVD",
    badge: "HD",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    lecture: true,
  },
  {
    id: 16,
    titre: "The Dark Knight",
    annee: 2008,
    genres: ["Action"],
    synopsis: "Batman vs Joker.",
    prix: 15.0,
    support: "BR",
    badge: "4K",
    gratuit: false,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    lecture: true,
  },
];

const getFilmById = (id) => films.filter((f) => f.id === id)[0];

const createMovieTile = (film) => {
  const { id, titre, badge, image } = film;
  const html = `
    <div class="media-card">
        <div class="media-visual">
            <span class="badge hd">${badge}</span>
            <img src="${image}">
        </div>
        <div class="media-info">
            <h3>${titre}</h3>
            <div class="card-actions">
                <a href="#info-1" class="btn-infos">+ Infos</a>
                <button class="btn-add-cart" onclick="ajouterFilmAuPanier(${id})">🛒</button>
            </div>
        </div>
    </div>`;
  return html;
};

/**
 * @param {Film} film
 * @returns
 */
const createMovieModal = (film) => {
  return `
        <div class="modal-box">
          <a href="#" class="close-cross">&times;</a>
          <div class="modal-flex">
            <img src="${film.image}" class="modal-poster">
              <div class="modal-content">
                <h2>${film.titre}</h2>
                  <div class="meta-tags">
                    <span class="tag">${film.annee}</span>
                    <span class="tag">${film.genres.join(", ")}</span>
                  </div>
                  
                  <p class="synopsis">
                    ${film.synopsis}
                  </p>
                  
                  <div class="actions-area">
                    <a href="#lecteur-video" class="btn-play">▶ Regarder</a>
                    <button class="btn-buy" onclick="ajouterFilmAuPanier(${
                      film.id
                    })">Ajouter (${film.prix}€)</button>
                  </div>
                </div>
              </div>
            </div>
  `;
};

/**
 *
 * @param {Film[]} films
 * @param {HTMLElement} container
 * @returns
 */
const addFullModal = (films, container) => {
  for (var film of films) {
    const div = document.createElement("div");
    div.id = `info-${film.id}`;
    div.classList.add("modal-overlay");
    div.innerHTML = createMovieModal(film);
    container.appendChild(div);
  }
};

/**
 *
 * @param {Film[]} films
 * @param {HTMLElement} container
 */
const addFullCatalog = (films, container) => {
  for (var film of films) {
    const div = document.createElement("div");
    div.classList.add("media-card");
    div.innerHTML = createMovieTile(film);
    container.appendChild(div);
  }
};
