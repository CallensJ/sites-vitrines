const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallerie");

  fetch("./gallery.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement du JSON");
      }
      return response.json();
    })
    .then((images) => {
      images.forEach(({ src, alt }) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        galleryContainer.appendChild(img);
      });
    })
    .catch((error) => {
      console.error("Impossible de charger la galerie :", error);
    });
});
