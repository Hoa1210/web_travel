// repos menu
const toggleOpen = document.querySelector('.open');
const toggleClose = document.querySelector('.close');
const toggleHeader = document.querySelector('header');
const toggleLogo = document.querySelector('.logo');
const toggleMenu = document.querySelector('.menu');

toggleOpen.onclick = function(){
    toggleOpen.classList.toggle('active');
    toggleClose.classList.toggle('active');
    toggleHeader.classList.toggle('active');
    toggleLogo.classList.toggle('active');
    toggleMenu.classList.toggle('active');
}
toggleClose.onclick = function(){
    toggleOpen.classList.toggle('active');
    toggleClose.classList.toggle('active');
    toggleHeader.classList.toggle('active');
    toggleLogo.classList.toggle('active');
    toggleMenu.classList.toggle('active');

}