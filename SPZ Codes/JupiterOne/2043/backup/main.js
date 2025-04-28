var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href =
  "//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/2043/src/styles.css";
if (
  !document.querySelector(
    'link[href="//res.cloudinary.com/spiralyze/raw/upload/JupiterOne/2043/src/styles.css"]'
  )
) {
  document.getElementsByTagName("head")[0].appendChild(link);
}

function loadTestCode2043() {
  if (!document.querySelector("body").classList.contains("spz_t2043")) {
    document.querySelector("body").classList.add("spz_t2043");
    setTimeout(() => {
      if(document.querySelector('.home-hero .home-hero-title')){
        document.querySelector('.home-hero .home-hero-title').insertAdjacentHTML('afterend', `
          <div class="animated_textContainer">
            <strong>Streamline </strong>
            <div class="content">
              <ul class="content__list">
                <li class="content__list__item">Asset Visibility</li>
                <li class="content__list__item">Asset  Monitoring</li>
                <li class="content__list__item">Alerting</li>
                <li class="content__list__item">Remediation</li>
                <li class="content__list__item">Risk Prioritization</li>
                <li class="content__list__item">Compliance</li>
                <li class="content__list__item">Evidence Collection </li>
              </ul>
            </div>
          </div>
        `);
      }
      
      if (window.innerWidth < 768) {
        document.querySelector('.home-hero .star-reviews .hero-review-wrapper.hero-review-left-spacing .hero-review-star-mobile').src = "//res.cloudinary.com/spiralyze/image/upload/v1719426258/JupiterOne/2043/review_star_mobile.svg";
      }
      
      if(document.querySelector('.home-hero .hero-btn-wrapper')){
        var logoSlider = document.querySelector('.client-logo-slider');
        document.querySelector('.home-hero .hero-btn-wrapper').insertAdjacentElement('afterend', logoSlider);
        
        // Initialize slider
        
        var newClientLogo = new Splide('.home-hero .hero-inner-content .company-logo-slider', {
          type: 'loop',
          autoWidth: true,
          arrows: false,
          pagination: false,
          focus: 'center',
          drag: false,
          speed: 60000,
          easing: 'linear',
          waitForTransition: true,
          autoplay: true,
          interval: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
        });
        newClientLogo.mount();
        
      }
      // Initialize slider
      // document.querySelector('.client-logo-slider .splide__list .splide__slide:not(:first-child)').remove();
      // const clientLogoToClone = document.querySelector('.company-logo-slider .splide__slide');
      // const clonedClientSlide = clientLogoToClone.cloneNode(true);
      // clientLogoToClone.after(clonedClientSlide);

    }, 500);

    document.querySelector('main').insertAdjacentHTML('beforebegin', '<div class="main_wrapOuter"></div>');
    var mainSection = document.querySelector('#main-wrapper');
    document.querySelector('.main_wrapOuter').insertAdjacentElement('afterbegin', mainSection);
    
  }
}

var bodyInterval = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval);
    loadTestCode2043();
  }
}, 100);
