var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1739222459/techsmithcamtasia/221/src/styles.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1739222459/techsmithcamtasia/221/src/styles.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}

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

function loadTestCode221() {
  if (!document.querySelector("body").classList.contains("spz_221")) {
    document.querySelector("body").classList.add("spz_221");

    document.querySelector('.spz_221 .tsc-header > .logo-wrapper .logo img').src = "//res.cloudinary.com/spiralyze/image/upload/v1738671699/techsmithcamtasia/221/Logos.svg"
    document.querySelector('.tsc-store-card-view').insertAdjacentHTML('afterend', `
      <div class="new_hero">
        <div class="reviews">
          <div class="review_data">
            <b>Best video recording tool</b>
            <small>
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1737506672/techsmithcamtasia/221/g2_logo_plus_stars_13.svg" alt="Rating stars">
              <span><b>4.6 </b> (1,524 reviews)</span>
            </small>
          </div>
        </div>
        <div class="main_heading">
          <h1>Compare Camtasia Plans</h1>
        </div>
      </div>`);
    document.querySelector('.new_hero').insertAdjacentElement('beforeend', document.querySelector('.product-nav-bar'));
    document.querySelector('.new_hero').insertAdjacentElement('beforeend', document.querySelector('.tsc-store-card-view'));
    document.querySelectorAll('.discount-price').forEach(price => {
      price.textContent = price.textContent.replace(/US/g, '');
    });
    // document.querySelectorAll('#wrapper .region .cards .card .pricing-group .billing-schedule').forEach(item => {
    //   item.textContent = "billed annually";
    // });

    // Function to update the title of a subscription plan
    function updateTitle(planClass, title) {
      if (document.querySelector(`${planClass} .header .title`)) {
        document.querySelector(`${planClass} .header .title`).textContent = title;
      }
    }

    // Function to insert products HTML after the pricing group
    function insertProducts(planClass, productsHTML) {
      if (document.querySelector(`${planClass} .pricing-group`)) {
        document.querySelector(`${planClass} .pricing-group`).insertAdjacentHTML('afterend', productsHTML);
      }
    }

    // Function to move an element within a plan
    function moveElement(planClass, elementSelector, position) {
      if (document.querySelector(`${planClass} ${elementSelector}`)) {
        const element = document.querySelector(`${planClass} ${elementSelector}`);
        document.querySelector(planClass).insertAdjacentElement(position, element);
      }
    }

    // Function to update the license features heading
    function updateLicenseFeatures(planClass, text) {
      if (document.querySelector(`${planClass} .license-features h3`)) {
        document.querySelector(`${planClass} .license-features h3`).textContent = text;
      }
    }

    // Update titles
    updateTitle('.SubscriptionPlan1', 'Essentials');
    updateTitle('.SubscriptionPlan2', 'Create');
    updateTitle('.SubscriptionPlan3', 'Pro');

    // Insert products
    insertProducts('.SubscriptionPlan1', `
      <div class="my_products">
        <label>Products:</label>
        <ul>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/221/camtasia_mark.webp" alt="camtasia">
              <strong>Video Recording</strong>
            </div>
          </li>
        </ul>
      </div>
    `);

    insertProducts('.SubscriptionPlan2', `
      <div class="my_products">
        <label>Products:</label>
        <ul>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/221/camtasia_mark.webp" alt="camtasia">
              <strong>Video Recording</strong>
            </div>
          </li>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1737506601/techsmithcamtasia/221/speech_to_tx_logo_3.svg" alt="speech-to-text">
              <strong>Speech-to-text Transcription</strong>
            </div>
          </li>
        </ul>
      </div>
    `);

    insertProducts('.SubscriptionPlan3', `
      <div class="my_products">
        <label>Products:</label>
        <ul>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/techsmithcamtasia/221/camtasia_mark.webp" alt="camtasia">
              <strong>Video Recording</strong>
            </div>
          </li>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1737506601/techsmithcamtasia/221/speech_to_tx_logo_3.svg" alt="speech-to-text">
              <strong>Speech-to-text Transcription</strong>
            </div>
          </li>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1737506609/techsmithcamtasia/221/video_hosting_2.svg" alt="video hosting">
              <strong>Video Hosting</strong>
            </div>
          </li>
          <li>
            <div class="product_data">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1737506640/techsmithcamtasia/221/stock_assets_icon.svg" alt="Stock Assets">
              <strong>Stock Assets</strong>
            </div>
          </li>
        </ul>
      </div>
    `);

    // Move elements and update license features
    moveElement('.SubscriptionPlan2', '.indicator-content', 'afterbegin');
    updateLicenseFeatures('.SubscriptionPlan2', 'Everything in Essentials, plus...');

    moveElement('.SubscriptionPlan3', '.special-pricing-indicator', 'afterbegin');
    updateLicenseFeatures('.SubscriptionPlan3', 'Everything in Create, plus...');

    if (document.querySelector('.SubscriptionPlan3 .billing-schedule')) {
      document.querySelector('.SubscriptionPlan3 .billing-schedule').insertAdjacentElement('afterbegin', document.querySelector('.SubscriptionPlan3 .full-price'));
    }

    if (document.querySelector('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-container')) {
      document.querySelector('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-btn.decrease img').src = "//res.cloudinary.com/spiralyze/image/upload/v1737506830/techsmithcamtasia/221/minus_1.svg";
      document.querySelector('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-btn.decrease img').alt = "decrease";
      document.querySelector('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-btn.increase img').src = "//res.cloudinary.com/spiralyze/image/upload/v1737506831/techsmithcamtasia/221/plus_1.svg";
      document.querySelector('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-btn.increase img').alt = "increase";
    }

    window.addEventListener('click', function (e) {
      if (e.target.matches('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-container button.increase') || e.target.matches('#wrapper .new_hero .region .cards.max-2-card .card .cart-buttons-container .quantity-selection-container button.decrease')) {
        console.log('clicked');
        if (document.querySelector('.new_hero .max-2-card .card-1 .discount-price')) {
          console.log('clicked 2');
          document.querySelector('.new_hero .max-2-card .card-1 .discount-price').textContent = document.querySelector('.new_hero .max-2-card .card-1 .discount-price').textContent.replace(/US/g, '');
        }
      }
    });

    if (document.querySelector('.max-2-card .license-features')) {
      document.querySelectorAll('.max-2-card .license-features ul li span .tooltip img').forEach(item => {
        item.src = "//res.cloudinary.com/spiralyze/image/upload/v1737506858/techsmithcamtasia/221/info_1_webp.webp";
        item.alt = "info";
      });
    }

    if (document.querySelector('.new_hero .max-2-card .card-1 .full-price')) {
      document.querySelector('.new_hero .max-2-card .card-1 .full-price').textContent = document.querySelector('.new_hero .max-2-card .card-1 .full-price').textContent.replace(/US/g, '');
    }
    if (document.querySelector('.new_hero .SubscriptionPlan3 .full-price')) {
      document.querySelector('.new_hero .SubscriptionPlan3 .full-price').textContent = document.querySelector('.new_hero .SubscriptionPlan3 .full-price').textContent.replace(/US/g, '');
    }
    if (document.querySelector('.new_hero .tsc-store-card-view .SubscriptionPlan2 .promo-indicator .indicator-content img')) {
      var starImage = document.querySelector('.new_hero .tsc-store-card-view .SubscriptionPlan2 .promo-indicator .indicator-content img')
      starImage.src = "//res.cloudinary.com/spiralyze/image/upload/v1737631268/techsmithcamtasia/222/star-white.svg";
      starImage.alt = "star";
    }
    document.querySelector('.spz_221 .tsc-header > .logo-wrapper .logo img').src = "//res.cloudinary.com/spiralyze/image/upload/v1739288355/techsmithcamtasia/221/Logos-2x.png"

    document.querySelector('.cards').insertAdjacentHTML('afterend', `<div class="cards_outer cards_slider splide"><div class="splide__track"></div></div>`);
    document.querySelector('.splide__track').insertAdjacentElement('afterbegin', document.querySelector('.cards'));
    document.querySelector('.cards').classList.add('splide__list');
    document.querySelectorAll('.cards .card').forEach(item => {
      let slide = document.createElement('div');
      slide.classList.add('splide__slide');
      slide.appendChild(item);
      document.querySelector('.splide__list').appendChild(slide);
    });

    if (document.querySelector('#wrapper .new_hero .region .cards.max-2-card')) {
      document.querySelector('.cards_outer').classList.add('two_cards')
      document.querySelector('#wrapper .new_hero .cards_outer').insertAdjacentHTML('beforeend', `
        <div class="cards_disclaimer">
          <p>Get Camtasia for your team. <a href="https://www.techsmith.com/camtasia-system-requirements.html" >View full system requirements</a></p>
        </div>
      `);
    }

    setTimeout(() => {
      loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
        var splide221 = new Splide('.cards_slider', {
          autoWidth: false,
          perPage: 3,
          arrows: false,
          pagination: true,
          drag: false,
          speed: 400,
          autoplay: false,
          interval: 0,
          pauseOnHover: false,
          pauseOnFocus: false,
          breakpoints: {
            960.59: {
              perPage: 2,
              gap: 20,
              drag: true,
            },
            767: {
              perPage: 1,
              gap: 25,
            }
          }
        });

        setTimeout(function () {
          splide221.mount();
          window.dispatchEvent(new Event('resize'));
        }, 200)
        
        let resizeTimer;
        window.addEventListener('resize', function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function () {
            splide221.refresh();
          }, 300);
        });
      }, document.body);
    }, 1000);

  }
}

var bodyInterval222 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval222);
    loadTestCode221();
  }
}, 10);
