const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
let open = false;

btn.addEventListener('click', () => {
  open = !open;
  menu.classList.toggle('hidden');

  // changer l'icône
  btn.innerHTML = open 
    ? '<ion-icon name="close-outline" class="text-3xl"></ion-icon>'
    : '<ion-icon name="menu-outline" class="text-3xl"></ion-icon>';
});