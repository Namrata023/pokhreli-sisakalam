document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    let currentIndex = 0;
    const items = document.querySelectorAll('.event-item');
    const lightbox = document.getElementById('lightbox');
    
    if (items.length > 1) {
        setInterval(() => {
            if (lightbox.style.display !== 'flex') {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].classList.add('active');
            }
        }, 5000);
    }

    const lightboxImg = document.getElementById('lightbox-img');
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const closeBtn = document.querySelector('.close-lightbox');

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    const alternates = document.querySelectorAll('.alternate-container');
    alternates.forEach(container => {
        const imgs = container.querySelectorAll('.alt-img');
        let currentAlt = 0;
        if (imgs.length > 0) {
            setInterval(() => {
                imgs[currentAlt].classList.remove('active');
                currentAlt = (currentAlt + 1) % imgs.length;
                imgs[currentAlt].classList.add('active');
            }, 3000);
        }
    });

    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        let currentSlide = 0;
        if (slides.length > 0) {
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 2500);
        }
    });

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});