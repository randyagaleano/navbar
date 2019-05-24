const hambugerOpen = () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            link.style.animation 
                ? link.style.animation = '' 
                : link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.75}s`;
        });

        hamburger.classList.toggle('toggle');
        
    })

}

hambugerOpen();
