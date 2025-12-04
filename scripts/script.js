
// Pak de toggle-knop (hamburger) en de nav
const toggleMenuButton = document.querySelector("header > button");
const nav = document.querySelector("header > nav");
const iconImg = toggleMenuButton.querySelector("img");

// Paden naar de twee iconen
const hamburgerIcon = "images/white-hamburger-menu-icon-24.jpg";
const closeIcon = "images/icons8-cross-50.png";

// Klik op dezelfde knop: open/sluit én wissel icoon
toggleMenuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");

  if (isOpen) {
    iconImg.src = closeIcon;
    iconImg.alt = "Sluit menu";
  } else {
    iconImg.src = hamburgerIcon;
    iconImg.alt = "Open menu";
  }
});