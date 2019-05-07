/*jshint esversion: 6 */
class Menu{
  constructor(menu){
    this.menuButton = this.menu.querySelector(".menu-button");
    // this.menuOpen = this.menu.querySelector(".menu--open");
    this.menuButton.addEventListener("click", () => this.toggleMenu());
  }
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  this.menuButton.classList.toggle("menu--open");

  }
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll(".menu");
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll(".menu-button");
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu





menuButton.addEventListener("click", () => this.toggleMenu());
