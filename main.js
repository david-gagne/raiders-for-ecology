/* ==================================
    HEADER BORDER BOTTOM ANIMATION
===================================== */
window.onscroll = function () {
    var header = document.getElementById('header');

    header.classList.add('border-bottom');

    if (window.scrollY === 0) {
        header.classList.remove('border-bottom');
    }
}