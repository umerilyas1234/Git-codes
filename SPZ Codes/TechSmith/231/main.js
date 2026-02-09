function loadTestCode231() {
  if (!document.querySelector("body").classList.contains("spz_231")) {
    document.querySelector("body").classList.add("spz_231");
    setTimeout(() => {
      document.querySelector('.spz_231 #content .cards').insertAdjacentHTML('afterend','<div class="cards_outer"></div>');
      document.querySelector('.cards_outer').insertAdjacentElement('afterbegin', document.querySelector('.spz_231 #content .cards'));
      document.querySelector('.spz_231 .tsc-store-card-view .card-3 .license-features h3').textContent = "All Create features included plus:";
      document.querySelector('.spz_231 .tsc-store-card-view .card-2 .license-features h3').textContent = "All Essentials features included plus:";
      document.querySelector('.spz_231 .tsc-store-card-view .card-1 .license-features h3').textContent = " All Starter features included plus:";
    }, 200);
  }
}

var bodyInterval231 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval231);
    loadTestCode231();
  }
}, 100);
