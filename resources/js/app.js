const hambugerOpen = () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

hambugerOpen();
