console.log('3007-V2 loaded');

var testID = '3007',
  testClass3007 = 'spz_t' + testID;
var uiTestLoaded = false;
var bodyInterval = setInterval(function () {
  if (document.querySelector('body')) {
    clearInterval(bodyInterval)
    if (!document.querySelector('body').classList.contains(testClass3007)) {
      document.querySelector('body').classList.add(testClass3007);
      loadUiTest3007();
      load3007Test();
    }
  }
})
function load3007Test() {

  var footerTextElement = document.querySelector(".footer_section p");
  if (footerTextElement) {
    var footerText = footerTextElement.textContent;
    var updatedText = footerText.replace(/2023/g, "2024");
    footerTextElement.textContent = updatedText;
  }
}
function loadUiTest3007() {
  // Add Swiper for slider
  var script = document.createElement('script');
  var style = document.createElement('link');
  script.type = 'text/javascript';
  style.rel = 'stylesheet';
  script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  style.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
  document.head.appendChild(script);
  document.head.appendChild(style);
  var html = `
    <div class="g2-review-section v2">
            <div class="content-wrapper">
                <div class="review-wrapper">
                    <div class="g2-wrapper desktop">
                        <div class="review-img-wrapper">
                          <picture>
                            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1721037421/shipbob/3007/trustpilot_logo_5.svg"></source>
                            <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1721037411/shipbob/3007/trustpilot_logo_4.svg"></source>
                            <img class="g2-img1" alt="Trustpilot Logo" src="//res.cloudinary.com/spiralyze/image/upload/v1721037392/shipbob/3007/trustpilot_logo_3.svg" />
                          </picture>
                        </div>
                        <picture>
                          <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1721037421/shipbob/3007/trustpilot-stars_5.svg"></source>
                          <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1721037411/shipbob/3007/trustpilot-stars_4.svg"></source>
                          <img class="g2-img2" alt="Rating Star" src="//res.cloudinary.com/spiralyze/image/upload/v1721037088/shipbob/3007/trustpilot-stars.svg" />
                        </picture>
                        <p class="rating">TrustScore 4.3<span>(714 reviews)</span></p>
                    </div>
                    <div class="slider-parent">
                        <div id="splide" class=" splide splide slider-container">
                            <div class="splide__arrows">
                                <button class="splide__arrow splide__arrow--prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle opacity="0.1" cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 40 0)" fill="white"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0194 21.4142C17.2384 20.6332 17.2384 19.3668 18.0194 18.5858L21.9474 14.6578C22.2526 14.3526 22.2526 13.8578 21.9474 13.5526C21.6422 13.2474 21.1474 13.2474 20.8422 13.5526L15.809 18.5858C15.028 19.3668 15.028 20.6332 15.809 21.4142L20.8422 26.4474C21.1474 26.7526 21.6422 26.7526 21.9474 26.4474C22.2526 26.1422 22.2526 25.6474 21.9474 25.3422L18.0194 21.4142Z" fill="white"></path>
                                    </svg>
                                </button>
                                <button class="splide__arrow splide__arrow--next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <circle opacity="0.1" cx="20" cy="20" r="20" fill="white"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9806 21.4142C22.7616 20.6332 22.7616 19.3668 21.9806 18.5858L18.0526 14.6578C17.7474 14.3526 17.7474 13.8578 18.0526 13.5526C18.3578 13.2474 18.8526 13.2474 19.1578 13.5526L24.191 18.5858C24.972 19.3668 24.972 20.6332 24.191 21.4142L19.1578 26.4474C18.8526 26.7526 18.3578 26.7526 18.0526 26.4474C17.7474 26.1422 17.7474 25.6474 18.0526 25.3422L21.9806 21.4142Z" fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="splide__track">
                                <div class="splide__list">
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">We saved money on our carrier rates, increased operational efficiency, and decreased labor hours.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">AH</p>
                                                </div>
                                                <p class="author-name">Adam Higgins</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">A game-changer. ShipBob has not only streamlined our operations but also driven cost savings and growth.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">SA</p>
                                                </div>
                                                <p class="author-name">Savannah A.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">The most reliable 3PL. Everything is always shipped, packed on time. We've grown 30x from 300 to over 9,000 monthly orders with ShipBob.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">WP</p>
                                                </div>
                                                <p class="author-name">Wookie Park</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">We've used ShipBob for about 14 months, and have grown a lot during that time. They’ve really helped speed up deliveries. A huge win.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">MC</p>
                                                </div>
                                                <p class="author-name">Matt Crane</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">We've exceeded customer expectations with faster delivery times. Saves us time and ensures accuracy and reliability in every shipment.</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">AK</p>
                                                </div>
                                                <p class="author-name">Andrew King</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide spz-slide">
                                        <div class="spz-inner-slider">
                                            <div class="rating-wrapper">
                                                <img class="star-rating"  src="//res.cloudinary.com/spiralyze/image/upload/shipbob/4007/trustpilot-stars_1.svg" alt="5 Star">
                                            </div>
                                            <p class="review-text">ShipBob allowed us to fully automate our ecommerce business. It helped us focus strictly on marketing and growth, knowing that fulfillment was taken care of. Super helpful!</p>
                                            <div class="author-wrapper">
                                                <div class="author-text-wrapper">
                                                    <p class="author-text">LM</p>
                                                </div>
                                                <p class="author-name">Luke M.</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

  document.querySelector('.section-interface-hero').insertAdjacentHTML('afterend', html);


  getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", function () {
    var splide = new Splide('.splide', {
      perPage: 3,
      perMove: 1,
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      speed: 1000,
      interval: 5000,
      autoplayspeed: 2000,
      type: 'loop',
      breakpoints: {
        1199: {
          perPage: 1,
          perMove: 1,
        }
      }
    });
    splide.mount();

    // Function to stop the slider and set the flag
    function stopSlider() {
      splide.Components.Autoplay.pause(99)
    }

    // Function to resume the slider
    function resumeSlider() {
      splide.Components.Autoplay.play();
    }

    // Add event listeners to navigation arrows
    document.querySelectorAll('.g2-review-section .splide__pagination__page').forEach(arrow => {
      arrow.addEventListener('click', stopSlider);
    });

    // Add event listeners to testimonial cards
    document.querySelectorAll('.g2-review-section .splide__slide').forEach(slide => {
      slide.addEventListener('click', stopSlider);
    });



    // Pause the slider on hover and resume it when hover ends
    // var splideElement = document.querySelector('.splide');
    // splideElement.addEventListener('mouseenter', stopSlider);
    // splideElement.addEventListener('mouseleave', resumeSlider);

    // Intersection Observer to detect when the slider section comes into view
    const sliderSection = document.querySelector('.g2-review-section .splide');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          splide.Components.Autoplay.play(99)
          console.log('Slider section is in view');
        } else {
          console.log('Slider section is out of view');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    observer.observe(sliderSection);
  }
  );

  deskpagination();
  tabpagination();

  window.addEventListener('resize', function () {
    deskpagination();
    tabpagination();
  })

  function deskpagination() {
    var waitforelem = setInterval(function () {
      if (document.querySelector('.spz_t3007 .splide__pagination') && window.innerWidth >= 1200) {
        clearInterval(waitforelem)
        document.querySelector('.spz_t3007 .g2-review-section .g2-wrapper.desktop').insertAdjacentElement('beforeend', document.querySelector('.spz_t3007 .splide__pagination'));
      }
    })
  }
  function tabpagination() {
    var waitforelem = setInterval(function () {
      if (document.querySelector('.spz_t3007 .splide__pagination') && window.innerWidth < 1200 && !document.querySelector('.spz_t3007 .g2-wrapper .splide__pagination')) {
        clearInterval(waitforelem)
        document.querySelector('.spz_t3007 .splide__track').insertAdjacentElement('afterend', document.querySelector('.spz_t3007 .splide__pagination'));
      }
    })
  }

  function getScript(source, callback) {
    var el = document.createElement("script");
    el.onload = callback;
    el.src = source;
    document.body.appendChild(el);

  }
}



// TC 3003
(function () {
  var testID = '3003',
    testClass = 'spz_t' + testID;
  var uiTestLoadedNew = false;

  // Variation code

  if (!document.querySelector('body').classList.contains(testClass)) {
    document.querySelector('body').classList.add(testClass);
    initVar();
  }

  // For Homepage
  function initVar() {
    if (uiTestLoadedNew || !document.querySelector('section.section-interface-hero')) return;
    uiTestLoadedNew = true;

    if (window.location.pathname == "/") {
      // adding classes in targetted sections
      document.querySelector('section.section-interface-hero + section').classList.add("statsSection")
      document.querySelector('section.statsSection + section').classList.add("clientsSection")

      // Banner Changes
      document.querySelector('.section-interface-hero-container ul.is-style-blue-ticks li:nth-child(1)').innerHTML = `<strong>Order fulfillment services.</strong> Outsource warehousing, picking, packing, 2-day shipping, returns, customization, and more.`
      document.querySelector('.section-interface-hero-container ul.is-style-blue-ticks li:nth-child(2)').innerHTML = `<strong>Single, scalable partner.</strong> Single source of truth for inventory across warehouses. Track in real-time. Get alerts to refill stock.`
      document.querySelector('.section-interface-hero-container ul.is-style-blue-ticks li:nth-child(3)').innerHTML = `<strong>Award-winning technology.</strong> Integrate all sales channels and track inventory and orders in real time across fulfillment centers.`

      // Section 2
      document.querySelector('.spz_t3003 section.statsSection .value-prop:first-child .value-prop-subtitle').innerHTML = `<strong>Orders shipping <br>on time</strong>`
      document.querySelector('.spz_t3003 section.statsSection .value-prop:nth-child(2) .value-prop-subtitle').innerHTML = `<strong>Accuracy <br>rate</strong>`
      document.querySelector('.spz_t3003 section.statsSection .value-prop:nth-child(3) .value-prop-subtitle').innerHTML = `<strong>Fulfillment <br>centers</strong>`
      document.querySelector('.spz_t3003 section.statsSection .value-prop:nth-child(4) .value-prop-subtitle').innerHTML = `<strong>Best fulfillment <br>technology</strong>`
      document.querySelector('.spz_t3003 section.statsSection .value-prop:nth-child(3) .value-prop-content').innerHTML = `around the globe`

      // Section 3
      document.querySelector('.spz_t3003 section.statsSection').insertAdjacentHTML('afterend', `
        <section class="howItWorks">
          <div class="container">
            <div class="howItWorks__Heading">
              <div>
                <span>STREAMLINED FULFILLMENT</span>
                <h2>How it works</h2>
              </div>
              <p>From your online store<br> to your customer’s door</p>
            </div>
            <div class="steps">
              <div class="step">
                <picture>
                        <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__mobile__1.svg">
                        <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__tablet__1.svg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__desktop__1.svg" alt="step1">
                    </picture>
                    <div>
                  <h3>Step One</h3>
                  <p>Connect your store and sync your products in a couple clicks.</p>
                </div>
              </div>
              <div class="step">
                <picture>
                        <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__mobile__2.svg">
                        <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__tablet__2.svg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__desktop__2.svg" alt="step2">
                    </picture>
                    <div>
                  <h3>Step two</h3>
                  <p>Send us your inventory, and we'll help distribute it to your needs.</p>
                </div>
              </div>
              <div class="step">
                <picture>
                        <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__mobile__3.svg">
                        <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__tablet__3.svg">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon_container__desktop__3.svg" alt="step3">
                    </picture>
                    <div>
                  <h3>Step three</h3>
                  <p>Relax as we handle picking, packing, and shipping for you!</p>
                </div>
              </div>
            </div>
            <div class="cta_with_separator">
              <a href="https://www.shipbob.com/quote/" target="_self" class="bannerNewCTA">Get a quote</a>
            </div>
          </div>
        </section>
      `)

      // Section 3
      var serviceJSON = [
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-01.svg",
          "heading": "Inventory distribution",
          "serviceDescription": "Place inventory across different US regions via one hub, with automated replenishment."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-02.svg",
          "heading": "Order fulfillment",
          "serviceDescription": "Get best-in-class picking, packing, shipping, returns, and more across 50+ fulfillment centers."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-03.svg",
          "heading": "2-day shipping",
          "serviceDescription": "Offer 2-day shipping for all sales channels across the continental US."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-04.svg",
          "heading": "Customized unboxings",
          "serviceDescription": "Use branded packaging, inserts,  printed gift notes, and other kitting needs."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-01_1.svg",
          "heading": "Warehouse management",
          "serviceDescription": "Track inventory across warehouses in real time. Monitor stock levels. Reorder alerts."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-06.svg",
          "heading": "Global fulfillment",
          "serviceDescription": "Ship to 250+ destinations, with standard and expedited shipping options."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-07.svg",
          "heading": "Global expansion",
          "serviceDescription": "Leverage one partner to scale across the world for an optimized supply chain."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-08.svg",
          "heading": "B2B fulfillment",
          "serviceDescription": "Connect to retailers for automated EDI wholesale and retail fulfillment."
        },
        {
          "imageSrc": "//res.cloudinary.com/spiralyze/image/upload/shipbob/3003/icon-09.svg",
          "heading": "Integrations",
          "serviceDescription": "Fulfill orders from all ecommerce platforms, marketplaces, retailers, and social channels."
        },
      ]

      var serviceData = '';
      for (var x in serviceJSON) {
        serviceData += `
      <div class="service">
        <div class="serviceHeading">
          <img src="${serviceJSON[x].imageSrc}" alt="${serviceJSON[x].heading}">
          <h2>${serviceJSON[x].heading}</h2>
        </div>
        <p>${serviceJSON[x].serviceDescription}</p>
      </div>`;
      }
      document.querySelector('.spz_t3003 section.howItWorks').insertAdjacentHTML('afterend', `
      <section class="ourServices">
        <div class="container">
          <h3>ECOMMERCE FULFILLMENT SERVICES</h3>
          <h2>ShipBob is an end-to-end fulfillment provider trusted by thousands <br>of brands</h2>
          
          <div class="services">
            ${serviceData}
          </div>
        </div>
      </section>
      `)

      // Section 4
      document.querySelector('.spz_t3003 section.ourServices').insertAdjacentHTML('afterend', `
        <section class="partners">
          <div class="container">
            <h3 class="partnersTabletContent">annual report</h3>
            <h2 class="partnersTabletContent">Download ShipBob’s 2024 State of Ecommerce Fulfillment Report</h2>
            <div class="partnersDescription">
              <h3>annual report</h3>
              <h2>Download ShipBob’s 2024 State of Ecommerce Fulfillment Report</h2>
              <p>Access 70+ data points from ecommerce brands, such as:</p>
            
            <ul>
              <li>83% increased revenue in 2023.</li>
              <li>48% already sell on 3 or more sales channels.</li>
              <li>64% will add at least one new sales channel in 2024.</li>
              <li>21% will fulfill orders in a new country in 2024.</li>
              <li>27% always offer site-wide free shipping for domestic orders.</li>
              <li>In the US, 35% of all ecommerce orders and GMV are in 4 states: CA, TX, FL, and NY.</li>
            </ul>
            </div>
            <div class="partnersDisplay">
              <picture>
                <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/3003/report-complex_1.webp">
                      <source media="(max-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/3003/report-simple_1.webp">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/shipbob/3003/report-complex_1.webp" alt="Ecommerce Fulfillment Report">
                  </picture>
            </div>
            <div class="partnerCTA">
              <a href="https://resources.shipbob.com/state-of-order-fulfillment-report" class="learnMore">Get a copy today</a>
            </div>
          </div>
        </section>
      `)
    }
  }
})();