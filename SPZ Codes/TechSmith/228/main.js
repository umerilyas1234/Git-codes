function loadTestCode228() {
  function loadCode() {
    if (!document.querySelector("body").classList.contains("spz_228") && window.innerWidth > 1023) {
      document.querySelector("body").classList.add("spz_228");

    } else if (window.innerWidth <= 1023) {
      if (document.querySelector("body.spz_228")) {
        document.querySelector("body").classList.remove("spz_228");
      }
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
