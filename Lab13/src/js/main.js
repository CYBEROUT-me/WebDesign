// JavaScript для інтерактивності сторінки

// Функція для плавного скролу до секцій
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Якщо посилання не веде до конкретного елемента, пропускаємо
      if (href === '#' || href.length <= 1) {
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Функція для анімації появи елементів при скролі
function animateOnScroll() {
  const cards = document.querySelectorAll('.movie-card, .info-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  cards.forEach(card => {
    observer.observe(card);
  });
}

// Функція для активації поточного пункту меню
function highlightActiveMenu() {
  const sections = document.querySelectorAll('section[id]');
  const menuLinks = document.querySelectorAll('.menu__link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Функція для показу року в футері
function updateYear() {
  const yearElement = document.querySelector('.footer__text');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Світ Мультфільмів Disney. Лабораторна робота №13`;
  }
}

// Ініціалізація всіх функцій після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  animateOnScroll();
  highlightActiveMenu();
  updateYear();
  
  console.log('Сторінка завантажена успішно!');
  console.log('Gulp збірка працює коректно ✅');
});

// Додаткова функція для обробки кліків по картках
document.addEventListener('DOMContentLoaded', () => {
  const movieCards = document.querySelectorAll('.movie-card');
  
  movieCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Якщо клік не по посиланню
      if (!e.target.closest('a')) {
        const link = this.querySelector('.movie-card__link');
        if (link) {
          console.log('Вибрано мультфільм:', link.textContent);
        }
      }
    });
  });
});
