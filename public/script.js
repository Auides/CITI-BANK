const menuBtn = document.getElementById('menu-button');
const mobileNav = document.querySelector('.mobile-menu');
const closeBtn = document.getElementById('close-button');
const signOnBtn = document.getElementById('sign-on-btn');
const signOnPage = document.querySelector('.sign-on');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    signOnPage.classList.remove('open');
})
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
})

signOnBtn.addEventListener('click', () => {
    signOnPage.classList.toggle('open');
    mobileNav.classList.remove('open');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
})