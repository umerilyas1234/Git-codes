var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1736754788/techsmithcamtasia/309/src/styles.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1736754788/techsmithcamtasia/309/src/styles.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}
function loadTestCode309() {
  if (!document.querySelector("body").classList.contains("spz_309")) {
    document.querySelector("body").classList.add("spz_309");
    const heroCards = document.querySelectorAll('.spz_309 .hero-card');
    const logos = document.querySelectorAll('.section-logos-banner .logo-frame img');

    function updateImages() {
      heroCards[0].querySelector('.hero-card-header img').srcset = window.innerWidth < 768
        ? "//res.cloudinary.com/spiralyze/image/upload/v1737032617/techsmithcamtasia/309/snagit_360-2.jpg"
        : "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/309/snagit.webp";
      heroCards[1].querySelector('.hero-card-header img').srcset = window.innerWidth < 768
        ? "//res.cloudinary.com/spiralyze/image/upload/v1737032617/techsmithcamtasia/309/camtasia_360-2.jpg"
        : "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/309/camtasia.webp";

      // Update hero card titles
      heroCards[0].querySelector('.hero-card-title').innerHTML = "Looking for <br> simplicity and speed?";
      heroCards[1].querySelector('.hero-card-title').innerHTML = "Looking for more control <br> over your content?";

      // Update logo images
      const logoSources = [
        "apple_logo_2.svg", "microsoft_logo_2.svg",
        "google_logo_2.svg", "chase_logo_2.svg", "linkedin_logo_2.svg"
      ];
      const logoSourcesTwo = [
        "apple_logo_1.svg", "microsoft_logo_1.svg",
        "google_logo_1.svg", "chase_logo_1.svg", "linkedin_logo_1.svg"
      ];
      logos.forEach((logo, i) => {
        logo.srcset = `//res.cloudinary.com/spiralyze/image/upload/v1736273324/techsmithcamtasia/309/${logoSources[i]}`;
      });
      if (window.innerWidth < 1023) {
        logos.forEach((logo, i) => {
          logo.srcset = `//res.cloudinary.com/spiralyze/image/upload/v1736273324/techsmithcamtasia/309/${logoSourcesTwo[i]}`;
        });
      }
    }
    heroCards[1].querySelector('.hero-card-ctas .button-black').textContent = "Try Camtasia Now";
    updateImages();
    window.addEventListener('resize', () => {
      updateImages();
    });
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode309();
  }
}, 50);
