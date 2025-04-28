var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1737635647/techsmithcamtasia/222/src/styles.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1737635647/techsmithcamtasia/222/src/styles.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}
function loadTestCode222() {
  if (!document.querySelector("body").classList.contains("spz_222")) {
    document.querySelector("body").classList.add("spz_222");
    document.querySelector('.tsc-store-card-view').insertAdjacentHTML('afterend', `<div class="new_hero"></div>`);
    document.querySelector('.new_hero').insertAdjacentElement('afterbegin', document.querySelector('.product-nav-bar'));
    document.querySelector('.new_hero').insertAdjacentElement('beforeend', document.querySelector('.tsc-store-card-view'));
    document.querySelectorAll('.discount-price').forEach(price => {
      price.textContent = price.textContent.replace(/US/g, '');
    });

    if(document.querySelector('.SubscriptionPlan3 .full-price')){
      document.querySelector('.SubscriptionPlan3 .full-price').textContent = document.querySelector('.SubscriptionPlan3 .full-price').textContent.replace(/US/g, '');
    }
    if(document.querySelector('.new_hero .tsc-store-card-view .SubscriptionPlan2 .promo-indicator .indicator-content img')){
      var starImage = document.querySelector('.new_hero .tsc-store-card-view .SubscriptionPlan2 .promo-indicator .indicator-content img')
      starImage.src = "//res.cloudinary.com/spiralyze/image/upload/v1737631268/techsmithcamtasia/222/star-white.svg";
      starImage.alt = "star";
    }
  }
}

var bodyInterval222 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval222);
    loadTestCode222();
  }
}, 100);
