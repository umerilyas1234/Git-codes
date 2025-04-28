//your code here when element is available
console.log('Time 1 > ' + new Date().getTime() / 1000);
function spz5004Test() {
  if (!document.querySelector('body').classList.contains('spz_5004')) {
    document.querySelector('body').classList.add('spz_5004');

    // Put your test code here
    if (document.querySelector('.spz_5004 > div.MuiBox-root.mui-0')) {
      document.querySelector('.spz_5004 > div.MuiBox-root.mui-0').insertAdjacentHTML('afterbegin', `
        <div class="header">
        </div>
      `);
    }
    document.querySelector('.header').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div:nth-of-type(1) >div:nth-of-type(2)'));
    if (document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 .header')) {
      document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 .header').insertAdjacentHTML('afterend', `
          <main class="main_container">
            <div class="hero">
              <div class="auto_container">
                <div class="hero_inner">
                  <div class="hero_left">
                    <h2>Short-Term Rental Data</h2>
                    <h3>
                      <span></span>
                      Airbnb and Vrbo data <br> from <strong></strong> properties
                    </h3>
                    <a href="#" class="custom_btn spz_5004_v1">Get property data</a>
                  </div>
                  <div class="hero_right">
                    <picture>
                      <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/hero-ui-360.webp">
                      <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/hero-ui-768.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/airdna/5004/hero-ui-1440.webp" alt="Hero image">
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div class="tabs_section">
              <div class="auto_container">
                <div class="tab_inner">
                  <div class="top-slider">
                    <div class="splide splidetop">
                      <div class="splide__track">
                        <ul class="splide__list">
                          <li class="splide__slide">
                            <div class="child">
                              <span class="sliderNav desktopOnly">
                                <b class="dynamic_city"></b> Overview
                              </span>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child first-child">
                              <span class="sliderNav desktopOnly">
                                Listing performance
                                </strong>
                              </span>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child">
                              <span class="sliderNav desktopOnly">
                                Occupancy
                              </span>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child">
                              <span class="sliderNav desktopOnly">
                                Revenue
                              </span>
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="child">
                              <span class="sliderNav desktopOnly">
                                Rates
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="bottom-slider">
                    <div class="splide splidebottom">
                      <div class="splide__track">
                        <ul class="splide__list">
                          <li class="splide__slide">
                            <div class="tab_data" id="tab1">
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="tab_data" id="tab2">
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="tab_data" id="tab3">
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="tab_data" id="tab4">
                            </div>
                          </li>
                          <li class="splide__slide">
                            <div class="tab_data" id="tab5"> 
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="review">
              <div class="auto_container">
                <div class="review_inner">
                  <div class="review_left">
                    <h3>Excellent</h3>
                    <div class="review_line">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/stars.svg" alt="review stars"><span><strong>4.8 </strong>  (687 reviews)</span>
                    </div>
                    <div class="trust_logo">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/trustpilot-logo.svg" alt="trustpilot logo">
                    </div>
                  </div>
                  <div class="review_right">
                    <div class="review_main">
                      <span>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/stars.svg" alt="review stars">
                      </span>
                      <p>“Gave me the visibility to make researched decisions on properties. The amount of data I was able to retrieve allowed me to make more educational decisions. Would recommend to anyone looking into STR.”</p>
                      <small>
                        <span><img src="//res.cloudinary.com/spiralyze/image/upload/v1743436718/airdna/5004/avatar.svg" alt="Jay"></span>
                        <strong>
                          <b>Jay</b>
                          Position, Company Name
                        </strong>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
      `);
    }
    document.querySelector('.hero_left').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div:nth-of-type(1) >div:nth-of-type(2)'));
    var cityValue = document.querySelector('.spz_5004 .hero_left h1 > span.MuiBox-root:nth-of-type(5)').innerText;
    var availableListings = document.querySelector('.spz_5004 > div.MuiBox-root.mui-0>div:nth-of-type(4) > .MuiGrid-root>div:first-child >.MuiBox-root>.MuiBox-root:last-child>p.MuiTypography-root').innerText;
    document.querySelector('.hero_left h3 span').innerText = cityValue;
    document.querySelector('.hero_left h3 strong').innerText = availableListings;
    document.querySelector(('.dynamic_city')).innerText = cityValue;
    document.querySelector('#tab1').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab2').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab3').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab4').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    document.querySelector('#tab5').insertAdjacentElement('afterbegin', document.querySelector('.spz_5004 > div.MuiBox-root.mui-0 > div:nth-of-type(3)'));
    console.log('Time 2 > ' + new Date().getTime() / 1000);
    // document.querySelector('.spz_5004 main')?.insertAdjacentHTML('afterbegin', `<section class="section_outer"></section>`);
    // document.querySelector('.spz_5004 main .section_outer')?.insertAdjacentElement('beforeend', document.querySelector('.spz_5004 main >section.hero_section'));
    // document.querySelector('.spz_5004 main .section_outer')?.insertAdjacentElement('beforeend', document.querySelector('.spz_5004 main >section.logo_section'));

    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
    document.head.appendChild(link);

    const loadJS = (url, implementationCode, location) => {
      var scriptTag = document.createElement('script');
      scriptTag.src = url;
      scriptTag.onload = implementationCode;
      scriptTag.onreadystatechange = implementationCode;
      location.appendChild(scriptTag);
    };
    loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js', function () {
      var splidetop = new Splide('.splidetop', {
        rewind: false,
        isNavigation: true,
        focus: 'center',
        autoplay: false,
        speed: 5,
        interval: 1000,
        pagination: false,
        perPage: 5,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,

      });
      var splidebottom = new Splide('.splidebottom', {
        perPage: 1,
        autoplay: false,
        speed: 500,
        interval: 1000,
        arrows: false,
        pagination: false,
        autoHeight: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        gap: '55px',
        focus: 'center',
      });
      // Pause auto slide on click

      setTimeout(function () {
        splidetop.mount();
        splidebottom.mount();
        splidebottom.sync(splidetop);
      }, 500);
      window.dispatchEvent(new Event('resize'));
    }, document.body);

    window.addEventListener('click', function (e) {
     
    });



    // need to check condition on page scroll.
    // let headerTimeout;
    // window.addEventListener('scroll', function () {
    //   this.clearTimeout(headerTimeout)
    //   headerTimeout = setTimeout(() => {
    //     if (document.querySelector('.spz_5004 a[aria-label="Go to homepage"] img')) {
    //       console.log('header changed');
    //       document.querySelector('.spz_5004 #header').classList.add('normalHeader');

    //       if (document.querySelectorAll('.header-logo-color').length === 0) {
    //         document.querySelector('.spz_5004 a[aria-label="Go to homepage"] img').insertAdjacentHTML('beforebegin', '<img class="header-logo-color" src="https://airdna-next.cdn.prismic.io/airdna-next/9a396ed9-3da8-49bd-9988-2ce5aed8c5aa_FooterLogo.svg?fit=max&w=384" alt="site logo">');
    //       }
    //     } else {
    //       document.querySelector('.spz_5004 #header')?.classList.remove('normalHeader');
    //       console.log('header not changed');
    //     }
    //   }, 100);
    // });
    // window.dispatchEvent(new Event('scroll'));

    // Button click animation
    document.querySelector('.custom_btn').addEventListener('mousedown', function (e) {
      // Click ripple animation - must be a unique selector
      const ripple = document.createElement('div');
      const rect = this.getBoundingClientRect();

      // Calculate the position and size of the ripple
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Add the ripple to the anchor
      this.appendChild(ripple);

      // Remove the ripple after animation ends
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  }
}


function removeTest() {
  document.querySelector('body').classList.remove('spz_5004');
  document.querySelector('.header-logo-color')?.remove();
  document.querySelector('main')?.insertAdjacentElement('afterbegin', document.querySelector('.original_hero'));
  document.querySelector('.original_hero > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div .MuiOutlinedInput-root label')?.remove();
  document.querySelector('.original_hero')?.classList.remove('original_hero');
  document.querySelector('.hero_section')?.remove();
  document.querySelector('.logo_section')?.remove();
  document.querySelector('.section_outer')?.remove();
}

const selector5004 = 'body > div:nth-of-type(1) >div:nth-child(2) h1';
function waitForElement(selector5004, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector5004);
    if (element) {
      resolve(element);
      return;
    }

    const interval = setInterval(() => {
      const element = document.querySelector(selector5004);
      if (element) {
        clearInterval(interval);
        resolve(element);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error(`Element not found: ${selector5004}`));
    }, timeout);
  });
}

function executeTest() {
  waitForElement(selector5004)
    .then((element) => {
      if (element) {
        spz5004Test();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Single page app URL change logic cover
let executeTimeout;
const targetUrl = "https://www.airdna.co/vacation-rental-data/app/us/california/santa-monica/overview";
let previousUrl = "";
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    if (location.href.split('?')[0].split('#')[0] === targetUrl) {
      clearTimeout(executeTimeout)
      executeTimeout = setTimeout(function () {
        executeTest();
      }, 800)
    } else {
      removeTest();
    }
    const tabButton = document.querySelector('[role="tablist"] > button:nth-child(2)');
    if (tabButton && tabButton.classList.contains("Mui-selected")) {
      location.reload();
    }
  }
});
const config = {
  subtree: true,
  childList: true
};
observer.observe(document, config);
