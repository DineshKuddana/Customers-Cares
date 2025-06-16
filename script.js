const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const dropdowns = document.querySelectorAll('.dropbtn');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close dropdowns on outside click (mobile)
document.addEventListener('click', (e) => {
  dropdowns.forEach(btn => {
    const dropdownMenu = btn.nextElementSibling;
    if (!btn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});

// Toggle dropdown manually (for mobile)
dropdowns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownMenu = btn.nextElementSibling;
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
  });
});





// Banner






 function replayBannerAnimation() {
    const bannerText = document.getElementById('bannerText');
    bannerText.style.animation = 'none'; // remove animation
    bannerText.offsetHeight; // trigger reflow
    bannerText.style.animation = 'fadeInTranslate 1s ease-in-out'; // re-add animation
  }








//   Reviews


const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Auto slide
// setInterval(nextSlide, 6000);

// Swipe support
let startX = 0;

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextSlide();
  } else if (endX - startX > 50) {
    prevSlide();
  }
});






  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

