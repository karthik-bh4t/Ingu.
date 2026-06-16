document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Steam Particles Animation
  const initSteam = () => {
    const container = document.getElementById('steam-container');
    if (!container) return;

    // Generate 3 steam particles
    for (let i = 0; i < 3; i++) {
      createSteamParticle(container, i);
    }
  };

  const createSteamParticle = (parent, index) => {
    const particle = document.createElement('div');
    particle.className = 'steam-particle';
    
    // Set random widths, heights, left offsets, and animation delays
    const size = Math.random() * 40 + 20; // 20px to 60px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 80 + 10}%`; // 10% to 90%
    particle.style.animationDelay = `${index * 2.5 + Math.random() * 1.5}s`;
    particle.style.animationDuration = `${6 + Math.random() * 2}s`;
    
    parent.appendChild(particle);
  };

  initSteam();

  // 2. Intersection Observer for Entrance Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Special case: Staggered entrance for Vaadappa title letters
        if (entry.target.classList.contains('vaadappa-content')) {
          staggerVaadappaTitle();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Register elements to watch
  document.querySelectorAll('.scroll-animate').forEach(el => {
    animationObserver.observe(el);
  });

  const staggerVaadappaTitle = () => {
    const spans = document.querySelectorAll('.vaadappa-title span');
    spans.forEach((span, index) => {
      span.style.transitionDelay = `${index * 40}ms`;
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    });
  };

  // 3. Menu Filtering & Dots Indicator System
  const carousel = document.getElementById('menu-carousel');
  const dotsContainer = document.getElementById('menu-dots');
  const tabButtons = document.querySelectorAll('.tab-btn');
  let visibleCards = [];

  const updateVisibleCards = (category) => {
    const cards = carousel.querySelectorAll('.menu-card');
    visibleCards = [];
    
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });
    
    setupDots();
    updateActiveDot();
  };

  const setupDots = () => {
    dotsContainer.innerHTML = '';
    
    // Create dots based on visible items
    visibleCards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `menu-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      
      dot.addEventListener('click', () => {
        const targetCard = visibleCards[index];
        if (targetCard) {
          carousel.scrollTo({
            left: targetCard.offsetLeft - carousel.offsetLeft,
            behavior: 'smooth'
          });
        }
      });
      
      dotsContainer.appendChild(dot);
    });
  };

  const updateActiveDot = () => {
    const dots = dotsContainer.querySelectorAll('.menu-dot');
    if (dots.length === 0) return;

    // Calculate current scroll index
    const scrollLeft = carousel.scrollLeft;
    const carouselWidth = carousel.clientWidth;
    
    let activeIndex = 0;
    let minDistance = Infinity;

    visibleCards.forEach((card, index) => {
      const cardOffset = card.offsetLeft - carousel.offsetLeft;
      const distance = Math.abs(cardOffset - scrollLeft);
      
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  // Attach listener to scroll to update dots dynamically
  carousel.addEventListener('scroll', () => {
    // Debounce dot update on scroll
    requestAnimationFrame(updateActiveDot);
  });

  // Attach tab click events
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-category');
      updateVisibleCards(category);
    });
  });

  // Init default cards filter
  updateVisibleCards('all');

  // 4. Original Menu Lightbox Modal
  const modal = document.getElementById('menu-modal');
  const openBtn = document.getElementById('open-menu-modal');
  const closeBtn = document.getElementById('close-menu-modal');

  if (modal && openBtn && closeBtn) {
    const openModal = () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 5. 3D perspective scroll tilt animation (Aceternity UI ContainerScroll clone)
  const initContainerScroll = () => {
    const section = document.getElementById('vaadappa-spotlight');
    const header = document.querySelector('.container-scroll-header');
    const card = document.querySelector('.container-scroll-card');
    
    if (!section || !header || !card) return;
    
    const checkMobile = () => window.innerWidth <= 768;
    
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) when section is within viewport
      const totalDist = viewportHeight + rect.height;
      const currentDist = viewportHeight - rect.top;
      
      let progress = currentDist / totalDist;
      progress = Math.max(0, Math.min(1, progress));
      
      // Map progress [0, 1] to rotateX [20, 0] degrees
      const rotateX = 20 - (progress * 20);
      
      // Map progress [0, 1] to scale:
      // Mobile: [0.7, 0.9]
      // Desktop: [1.05, 1.0]
      const isMobile = checkMobile();
      const scaleStart = isMobile ? 0.7 : 1.05;
      const scaleEnd = isMobile ? 0.9 : 1.0;
      const scale = scaleStart + (progress * (scaleEnd - scaleStart));
      
      // Map progress [0, 1] to translateY: [0, -100] pixels
      const translateY = progress * -100;
      
      // Apply transforms
      card.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
      header.style.transform = `translateY(${translateY}px)`;
    };
    
    // Bind to events
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
  };
  
  initContainerScroll();
});
