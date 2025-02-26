function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

window.onscroll = () => {
    const topArrow = document.getElementById('top-arrow');
    topArrow.style.display = window.scrollY > 300 ? 'block' : 'none';
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
var swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Change to adjust visible cards
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
