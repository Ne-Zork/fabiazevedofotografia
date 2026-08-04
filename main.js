/* ============================================
   FABI AZEVEDO FOTOGRAFIA - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ==========================================
  // HEADER SCROLL EFFECT
  // ==========================================
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // MENU MOBILE TOGGLE
  // ==========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });

  // ==========================================
  // ANIMAÇÃO DE FADE-IN AO SCROLL
  // ==========================================
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // ==========================================
  // ANIMAÇÃO DOS NÚMEROS (CONTADOR)
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-item .numero');
  let animated = false;

  function animateNumbers() {
    if (animated) return;
    
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = Math.floor(current) + '+';
      }, 16);
    });

    animated = true;
  }

  // Observar seção de estatísticas
  const statsSection = document.querySelector('.estatisticas');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
        }
      });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  // ==========================================
  // SMOOTH SCROLL PARA LINKS INTERNOS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==========================================
  // BOTÃO WHATSAPP FLUTUANTE
  // ==========================================
  const whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
      window.open('https://wa.me/5511950308600?text=Olá! Gostaria de saber mais sobre os ensaios fotográficos.', '_blank');
    });
  }
});
