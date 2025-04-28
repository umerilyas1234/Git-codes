var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '//res.cloudinary.com/spiralyze/raw/upload/v1739222459/techsmithcamtasia/221/src/styles.css';

if (!document.querySelector('link[href="//res.cloudinary.com/spiralyze/raw/upload/v1739222459/techsmithcamtasia/221/src/styles.css"]')) {
  document.getElementsByTagName('head')[0].appendChild(link);
}
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
              <span><b>4.6 </b> (1,444 reviews)</span>
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
    document.querySelectorAll('#wrapper .region .cards .card .pricing-group .billing-schedule').forEach(item => {
      item.textContent = "billed annually";
    });




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

    if (document.querySelector('.max-2-card .license-features')) {
      document.querySelectorAll('.max-2-card .license-features ul li span .tooltip img').forEach(item => {
        item.src = "//res.cloudinary.com/spiralyze/image/upload/v1737506856/techsmithcamtasia/221/info_1.svg";
        item.alt = "info";
      });
    }
    document.querySelector('.cards').insertAdjacentHTML('afterend', `
      <div class="dots">
        <span class="dot active" data-index="0"></span>
        <span class="dot" data-index="1"></span>
        <span class="dot" data-index="2"></span>
      </div>
    `);
    if (document.querySelector('#wrapper .new_hero .region .cards.max-2-card')) {
      document.querySelector('#wrapper .new_hero .region .cards.max-2-card').insertAdjacentHTML('afterend', `
        <div class="cards_disclaimer">
          <p>Get Camtasia for your team. <a href="https://www.techsmith.com/camtasia-system-requirements.html" >View full system requirements</a></p>
        </div>
      `);
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
    document.querySelector('.spz_221 .tsc-header > .logo-wrapper .logo img').src = "//res.cloudinary.com/spiralyze/image/upload/v1738855743/techsmithcamtasia/221/logo-light.svg.png"

    document.querySelector('.cards').insertAdjacentHTML('afterend', `<div class="cards_outer"></div>`);
    document.querySelector('.cards_outer').insertAdjacentElement('afterbegin', document.querySelector('.cards'));

    // const dots = document.querySelectorAll('.dot');
    // const cardContainer = document.querySelector('.cards');
    
    // // Dot click functionality
    // dots.forEach((dot, index) => {
    //   dot.addEventListener('click', () => {
    //     cardContainer.classList.remove('second', 'third');
    //     dots.forEach(dot => dot.classList.remove('active'));
    //     if (dot.matches('.dots .dot:nth-child(2)')) {
    //       cardContainer.classList.add('second');
    //       dot.classList.add('active');
    //     } else if (dot.matches('.dots .dot:nth-child(3)')) {
    //       cardContainer.classList.add('third');
    //       dot.classList.add('active');
    //     } else {
    //       dot.classList.add('active');
    //     }
    //   });
    // });


    const cardsContainer = document.querySelector('.cards');
    const dots = document.querySelectorAll('.dot');
    const cardWidth = document.querySelector('.card').clientWidth + 30.5;
    let currentIndex = 0;

    // Dot click functionality
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCardsPosition();
        updateDots();
      });
    });

    // Swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    cardsContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });

    cardsContainer.addEventListener('touchmove', (e) => {
      touchEndX = e.touches[0].clientX;
    });

    cardsContainer.addEventListener('touchend', () => {
      handleSwipe();
    });

    function handleSwipe() {
      const swipeThreshold = 50; // Minimum swipe distance to trigger a change
      const swipeDistance = touchEndX - touchStartX;

      if (swipeDistance > swipeThreshold && currentIndex > 0) {
        // Swipe right (previous card)
        currentIndex--;
      } else if (swipeDistance < -swipeThreshold && currentIndex < dots.length - 1) {
        // Swipe left (next card)
        currentIndex++;
      }

      updateCardsPosition();
      updateDots();
    }

    function updateCardsPosition() {
      const offset = -currentIndex * cardWidth; // Include the extra 30px in the calculation
      cardsContainer.style.transform = `translateX(${offset}px)`;
    }

    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }



  }
}

var bodyInterval222 = setInterval(() => {
  if (document.querySelectorAll("body").length > 0) {
    clearInterval(bodyInterval222);
    loadTestCode221();
  }
}, 100);
