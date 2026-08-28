/**
 * NAWENCE LTD — Official Corporate Script
 * Pure Vanilla JavaScript (ES6+), Lightweight, Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initCopyrightYear();
  initStickyHeader();
  initMobileNav();
  initScrollSpy();
  initContactForm();
  initCopyButtons();
  initReadinessChecklist();
  initAppTemplateModal();
});

/**
 * 1. Automatic Dynamic Year
 */
function initCopyrightYear() {
  const yearElements = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
}

/**
 * 2. Sticky Header with Backdrop Blur
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Mobile Navigation Drawer & ARIA
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const navLinks = document.querySelectorAll('.mobile-nav-links .nav-link, .mobile-nav-drawer .btn');

  if (!toggleBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * 4. ScrollSpy & Active Nav Link Highlighting
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}` || href === `index.html#${id}`) {
              link.classList.add('active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * 5. Contact Form with Mailto Link Generation & Direct Preview
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const officialEmail = 'YOUR OFFICIAL EMAIL'; // Central placeholder

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Enquiry for NAWENCE LTD';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      showToast('Please complete all required fields.', 'warning');
      return;
    }

    const emailBody = `Hello NAWENCE LTD Team,\n\n${message}\n\n---\nSender: ${name}\nContact Email: ${email}`;
    const mailtoUrl = `mailto:${encodeURIComponent(officialEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Try opening mail client
    window.location.href = mailtoUrl;

    showToast('Opening default email client...', 'success');
  });
}

/**
 * 6. Copy Buttons & Toast Notifications
 */
function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard!';
        showToast(label, 'success');
      }).catch(() => {
        // Fallback for older browsers
        const temp = document.createElement('textarea');
        temp.value = textToCopy;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast('Copied to clipboard!', 'success');
      });
    });
  });
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <span class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * 7. Google Play Readiness Interactive Checklist
 */
function initReadinessChecklist() {
  const checkboxes = document.querySelectorAll('.checklist-checkbox');
  const countEl = document.getElementById('readiness-count');
  if (!checkboxes.length || !countEl) return;

  function updateReadiness() {
    let checkedCount = 0;
    checkboxes.forEach((cb) => {
      if (cb.checked) checkedCount++;
    });
    countEl.textContent = `${checkedCount} / ${checkboxes.length} Verified`;
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener('change', updateReadiness);
  });
  updateReadiness();
}

/**
 * 8. App Showcase Code Template Helper
 */
function initAppTemplateModal() {
  const toggleBtn = document.getElementById('toggle-app-code-btn');
  const codeBlock = document.getElementById('app-code-snippet');
  if (!toggleBtn || !codeBlock) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = codeBlock.style.display === 'none' || codeBlock.style.display === '';
    if (isHidden) {
      codeBlock.style.display = 'block';
      toggleBtn.textContent = 'Hide Code Example';
    } else {
      codeBlock.style.display = 'none';
      toggleBtn.textContent = 'View How to Add Real Apps (HTML snippet)';
    }
  });
}
