document.addEventListener('DOMContentLoaded', () => {

    // 1. إخفاء الـ Preloader بعد التحيمل
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('loaded');
        });
        setTimeout(() => {
            preloader.classList.add('loaded');
        }, 2500);
    }

    // 2. تأثير التمرير للـ Header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. التنقل السلس بين الأقسام
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. زر البحث
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query !== '') {
                alert(`جاري البحث عن: ${query}`);
            } else {
                searchInput.focus();
            }
        });
    }

    // 5. زر الشراء / Buy Now
    const signinBtn = document.querySelector('.signin-btn');
    if (signinBtn) {
        signinBtn.addEventListener('click', () => {
            const contactSection = document.سgetElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});