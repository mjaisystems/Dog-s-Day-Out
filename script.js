document.addEventListener('DOMContentLoaded', () => {
  // --- Icon Initialization (redundant safeguard) ---
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Dynamic Year ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Update icon based on state (optional visual flair)
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
      } else {
        mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-7 h-7"></i>';
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // --- Smooth Scrolling & Link Handling ---
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Prevent default anchor behavior
      e.preventDefault();
      
      const href = link.getAttribute('href');
      
      // If it's a social link placeholder, do nothing
      if (link.classList.contains('social-link') && href === '#') {
        return;
      }
      
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-7 h-7"></i>';
        if (window.lucide) window.lucide.createIcons();
      }

      // Scroll to target
      if (href && href !== '#') {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } else if (href === '#') {
        // Scroll to top if href is just '#'
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate network request
      const btn = contactForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        successMessage.classList.remove('hidden');
        successMessage.classList.add('flex');
        
        // Reset after 5 seconds
        setTimeout(() => {
          contactForm.reset();
          successMessage.classList.add('hidden');
          successMessage.classList.remove('flex');
          contactForm.style.display = 'block';
          btn.textContent = originalText;
          btn.disabled = false;
        }, 5000);
      }, 1000);
    });
  }
});