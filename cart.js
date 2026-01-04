let monPanier = JSON.parse(localStorage.getItem("panierManchot")) || [];

function changerPage(nomPage) {
  document.getElementById("page-accueil").style.display = "none";
  document.getElementById("page-catalogue").style.display = "none";
  document.getElementById("page-" + nomPage).style.display = "block";
}

/**
 *
 * @param {number} filmId
 */
function ajouterFilmAuPanier(filmId) {
  const film = getFilmById(filmId);
  ajouterAuPanier(film.titre, film.prix, film.type);
}

function ajouterAuPanier(titre, prix, type) {
  monPanier.push({ titre, prix, type });
  localStorage.setItem("panierManchot", JSON.stringify(monPanier));
  afficherPanier();
  alert(titre + " ajouté au panier !");
}

function afficherPanier() {
  updateCartWindow();
}

function supprimer(index) {
  monPanier.splice(index, 1);
  localStorage.setItem("panierManchot", JSON.stringify(monPanier));
  afficherPanier();
}

function validerPaiementJS() {
  if (monPanier.length === 0) {
    alert("Le panier est vide !");
    return;
  }
  alert("Paiement validé ! Merci pour votre achat.");
  monPanier = [];
  localStorage.setItem("panierManchot", JSON.stringify(monPanier));
  afficherPanier();
  window.location.hash = "#"; // Ferme la modale
}

window.onload = function () {
  afficherPanier();
};

function updateCartWindow() {
  const container = document.getElementById("cart-list-container");
  const totalEl = document.getElementById("cart-total");
  const badge = document.getElementById("nav-panier-count");
  badge.textContent = monPanier.length;

  const filmCost = document.getElementById("films-cost");
  const supportsCost = document.getElementById("supports-cost");
  const shippmentCost = document.getElementById("shippment-cost");
  let total = monPanier.reduce((pv, cv) => pv + cv.prix, 0);

  // Display cart is empty
  if (monPanier.length === 0) {
    container.innerHTML = "<p>Votre panier est vide.</p>";
    totalEl.textContent = "0.00 €";
    filmCost.innerText = "-,--€";
    supportsCost.innerText = "-,--€";
    shippmentCost.innerText = "-,--€";
    return;
  }

  // Update subtotal
  filmCost.innerText = `${total.toFixed(2)}€`;

  // Update total with shippment fees and supports cost
  if (monPanier.length > 0) {
    total += 3; // livraison
    total += monPanier.length * 10;
  }
  totalEl.textContent = total.toFixed(2) + " €";

  // Update supports consts
  supportsCost.innerText = `${monPanier.length} x 10,00€ = ${(
    monPanier.length * 10
  ).toFixed(2)}€`;

  // Update shippment fees
  let shippmentCostValue = 0;
  if (monPanier.length > 0) {
    shippmentCostValue = 3;
  }
  shippmentCost.innerText = `${shippmentCostValue.toFixed(2)}€`;

  container.innerHTML = monPanier
    .map(
      (item, index) => `
      <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
        <span>${item.titre}</span>
        <span>${item.prix}€ <button onclick="supprimer(${index})" style="color:red; background:none; border:none; font-weight:bold;">x</button></span>
      </div>`
    )
    .join("\n");
}
