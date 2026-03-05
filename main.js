// --- Mobile Menu Toggle ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

if (mobileMenuBtn && mobileMenuOverlay && closeMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// --- Mobile Search Toggle ---
const mobileSearchToggle = document.querySelector('.mobile-search-toggle');
const mobileSearchContainer = document.querySelector('.mobile-search-container');
const mobileSearchInput = document.querySelector('.mobile-search-input');
if (mobileSearchToggle && mobileSearchContainer) {
  mobileSearchToggle.addEventListener('click', () => {
    if (mobileSearchContainer.style.display === 'none' || mobileSearchContainer.style.display === '') {
      mobileSearchContainer.style.display = 'block';
      if (mobileSearchInput) mobileSearchInput.focus();
    } else {
      mobileSearchContainer.style.display = 'none';
    }
  });
}

// --- Active link logic for desktop nav ---
document.querySelectorAll('.desktop-nav .nav-item').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.desktop-nav .nav-item').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// --- Navbar sticky and scroll behavior ---
const stickyWrapper = document.querySelector('.sticky-top-wrapper');
if (stickyWrapper) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      stickyWrapper.classList.add('scrolled');
    } else {
      stickyWrapper.classList.remove('scrolled');
    }
  });
}

// --- Existing Clock and Ticker logic below ---
// --- Live Clock ---
function updateClock() {
  const now = new Date();
  const banglaDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];

  function toBangla(num, pad) {
    return String(num).padStart(pad || 1, '0')
      .split('').map(d => banglaDigits[+d]).join('');
  }

  const days = ['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
  const months = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];

  const day = days[now.getDay()];
  const date = toBangla(now.getDate());
  const month = months[now.getMonth()];
  const year = toBangla(now.getFullYear());
  const hours = toBangla(now.getHours(), 2);
  const mins = toBangla(now.getMinutes(), 2);
  const secs = toBangla(now.getSeconds(), 2);

  const dateEl = document.getElementById('currentDate');
  const timeEl = document.getElementById('currentTime');
  if (dateEl) dateEl.textContent = `${day}, ${date} ${month} ${year}`;
  if (timeEl) timeEl.textContent = `${hours}:${mins}:${secs}`;
}
updateClock();
setInterval(updateClock, 1000);

// --- Ticker content duplication for seamless looping ---
const tickerContent = document.getElementById('tickerContent');
const noticeText = document.querySelector('.notice-text span');

if (tickerContent) {
  // Use a slight delay to ensure content is rendered before duplicating
  // This helps with width calculations if needed in the future
  tickerContent.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;' + tickerContent.innerHTML;
}

if (noticeText) {
  // The notice text already has some duplication in HTML, but let's ensure it's enough
  // and has proper spacing if it loops.
  if (!noticeText.innerHTML.includes('&nbsp;')) {
     noticeText.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;' + noticeText.innerHTML;
  }
}
