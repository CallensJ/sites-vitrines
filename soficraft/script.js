const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallerie");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

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
        img.addEventListener("click", () => {
          lightboxImg.src = src;
          lightboxImg.alt = alt;
          lightbox.style.display = "flex";
        });
        galleryContainer.appendChild(img);
      });
    })
    .catch((error) => {
      console.error("Impossible de charger la galerie :", error);
    });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
