function loadTestCode305() {
  if (!document.querySelector("body").classList.contains("spz_305")) {
    document.querySelector("body").classList.add("spz_305");
    document.querySelectorAll('.button.button-black').forEach((button) => {
      if (button.textContent.trim().includes('Start Free Trial')) {  
        button.textContent = 'Download Now';
      }
    });
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode305();
  }
}, 100);
