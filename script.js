document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    const hamburger = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');
    const backToTopButton = document.querySelector('.back-to-top');
    const themeSwitcher = document.getElementById('theme-switcher');

    // Preloader
    window.onload = function() {
        preloader.style.display = 'none';
    }

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active'); // For animation
        navMenu.classList.toggle('show-nav');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show-nav');
        });
    });

    // Back to Top Button
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Typing Animation
    const roles = ["Full Stack Java Developer", "Problem Solver", "Software Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    const typedTextSpan = document.getElementById("typed-text");

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typedTextSpan.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }

    if(typedTextSpan) {
       type();
    }

    // Theme Switcher
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitcher.textContent = '☀️';
        }
    }

    themeSwitcher.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        let theme = 'light-mode';
        if (document.documentElement.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeSwitcher.textContent = '☀️';
        } else {
            themeSwitcher.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });
});