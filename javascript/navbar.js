let menu = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let menuOpen = false;

// Function to close the navbar
function closeNavbar() {
  menuOpen = false;
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
}

// Toggle menu and navbar on menu icon click
menu.onclick = () => {
  menuOpen = !menuOpen;
  menu.classList.toggle('bx-x', menuOpen);
  navbar.classList.toggle('open', menuOpen);
};

// Function to close navbar on resize
function closeNavbarOnResize() {
  const screenWidth = window.innerWidth;
  const threshold = 768;
  if (screenWidth > threshold && menuOpen) {
    closeNavbar();
  }
}
window.addEventListener('resize', closeNavbarOnResize);

// Event listener for menu options
let menuOptions = document.querySelectorAll('.menu-option');
menuOptions.forEach(option => {
  option.addEventListener('click', () => {
    closeNavbar(); // Close the navbar when a menu option is clicked
    // You can add additional actions here if needed
  });
});
