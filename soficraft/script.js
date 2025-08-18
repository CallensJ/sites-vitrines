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
  gsap.registerPlugin(ScrollTrigger);

  // HERO : Texte + Image principale
  gsap.from(".hero .text-container", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
    }
  });

  gsap.from(".hero .hero-image", {
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
    }
  });

  // HERO : Aside images
  gsap.from(".hero aside .image", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".hero aside",
      start: "top 85%",
    }
  });

  // ABOUT : Texte + Image
  gsap.from(".about .container:first-child", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    }
  });

  gsap.from(".about .about-image", {
    x: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    }
  });

  // INTERSECTION
  gsap.from(".intersection", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".intersection",
      start: "top 85%",
    }
  });

  // GALLERY : Images avec effet stagger
  gsap.from(".gallerie img", {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".gallery",
      start: "top 85%",
    }
  });