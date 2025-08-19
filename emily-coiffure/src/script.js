const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('hidden') === false; // si 'hidden' vient d'être retiré
  menu.classList.toggle('flex', isOpen); // crucial: flex en mobile quand ouvert

  // accessibilité + icône
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.innerHTML = isOpen
    ? '<ion-icon name="close-outline" class="text-3xl"></ion-icon>'
    : '<ion-icon name="menu-outline" class="text-3xl"></ion-icon>';
});