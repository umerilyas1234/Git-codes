var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1743070134/techsmithcamtasia/228/styles.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1743070134/techsmithcamtasia/228/styles.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}

function loadTestCode228() {
  function loadCode() {
    if (!document.querySelector("body").classList.contains("spz_228") && window.innerWidth > 1023) {
      document.querySelector("body").classList.add("spz_228");
      document.querySelector('.spz_228 .tsc-header > .logo-wrapper .logo img').src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/221/Logos-2x.png"

    } 
  }
  loadCode();
  window.addEventListener('resize', function () {
    loadCode();
  })
}

var bodyInterval228 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval228);
    loadTestCode228();
  }
}, 10);
