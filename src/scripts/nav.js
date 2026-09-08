export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  const toggleNav = () => {
    const isOpen = navMenu.classList.contains("is-open");

    if (isOpen) {
      // Start closing animation
      navMenu.classList.remove("is-open");

      // Hide the menu after the animation finishes
      setTimeout(() => {
        navMenu.classList.remove("is-visible");
      }, 250);
    } else {
      // Make the menu visible first
      navMenu.classList.add("is-visible");

      // Start opening animation
      setTimeout(() => {
        navMenu.classList.add("is-open");
      }, 10);
    }
  };

  navButton.addEventListener('click', toggleNav);
  return () => navButton.removeEventListener('click', toggleNav);
}
